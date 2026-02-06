/**
 * Core Package - 统一导出
 */

// 类型
export type { BaseOptionOutline, TypeTreeNode, BaseTypeTree } from './types/base.js';
export type { VarioSchemaNode, SmartSchemaNode, SchemaGeneratorOptions } from './types/schema.js';
export type { TypeAnalysisResult, FieldCategory, PropPattern } from './analyzer/types.js';

// Loader
export { BaseLoader, type BaseData } from './loader/base-loader.js';

// Analyzer
export { TypeAnalyzer, typeAnalyzer } from './analyzer/analyzer.js';
export { 
  isSpecialKeyword, 
  parseDefaultValue, 
  checkSpecialKeywords,
  LINE_STYLE_KEYWORDS,
  POSITION_KEYWORDS,
  FONT_WEIGHT_KEYWORDS,
  FONT_STYLE_KEYWORDS,
} from './analyzer/defaults.js';
export { matchPropPattern, inferCategoryByProp, isStyleTypeField } from './analyzer/patterns.js';

// Generator
export { SchemaGenerator, schemaGenerator } from './generator/vario-generator.js';
