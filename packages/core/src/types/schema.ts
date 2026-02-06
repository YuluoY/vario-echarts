/**
 * Vario Schema 类型定义
 * 支持智能组件的扩展 Schema
 */

import type { FieldCategory, PropPattern } from '../analyzer/types.js';

/**
 * vario-vue 标准 Schema 节点定义
 * 遵循 @variojs/schema 的 SchemaNode 接口
 */
export interface VarioSchemaNode {
  /** 组件类型或 HTML 标签名 */
  type: string;
  
  /** 双向绑定路径（单 model）
   * - 字符串：绑定路径
   * - 对象：{ path, default?, lazy?, scope? }
   */
  model?: string | {
    path: string;
    default?: unknown;
    lazy?: boolean;
    scope?: boolean;
  };
  
  /** 组件属性（支持表达式插值） */
  props?: Record<string, unknown>;
  
  /** 子节点（SchemaNode 数组或字符串文本） */
  children?: VarioSchemaNode[] | string;
  
  /** 条件渲染表达式 */
  cond?: string;
  
  /** 可见性控制表达式 */
  show?: string;
  
  /** 列表渲染配置 */
  loop?: {
    items: string;
    itemKey: string;
    indexKey?: string;
  };
  
  /** 事件处理器 */
  events?: Record<string, Array<{
    type: string;
    [key: string]: unknown;
  }>>;
  
  /** 模板引用名称 */
  ref?: string;
  
  /** 插槽名称（template 节点） */
  slot?: string;
  
  /** 具名双向绑定（Vue 3.4+） */
  [key: `model:${string}`]: string | undefined;
}

/** 智能 Schema 节点（扩展自 VarioSchemaNode） */
export interface SmartSchemaNode extends VarioSchemaNode {
  /** 原始字段元数据 */
  _raw?: {
    /** 原始字段名 */
    label: string;
    /** 字段描述（从 ECharts API 获取） */
    desc?: string;
  };
  
  /** 智能分析元数据 */
  _smart?: {
    rawTypes: string[];
    category: FieldCategory;
    specialKeywords: string[];
    allowCustom: boolean;
    enumOptions?: string[];
    propPattern: PropPattern;
  };
}

/** Schema 转换选项 */
export interface SchemaGeneratorOptions {
  /** 保留 _tips 作为 placeholder */
  preserveTips?: boolean;
  /** 保留 _label 作为 label */
  preserveLabel?: boolean;
  /** 组件映射覆盖 */
  componentMapping?: Record<string, string>;
}
