/**
 * 字段模式匹配器
 */

import type { PropPattern, FieldCategory } from './types.js';

/** 模式匹配规则 */
interface PatternRule {
  pattern: PropPattern;
  category: FieldCategory;
  test: (prop: string) => boolean;
}

/** 模式匹配规则表 */
const PATTERN_RULES: PatternRule[] = [
  { pattern: 'type-suffix', category: 'style', test: (prop) => /Type$/.test(prop) },
  { pattern: 'color-suffix', category: 'color', test: (prop) => /Color$/.test(prop) },
  { pattern: 'position', category: 'position', test: (prop) => ['left', 'top', 'right', 'bottom'].includes(prop) },
  { pattern: 'width', category: 'size', test: (prop) => prop === 'width' },
  { pattern: 'height', category: 'size', test: (prop) => prop === 'height' },
  { pattern: 'opacity', category: 'opacity', test: (prop) => prop === 'opacity' },
  { pattern: 'font', category: 'font', test: (prop) => /^font/.test(prop) },
  { pattern: 'shadow-color', category: 'color', test: (prop) => prop === 'shadowColor' },
  { pattern: 'border-color', category: 'color', test: (prop) => /^border.*Color$/.test(prop) },
  { pattern: 'text', category: 'font', test: (prop) => /^text/.test(prop) },
];

/**
 * 识别属性名模式
 */
export function matchPropPattern(prop: string): PropPattern {
  if (!prop) return 'generic';
  for (const rule of PATTERN_RULES) {
    if (rule.test(prop)) return rule.pattern;
  }
  return 'generic';
}

/**
 * 根据属性名推断字段类别
 */
export function inferCategoryByProp(prop: string): FieldCategory {
  if (!prop) return 'generic';
  for (const rule of PATTERN_RULES) {
    if (rule.test(prop)) return rule.category;
  }
  return 'generic';
}

/**
 * 检查属性是否为样式类型字段
 */
export function isStyleTypeField(prop: string): boolean {
  return matchPropPattern(prop) === 'type-suffix';
}
