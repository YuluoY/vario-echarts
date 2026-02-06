/**
 * Schema 生成器
 * 将 TypeTreeNode 转换为 Vario Schema
 */

import type { TypeTreeNode, BaseTypeTree } from '../types/base.js';
import type { SmartSchemaNode } from '../types/schema.js';
import { TypeAnalyzer, typeAnalyzer } from '../analyzer/analyzer.js';

/** 组件映射 */
const COMPONENT_MAP = {
  Input: 'ElInput',
  Number: 'ElInputNumber',
  Slider: 'ElSlider',
  Switch: 'ElSwitch',
  ColorPicker: 'ElColorPicker',
  Select: 'ElSelect',
  Option: 'ElOption',
  CollapseItem: 'ElCollapseItem',
};

/** 类型到组件映射 */
const TYPE_COMPONENT_MAP: Record<string, { type: string; props?: Record<string, unknown> }> = {
  string: { type: COMPONENT_MAP.Input },
  boolean: { type: COMPONENT_MAP.Switch },
  number: { type: COMPONENT_MAP.Number },
  color: { type: COMPONENT_MAP.ColorPicker, props: { showAlpha: true } },
};

export interface GeneratorOptions {
  /** 使用智能组件 */
  useSmartComponents?: boolean;
  /** 添加 _smart 元数据 */
  includeSmartMeta?: boolean;
}

export class SchemaGenerator {
  private analyzer: TypeAnalyzer;
  private options: GeneratorOptions;

  constructor(options: GeneratorOptions = {}) {
    this.analyzer = typeAnalyzer;
    this.options = {
      useSmartComponents: true,
      includeSmartMeta: false, // 默认不包含 _smart 元数据
      ...options,
    };
  }

  /**
   * 生成单个 option 的 schema
   */
  generate(
    optionKey: string,
    typeTree: BaseTypeTree,
    optionDesc?: string,
    optionDetail?: Record<string, any>
  ): SmartSchemaNode[] {
    const rootChildren = typeTree.children;
    if (!rootChildren?.length) return [];

    // 直接匹配根子节点
    let typeNode = rootChildren.find((c) => c.prop === optionKey);
    if (typeNode) {
      return this.buildSchemaFromTypeTree(optionKey, typeNode, optionDesc, optionKey, optionDetail);
    }

    // 处理带连字符的 key（如 series-line）
    const dash = optionKey.indexOf('-');
    if (dash > 0) {
      const parentKey = optionKey.slice(0, dash);
      const subKey = optionKey.slice(dash + 1);
      const parent = rootChildren.find((c) => c.prop === parentKey);
      const child = parent?.children?.find((c) => c.arrayItemType === subKey);
      if (child) {
        const basePath = optionKey.replace(/-/g, '.');
        return this.buildSchemaFromTypeTree(optionKey, child, optionDesc, basePath, optionDetail);
      }
    }

    return [];
  }

