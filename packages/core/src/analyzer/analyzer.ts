/**
 * TypeAnalyzer - 类型分析引擎
 */

import type { TypeTreeNode } from '../types/base.js';
import type { TypeAnalysisResult, FieldCategory, PropPattern } from './types.js';
import { parseDefaultValue, checkSpecialKeywords, LINE_STYLE_KEYWORDS, POSITION_KEYWORDS } from './defaults.js';
import { matchPropPattern, inferCategoryByProp, isStyleTypeField } from './patterns.js';

/** 组件类型映射 */
const COMPONENT_MAP: Record<string, string> = {
  string: 'VInput',
  number: 'VInputNumber',
  boolean: 'VSwitch',
  color: 'VColorPicker',
  array: 'VArrayInput',
  object: 'VObjectEditor',
  function: 'VFunctionInput',
  union: 'SmartUnionInput',
  style: 'SmartStyleSelect',
  numberWithKeywords: 'SmartNumberInput',
  colorWithKeywords: 'SmartColorInput',
  opacity: 'SmartOpacityInput',
  size: 'SmartSizeInput',
  position: 'SmartPositionInput',
};

export class TypeAnalyzer {
  analyze(node: TypeTreeNode): TypeAnalysisResult {
    const prop = node.prop || '';
    const rawTypes = this.normalizeTypes(node.type);
    const isUnion = rawTypes.length > 1;
    const propPattern = matchPropPattern(prop);
    const category = this.determineCategory(node, rawTypes, propPattern);
    const parsedDefault = parseDefaultValue(node.default);
    const specialKeywords = this.extractSpecialKeywords(node, rawTypes, category);
    const hasSpecialDefault = specialKeywords.length > 0;

    const { component, props } = this.determineComponent(
      node, rawTypes, category, propPattern, specialKeywords
    );

    return {
      rawTypes,
      isUnion,
      category,
      hasSpecialDefault,
      specialKeywords,
      recommendedComponent: component,
      componentProps: props,
      parsedDefault,
      meta: {
        propPattern,
        allowCustom: this.shouldAllowCustom(rawTypes, category),
        enumOptions: this.getEnumOptions(category),
      },
    };
  }

  private normalizeTypes(type: string | string[] | undefined): string[] {
    if (!type) return [];
    if (Array.isArray(type)) return type.map((t) => t.toLowerCase());
    return [type.toLowerCase()];
  }

  private determineCategory(
    node: TypeTreeNode,
    rawTypes: string[],
    propPattern: PropPattern
  ): FieldCategory {
    const prop = node.prop || '';

    // 根据属性名模式推断
    const patternCategory = inferCategoryByProp(prop);
    if (patternCategory !== 'generic') return patternCategory;

    // 根据类型推断
    if (rawTypes.length === 1) {
      const singleType = rawTypes[0];
      if (singleType === 'boolean') return 'boolean';
      if (singleType === 'number') return 'number';
      if (singleType === 'string') return 'string';
      if (singleType === 'color') return 'color';
      if (singleType === 'array') return 'array';
      if (singleType === 'object') return 'object';
      if (singleType === 'function') return 'function';
    }

    // 联合类型特殊处理
    if (rawTypes.includes('color')) return 'color';
    if (this.isNumberStringUnion(rawTypes)) {
      if (['width', 'height'].includes(prop)) return 'size';
      if (['left', 'top', 'right', 'bottom'].includes(prop)) return 'position';
    }

    return 'generic';
  }

  private isNumberStringUnion(types: string[]): boolean {
    return types.length === 2 && types.includes('number') && types.includes('string');
  }

