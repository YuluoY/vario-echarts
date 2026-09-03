/**
 * useSchemaFormLayout - 表单布局 Composable
 * 
 * 功能：将 Vario Schema 转换为带标签的表单行布局
 * 特点：
 * - 支持深层嵌套
 * - 支持自定义标签映射
 * - 易于移植到其他项目
 * - 支持折叠面板懒加载（通过 panelOpened 参数控制）
 * 
 * 懒加载实现原理：
 * - 调用 wrapCollapse 时传入 panelOpened 状态对象
 * - 根据面板是否曾经打开过决定是否渲染内容
 * - 面板内容仅在首次打开时渲染，之后保持渲染状态
 */

import type { Schema } from '@variojs/schema';

export interface FormLayoutOptions {
  /**
   * 标签映射函数（优先级最高）
   */
  labelMapper?: (placeholder: string, path?: string) => string;
  
  /**
   * 标签位置
   */
  labelPosition?: 'left' | 'top';
  
  /**
   * 标签宽度（labelPosition=left 时生效）
   */
  labelWidth?: string;
  
  /**
   * 表单行类名
   */
  rowClass?: string;
  
  /**
   * 标签类名
   */
  labelClass?: string;
  
  /**
   * 控件容器类名
   */
  controlClass?: string;
  
  /**
   * 是否递归处理嵌套的 ElCollapseItem（默认 true）
   */
  recursive?: boolean;
}

/**
 * 默认配置
 */
const DEFAULT_OPTIONS: Required<FormLayoutOptions> = {
  labelMapper: (placeholder: string) => placeholder || 'field',
  labelPosition: 'left',
  labelWidth: '120px',
  rowClass: 'form-option-row',
  labelClass: 'option-label',
  controlClass: 'option-control',
  recursive: true
};

/**
 * 使用表单布局
 */
export function useSchemaFormLayout(options: FormLayoutOptions = {}) {
  const opts = { ...DEFAULT_OPTIONS, ...options };

  /**
   * 包装单个节点为表单行
   */
  const wrapNodeAsFormRow = (node: any, path: string = '', depth: number = 0): Schema => {
    // 如果是嵌套的 ElCollapseItem，递归处理
    if (opts.recursive && node.type === 'ElCollapseItem') {
      return wrapCollapseItem(node, path, depth);
    }

    // 获取标签文本
    const placeholder = node.props?.placeholder || '';
    const nodePath = path ? `${path}.${placeholder}` : placeholder;
    const label = opts.labelMapper!(placeholder, nodePath);
    
    // 获取提示信息（调试）
    const desc = node._raw?.desc;

    // 构建标签内容（可能包含提示）
    const labelChildren: any[] = [
      {
        type: 'span',
        children: label
      }
    ];

    // 如果有 desc，添加提示图标
    if (desc) {
      labelChildren.push({
        type: 'ElTooltip',
        props: {
          effect: 'dark',
          content: desc,
          placement: 'top',
          rawContent: true
        },
        children: [{
          type: 'i',
          props: {
            class: 'el-icon-question',
            style: 'margin-left: 4px; cursor: help; color: var(--el-color-info);'
          },
          children: '?'
        }]
      });
    }

    // 构建表单行
    return {
      type: 'div',
      props: { 
        class: opts.rowClass,
        'data-path': nodePath
      },
      children: [
        // 标签
        {
          type: 'label',
          props: { 
            class: opts.labelClass,
            style: opts.labelPosition === 'left' ? `width: ${opts.labelWidth}` : undefined
          },
          children: labelChildren
        },
        // 控件容器
        {
          type: 'div',
          props: { class: opts.controlClass },
          children: [
            // 移除 placeholder（已用作 label）
            { 
              ...node, 
              props: { 
                ...node.props
              } 
            }
          ]
        }
      ]
    } as Schema;
  };

  /**
   * 包装 ElCollapseItem（支持条件渲染/懒加载）
   * 
   * 懒加载实现：
   * - 通过 panelOpened 参数判断面板是否曾经打开过
   * - 首次打开时渲染内容，之后保持渲染状态
   * - 未打开的面板 children 为空数组，不渲染任何内容
   */
  const wrapCollapseItem = (
    node: any, 
    parentPath: string = '', 
    depth: number = 0,
    panelOpened?: Record<string, boolean>
  ): Schema => {
    if (!Array.isArray(node.children)) {
      return node as Schema;
    }

    const originalName = node.props?.name || '';
    // 生成唯一的 name，避免同名冲突
    const uniqueName = parentPath 
      ? `${parentPath}.${originalName}` 
      : originalName;
    const itemPath = uniqueName;

    // 检查面板是否曾经打开过（懒加载）
    const isOpened = panelOpened ? panelOpened[uniqueName] : true;
    
    // 将子节点包装为表单行（仅在面板打开过时才处理）
    const formRows = isOpened 
      ? node.children.map((child: any) => {
          // 如果子节点是 ElCollapseItem，递归处理并增加深度
          if (opts.recursive && child.type === 'ElCollapseItem') {
            return wrapCollapseItem(child, itemPath, depth + 1, panelOpened);
          }
          return wrapNodeAsFormRow(child, itemPath);
        })
      : [];  // 未打开过的面板不渲染内容

    // 翻译 title
    const originalTitle = node.props?.title || '';
    const translatedTitle = originalTitle ? opts.labelMapper!(originalTitle, itemPath) : originalTitle;

    return {
      type: 'ElCollapseItem',
      // 强制组件化：保证懒加载挂载内容前后 vnode 类型稳定（始终为 VarioNode），
      // 避免 ElCollapseItem 因内联/组件化路径切换被重建，丢失折叠过渡动画
      _componentize: true,
      props: {
        ...node.props,
        name: uniqueName, // 使用唯一的 name
        title: translatedTitle, // 使用翻译后的 title
        'data-depth': depth // 添加深度属性用于 CSS 缩进
      },
      children: isOpened 
        ? [
            {
              type: 'div',
              props: { class: 'form-options' },
              children: formRows
            }
          ]
        : []  // 未打开过的面板不渲染内容
    } as Schema;
  };

  return {
    /**
     * 包装单个节点为表单行
     */
    wrapNode: wrapNodeAsFormRow,
    
    /**
     * 包装 CollapseItem（支持懒加载）
     */
    wrapCollapse: wrapCollapseItem
  };
}

/**
 * 创建带国际化的表单布局
 */
export function useI18nFormLayout(
  i18n: Record<string, string>,
  options: Omit<FormLayoutOptions, 'labelMapper'> = {}
) {
  return useSchemaFormLayout({
    ...options,
    labelMapper: (placeholder: string) => i18n[placeholder] || placeholder
  });
}

/**
 * 创建简单表单布局（无标签映射）
 */
export function useSimpleFormLayout(
  options: Omit<FormLayoutOptions, 'labelMapper'> = {}
) {
  return useSchemaFormLayout({
    ...options,
    labelMapper: (placeholder: string) => {
      // 驼峰转空格
      return placeholder
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .trim();
    }
  });
}