  private buildSchemaFromTypeTree(
    optionKey: string,
    typeNode: TypeTreeNode,
    optionDesc: string | undefined,
    basePath: string,
    optionDetail?: Record<string, any>
  ): SmartSchemaNode[] {
    const path = this.modelPath(optionKey, basePath, typeNode.prop);

    // 对象类型：递归处理子节点
    if (typeNode.isObject && typeNode.children && typeNode.children.length > 0) {
      const title = typeNode.prop || typeNode.arrayItemType || '';
      const children: SmartSchemaNode[] = [];
      
      for (const child of typeNode.children) {
        if (child.prop === '<style_name>') continue;
        children.push(...this.buildSchemaFromTypeTree(optionKey, child, undefined, path, optionDetail));
      }
      
      if (children.length === 0) return [];
      
      // 使用 vario-vue 标准的折叠面板格式
      return [
        {
          type: COMPONENT_MAP.CollapseItem,
          props: { title, name: title },
          children,
        },
      ];
    }

    // 叶子节点：生成表单组件
    const componentType = this.getComponentType(typeNode);
    const defaultValue = this.parseDefault(typeNode.default);

    // 构建符合 vario-vue 规范的 Schema 节点
    const node: SmartSchemaNode = {
      type: componentType,
      // vario-vue 的 model 支持字符串路径或 ModelScopeConfig
      model: defaultValue !== undefined 
        ? { path, default: defaultValue } 
        : path,  // 简化为字符串路径
      props: {},
    };

    // 添加 placeholder 到 props
    if (!node.props) {
      node.props = {};
    }
    
    if (optionDesc && basePath === optionKey) {
      node.props.placeholder = this.truncate(this.stripHtml(optionDesc), 100);
    } else if (typeNode.prop) {
      node.props.placeholder = typeNode.prop;
    }

    // 添加 _raw 元数据（包含原始字段名和描述）
    if (typeNode.prop) {
      node._raw = {
        label: typeNode.prop,
      };
      
      // 如果有详情数据，提取 desc
      if (optionDetail) {
        // optionDetail 结构: { "__EC_DOC_option_xxx": { "field": { desc: "..." }, ... } }
        // 需要先获取内层对象
        const docKeys = Object.keys(optionDetail).filter(k => k.startsWith('__EC_DOC_'));
        const innerDetail = docKeys.length > 0 ? optionDetail[docKeys[0]] : optionDetail;
        
        // 计算字段在详情数据中的键
        // 对于 title.id，path 是 "title.id"，optionKey 是 "title"，去掉前缀得到 "id"
        // 对于 title.textStyle.color，path 是 "title.textStyle.color"，得到 "textStyle.color"
        // 对于 dataZoom.slider.id，path 是 "dataZoom.slider.id"，optionKey 是 "dataZoom-slider"
        //   需要将 optionKey 中的 "-" 替换为 "."，然后去掉前缀得到 "id"
        const pathPrefix = optionKey.replace(/-/g, '.');
        const fieldPath = path.replace(new RegExp(`^${pathPrefix}\\.`), '');
        const descKey = fieldPath || typeNode.prop;
        const fieldDetail = innerDetail[descKey];
        
        if (fieldDetail && fieldDetail.desc) {
          // 保留原始 HTML 内容（已经是对应 locale 的描述，不需要翻译）
          node._raw.desc = fieldDetail.desc;
        }
      }
    }

    // 添加智能分析元数据
    if (this.options.includeSmartMeta || this.options.useSmartComponents) {
      const analysis = this.analyzer.analyze(typeNode);
      
      // 使用智能组件
      if (this.options.useSmartComponents && analysis.recommendedComponent.startsWith('Smart')) {
        node.type = analysis.recommendedComponent;
        // 合并智能组件的 props
        node.props = { ...node.props, ...analysis.componentProps };
      }

      // 添加元数据
      if (this.options.includeSmartMeta) {
        node._smart = {
          rawTypes: analysis.rawTypes,
          category: analysis.category,
          specialKeywords: analysis.specialKeywords,
          allowCustom: analysis.meta.allowCustom,
          enumOptions: analysis.meta.enumOptions,
          propPattern: analysis.meta.propPattern,
        };
      }
    }

    return [node];
  }

  private modelPath(
    optionKey: string,
    basePath: string,
    prop: string | undefined
  ): string {
    if (!prop) return basePath;
    const isRoot = basePath === optionKey && prop === optionKey;
    return isRoot ? optionKey : `${basePath}.${prop}`;
  }

  private getComponentType(node: TypeTreeNode): string {
    const type = node.type;
    const def = node.default;

    if (typeof def === 'boolean') return COMPONENT_MAP.Switch;
    
    if (Array.isArray(type)) {
      const t = type.map((s) => String(s).toLowerCase());
      if (t.includes('boolean')) return COMPONENT_MAP.Switch;
      if (t.includes('number')) return COMPONENT_MAP.Number;
      if (t.includes('color')) return COMPONENT_MAP.ColorPicker;
      return COMPONENT_MAP.Input;
    }

    const typeStr = String(type || '').toLowerCase();
    const mapped = TYPE_COMPONENT_MAP[typeStr];
    if (mapped) return mapped.type;

    if (type === 'Color') return COMPONENT_MAP.ColorPicker;
    
    return COMPONENT_MAP.Input;
  }

  private parseDefault(value: unknown): unknown {
    if (value === undefined || value === null) return value;
    if (typeof value === 'boolean' || typeof value === 'number') return value;
    if (typeof value !== 'string') return value;

    const s = value.trim();
    
    if (s === 'true') return true;
    if (s === 'false') return false;
    if (s === 'null') return null;
    if (s === 'undefined') return undefined;
    
    const num = Number(s);
    if (!isNaN(num)) return num;
    
    // 移除引号
    const unquoted = s.replace(/^['"]|['"]$/g, '');
    
    // 空字符串返回 undefined，避免类型错误
    if (unquoted === '') return undefined;
    
    return unquoted;
  }

  private stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').trim();
  }

  private truncate(str: string, maxLength: number): string {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
  }
}

export const schemaGenerator = new SchemaGenerator();
