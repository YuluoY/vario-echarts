import { SchemaNode } from '@variojs/types';

/**
 * Schema 分析器 - 框架无关的纯函数实现
 *
 * 提供 Schema 统计和索引构建能力，不依赖任何前端框架
 */

/**
 * Schema 统计信息
 */
interface SchemaStats {
    /** 节点总数 */
    nodeCount: number;
    /** 最大深度 */
    maxDepth: number;
}
/**
 * Schema 索引映射
 */
interface SchemaIndex {
    /** ID -> 路径的映射 */
    idMap: Map<string, string>;
    /** 路径 -> 节点的映射（可选，用于快速访问） */
    pathMap?: Map<string, SchemaNode>;
}
/**
 * 分析结果
 */
interface AnalysisResult {
    stats: SchemaStats;
    index: SchemaIndex;
}
/**
 * 分析 Schema 结构
 *
 * 遍历整个 Schema 树，收集统计信息和构建索引
 *
 * @param schema 要分析的 Schema 根节点
 * @param options 分析选项
 * @returns 分析结果
 */
declare function analyzeSchema(schema: SchemaNode, options?: {
    /** 是否构建路径映射（会增加内存开销） */
    buildPathMap?: boolean;
    /** 自定义回调，在遍历每个节点时调用 */
    onNode?: (node: SchemaNode, path: string, depth: number) => void;
}): AnalysisResult;
/**
 * 在 Schema 中查找节点
 *
 * @param schema Schema 根节点
 * @param predicate 判断条件
 * @returns 匹配的节点路径数组
 */
declare function findNodes(schema: SchemaNode, predicate: (node: SchemaNode) => boolean): Array<{
    node: SchemaNode;
    path: string;
}>;
/**
 * 在 Schema 中查找第一个匹配的节点
 *
 * @param schema Schema 根节点
 * @param predicate 判断条件
 * @returns 匹配的节点和路径，如果未找到返回 null
 */
declare function findNode(schema: SchemaNode, predicate: (node: SchemaNode) => boolean): {
    node: SchemaNode;
    path: string;
} | null;
/**
 * 通过 ID 查找节点路径
 *
 * @param schema Schema 根节点
 * @param id 节点 ID
 * @returns 节点路径，如果未找到返回 null
 */
declare function findPathById(schema: SchemaNode, id: string): string | null;

/**
 * Schema 查询引擎 - 框架无关的查询 API
 */

/**
 * 查询引擎配置
 */
interface QueryEngineOptions {
    /** Schema 根节点 */
    schema: SchemaNode;
    /** 索引（可选，用于加速 ID 查询） */
    index?: SchemaIndex;
    /** 只读文档不得 patch */
    readonly?: boolean;
}
/**
 * 节点查询结果
 */
interface NodeResult {
    /** 节点对象 */
    node: SchemaNode;
    /** 节点路径 */
    path: string;
    /** 原地 patch；只读输入抛 SCHEMA_READONLY */
    patch: (partial: Partial<SchemaNode>) => SchemaNode;
}
declare function createQueryEngine(options: QueryEngineOptions): {
    findById: (id: string) => NodeResult | null;
    getParent: (path: string) => NodeResult | null;
};

/**
 * 迭代 Schema 扫描：显式栈，不依赖调用栈深度。
 */

declare const DEFAULT_MOUNT_MAX_DEPTH = 100;
declare const DEFAULT_SCAN_MAX_DEPTH = 10000;
type SchemaScanResult = {
    maxDepth: number;
    maxPath: string;
    maxNode: string;
    nodeCount: number;
    circular: boolean;
};
declare function scanSchemaIterative(root: SchemaNode, options?: {
    maxDepth?: number;
    throwOnCircular?: boolean;
}): SchemaScanResult;

export { type AnalysisResult, DEFAULT_MOUNT_MAX_DEPTH, DEFAULT_SCAN_MAX_DEPTH, type NodeResult, type QueryEngineOptions, type SchemaIndex, type SchemaScanResult, type SchemaStats, analyzeSchema, createQueryEngine, findNode, findNodes, findPathById, scanSchemaIterative };
