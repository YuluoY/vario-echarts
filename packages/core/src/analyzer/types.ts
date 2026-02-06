/**
 * 类型分析器类型定义
 */

/** 字段类别 */
export type FieldCategory =
  | 'style'      // 样式类型
  | 'color'      // 颜色类型
  | 'size'       // 尺寸类型
  | 'position'   // 定位类型
  | 'opacity'    // 透明度
  | 'font'       // 字体相关
  | 'boolean'    // 布尔值
  | 'number'     // 纯数字
  | 'string'     // 纯字符串
  | 'array'      // 数组
  | 'object'     // 对象
  | 'function'   // 函数
  | 'generic';   // 通用类型

/** 属性名模式 */
export type PropPattern =
  | 'type-suffix'
  | 'color-suffix'
  | 'width'
  | 'height'
  | 'position'
  | 'opacity'
  | 'font'
  | 'shadow-color'
  | 'border-color'
  | 'text'
  | 'generic';

/** 类型分析结果 */
export interface TypeAnalysisResult {
  rawTypes: string[];
  isUnion: boolean;
  category: FieldCategory;
  hasSpecialDefault: boolean;
  specialKeywords: string[];
  recommendedComponent: string;
  componentProps: Record<string, unknown>;
  parsedDefault: unknown;
  meta: {
    propPattern: PropPattern;
    allowCustom: boolean;
    enumOptions?: string[];
  };
}