  private extractSpecialKeywords(
    node: TypeTreeNode,
    rawTypes: string[],
    category: FieldCategory
  ): string[] {
    const keywords = new Set<string>();

    // 从默认值中提取
    checkSpecialKeywords(node.default).forEach((k) => keywords.add(k));

    // 根据类别添加常用关键字
    switch (category) {
      case 'style':
        LINE_STYLE_KEYWORDS.forEach((k) => keywords.add(k));
        break;
      case 'position':
        POSITION_KEYWORDS.forEach((k) => keywords.add(k));
        break;
      case 'color':
        keywords.add('inherit');
        keywords.add('none');
        keywords.add('transparent');
        break;
      case 'opacity':
        keywords.add('inherit');
        break;
      case 'size':
        keywords.add('auto');
        break;
    }

    return Array.from(keywords);
  }

  private determineComponent(
    node: TypeTreeNode,
    rawTypes: string[],
    category: FieldCategory,
    propPattern: PropPattern,
    specialKeywords: string[]
  ): { component: string; props: Record<string, unknown> } {
    // 样式类型字段（仅限以 Type 结尾的属性，如 lineType, borderType）
    if (isStyleTypeField(node.prop || '')) {
      return {
        component: COMPONENT_MAP.style,
        props: { 
          options: LINE_STYLE_KEYWORDS.map(val => ({
            value: val,
            label: val === 'solid' ? '实线' : val === 'dashed' ? '虚线' : val === 'dotted' ? '点线' : val,
            description: val === 'solid' ? '连续的实线' : val === 'dashed' ? '短横线组成的虚线' : val === 'dotted' ? '点组成的虚线' : val
          })),
          allowCustom: true 
        },
      };
    }

    // 颜色字段
    if (category === 'color') {
      return {
        component: COMPONENT_MAP.colorWithKeywords,
        props: {
          keywords: specialKeywords.filter((k) =>
            ['inherit', 'none', 'transparent'].includes(k)
          ),
          allowInherit: specialKeywords.includes('inherit'),
        },
      };
    }

    // 透明度字段
    if (category === 'opacity') {
      return {
        component: COMPONENT_MAP.opacity,
        props: { min: 0, max: 1, step: 0.1, keywords: specialKeywords.filter((k) => k === 'inherit') },
      };
    }

    // 尺寸字段
    if (category === 'size') {
      return {
        component: COMPONENT_MAP.size,
        props: { allowPercentage: true, keywords: specialKeywords.filter((k) => k === 'auto') },
      };
    }

    // 定位字段
    if (category === 'position') {
      return {
        component: COMPONENT_MAP.position,
        props: { keywords: POSITION_KEYWORDS, allowPercentage: true },
      };
    }

    // 联合类型
    if (rawTypes.length > 1) {
      return {
        component: COMPONENT_MAP.union,
        props: {
          types: rawTypes,
          defaultType: this.getDefaultType(rawTypes, node.default),
          specialKeywords,
        },
      };
    }

    // 单一类型的 number 但有特殊关键字
    if (rawTypes[0] === 'number' && specialKeywords.length > 0) {
      return {
        component: COMPONENT_MAP.numberWithKeywords,
        props: { keywords: specialKeywords },
      };
    }

    // 基础类型映射
    const baseType = rawTypes[0];
    if (baseType && COMPONENT_MAP[baseType]) {
      return { component: COMPONENT_MAP[baseType], props: {} };
    }

    return { component: 'VInput', props: {} };
  }

  private getDefaultType(types: string[], defaultValue: unknown): string {
    if (defaultValue === undefined) return types[0] || 'string';
    const parsed = parseDefaultValue(defaultValue);
    if (typeof parsed === 'boolean') return 'boolean';
    if (typeof parsed === 'number') return 'number';
    if (typeof parsed === 'string' && checkSpecialKeywords(parsed).length > 0) return 'string';
    return types[0] || 'string';
  }

  private shouldAllowCustom(rawTypes: string[], category: FieldCategory): boolean {
    if (category === 'style') return true;
    if (rawTypes.length > 1) return true;
    if (rawTypes.includes('array')) return true;
    return false;
  }

  private getEnumOptions(category: FieldCategory): string[] | undefined {
    if (category === 'style') return LINE_STYLE_KEYWORDS;
    return undefined;
  }
}

export const typeAnalyzer = new TypeAnalyzer();
