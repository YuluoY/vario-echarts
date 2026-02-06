/**
 * Base 物料类型定义
 */

/** base/option.mjs：按 option 名聚合，含描述与示例 */
export interface BaseOptionOutline {
  [optionKey: string]: {
    desc?: string;
    exampleBaseOptions?: Array<{ code?: string; name?: string; title?: string; 'title-en'?: string }>;
  };
}

/** base/type.mjs：单节点（prop / type / default / children / arrayItemType） */
export interface TypeTreeNode {
  prop: string;
  type?: string | string[];
  default?: unknown;
  isObject?: boolean;
  isArray?: boolean;
  children?: TypeTreeNode[];
  /** 数组项类型，用于 series/dataZoom/visualMap 等子项查找 */
  arrayItemType?: string;
}

/** base/type.mjs 根：仅含 children 数组 */
export interface BaseTypeTree {
  children: TypeTreeNode[];
}
