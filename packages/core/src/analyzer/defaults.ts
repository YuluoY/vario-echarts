/**
 * 特殊默认值字典
 */

/** 线型样式关键字 */
export const LINE_STYLE_KEYWORDS = ['solid', 'dashed', 'dotted'];

/** 定位关键字 */
export const POSITION_KEYWORDS = ['left', 'right', 'center', 'top', 'bottom', 'middle', 'auto'];

/** 字体粗细关键字 */
export const FONT_WEIGHT_KEYWORDS = ['normal', 'bold', 'bolder', 'lighter'];

/** 字体样式关键字 */
export const FONT_STYLE_KEYWORDS = ['normal', 'italic', 'oblique'];

/** 特殊关键字集合 */
export const SPECIAL_KEYWORD_VALUES = new Set([
  ...LINE_STYLE_KEYWORDS,
  ...POSITION_KEYWORDS,
  ...FONT_WEIGHT_KEYWORDS,
  ...FONT_STYLE_KEYWORDS,
  'auto', 'inherit', 'none', 'transparent'
]);

/**
 * 检查值是否为特殊关键字
 */
export function isSpecialKeyword(value: unknown): boolean {
  if (typeof value !== 'string') return false;
  const normalized = value.toLowerCase().replace(/^['"]|['"]$/g, '');
  return SPECIAL_KEYWORD_VALUES.has(normalized);
}

/**
 * 解析默认值字符串
 */
export function parseDefaultValue(value: unknown): unknown {
  if (value === undefined || value === null) return value;
  if (typeof value === 'boolean' || typeof value === 'number') return value;
  if (typeof value !== 'string') return value;

  const trimmed = value.trim();
  const unquoted = trimmed.replace(/^['"]|['"]$/g, '');

  // 尝试解析为数字
  const numValue = Number(unquoted);
  if (!isNaN(numValue) && unquoted !== '' && !isSpecialKeyword(unquoted)) {
    return numValue;
  }

  // 解析布尔值
  if (unquoted === 'true') return true;
  if (unquoted === 'false') return false;

  return unquoted;
}

/**
 * 检查默认值中的特殊关键字
 */
export function checkSpecialKeywords(defaultValue: unknown): string[] {
  const keywords: string[] = [];
  if (typeof defaultValue === 'string') {
    const normalized = defaultValue.toLowerCase().replace(/^['"]|['"]$/g, '');
    if (SPECIAL_KEYWORD_VALUES.has(normalized)) {
      keywords.push(normalized);
    }
  }
  return keywords;
}
