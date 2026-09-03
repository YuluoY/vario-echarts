import * as _variojs_types from '@variojs/types';
import { SchemaNode, EventHandler, Action, EventHandlerArray, DefineSchemaConfig, VarioView, Schema, SchemaDocument, VarioDiagnostic, PreparedView, PreparedNode } from '@variojs/types';
export { DefineSchemaConfig, DirectiveArray, DirectiveConfig, DirectiveObject, InferServicesFromConfig, InferStateFromConfig, InferStateType, LoopConfig, MaterialManifest, ModelScopeConfig, Schema, SchemaDocument, SchemaNode, SchemaValidationErrorContext, VarioView } from '@variojs/types';
import { DiagnosticSink } from '@variojs/core';
export { E as EVENT_MODIFIERS, P as PrepareViewOptions, e as assertSupportedModifiers, b as bindPreparedSources, a as buildPrepareIndex, c as classifyRegion, g as getPreparedSources, d as groupMaximalRegions, l as listPreparedNodes, p as prepareView, r as recompileIncremental, t as traverseIterative } from './index-DdPhlpvY.js';
export { parseSchema, serializeSchema } from './codec.js';

/**
 * Schema 验证错误
 */
declare class SchemaValidationError extends Error {
    readonly path: string;
    readonly code?: string | undefined;
    readonly context?: _variojs_types.SchemaValidationErrorContext | undefined;
    constructor(path: string, message: string, code?: string | undefined, context?: _variojs_types.SchemaValidationErrorContext | undefined);
    /**
     * 获取友好的错误消息（包含修复建议）
     */
    getFriendlyMessage(): string;
}

/**
 * Schema 验证器
 *
 * 功能：
 * - 结构验证（必需字段、类型检查）
 * - 表达式安全验证（使用 vario-core 的表达式系统）
 * - 路径验证（model, loop.items 等）
 * - 递归校验
 * - 详细错误信息（路径、原因、修复建议）
 *
 * 遵循 TypeScript 最佳实践：
 * - 使用类型守卫
 * - 使用 readonly 确保不可变性
 * - 使用联合类型
 */

/**
 * 验证选项
 */
interface ValidationOptions {
    /** 是否验证表达式（默认 true） */
    validateExpressions?: boolean;
    /** 是否验证路径（默认 true） */
    validatePaths?: boolean;
    /** 自定义验证器 */
    customValidators?: Array<(node: SchemaNode, path: string) => void>;
    /** 最大递归深度（默认 100），防止超深嵌套或循环引用导致栈溢出 */
    maxDepth?: number;
    diagnosticSink?: DiagnosticSink;
}
/**
 * 验证 Schema 节点
 *
 * @param node Schema 节点
 * @param path 当前路径（用于错误报告）
 * @param options 验证选项
 * @param _depth 当前递归深度（内部使用）
 * @param _visited 已访问节点集合，用于检测循环引用（内部使用）
 * @throws SchemaValidationError 如果验证失败
 */
declare function validateSchemaNode(node: unknown, path?: string, options?: ValidationOptions, _depth?: number, _visited?: Set<unknown>, _seenIds?: Map<string, string>): asserts node is SchemaNode;
/**
 * 验证整个 Schema
 *
 * @param schema Schema 根节点
 * @param options 验证选项
 * @throws SchemaValidationError 如果验证失败
 */
declare function validateSchema(schema: unknown, options?: ValidationOptions): asserts schema is SchemaNode;
/**
 * 验证 Schema 并返回详细结果
 *
 * @param schema Schema 根节点
 * @param options 验证选项
 * @returns 验证结果
 */
declare function validateSchemaWithResult(schema: unknown, options?: ValidationOptions): {
    valid: boolean;
    errors: SchemaValidationError[];
};

/**
 * Schema 规范化器
 *
 * 功能：
 * - 统一格式（标准化属性顺序、默认值）
 * - 优化结构（移除冗余、合并相同属性、扁平化）
 * - 深度规范化（递归处理子节点）
 * - 性能优化（缓存规范化结果）
 *
 * 遵循 TypeScript 最佳实践：
 * - 使用 readonly 确保不可变性
 * - 使用类型守卫
 * - 使用深度克隆避免副作用
 */

/**
 * 规范化 Schema 节点
 *
 * @param node Schema 节点
 * @returns 规范化后的 Schema 节点（新对象，不修改原对象）
 */
declare function normalizeSchemaNode<TState extends Record<string, unknown>>(node: SchemaNode<TState>): SchemaNode<TState>;
/**
 * 规范化整个 Schema
 *
 * @param schema Schema 根节点
 * @returns 规范化后的 Schema（新对象，不修改原对象）
 */
declare function normalizeSchema<TState extends Record<string, unknown>>(schema: SchemaNode<TState>): SchemaNode<TState>;
/**
 * 清除规范化缓存
 * 用于测试或内存管理
 */
declare function clearNormalizationCache(): void;

/**
 * 将 EventHandler 五种公开形式规范化为 Action[]。
 */

declare function isCallShorthand(handler: unknown): handler is EventHandlerArray;
declare function normalizeEventHandler(handler: EventHandler): Action[];

/**
 * 内建 Action payload 校验表。未知 type / 缺参 / 错类型拒绝。
 */

type ActionValidationIssue = {
    code: string;
    message: string;
};
declare function validateActionPayload(action: Action): ActionValidationIssue | null;

/**
 * defineSchema → 纯 Schema 转换器
 *
 * 功能：
 * - 将 defineSchema API 转换为纯 Schema JSON
 * - 类型推导和类型安全
 * - 编译时转换（运行时只接受纯 Schema）
 *
 * 遵循 TypeScript 最佳实践：
 * - 使用泛型支持类型推导
 * - 使用类型守卫
 * - 使用 readonly 确保不可变性
 */

/**
 * defineSchema API
 *
 * 将 TypeScript 配置转换为纯 Schema
 *
 * @template TState 状态类型
 * @template TServices 服务类型
 * @param config defineSchema 配置
 * @returns VarioView（包含编译后的 Schema）
 *
 * @example
 * ```typescript
 * const view = defineSchema({
 *   state: { count: 0 },
 *   schema({ state, $emit }) {
 *     return {
 *       type: 'div',
 *       children: [
 *         { type: 'Button', props: { label: 'Click' } }
 *       ]
 *     }
 *   }
 * })
 * ```
 */
/**
 * defineSchema 配置验证错误
 */
declare class DefineSchemaConfigError extends Error {
    readonly field?: string | undefined;
    constructor(message: string, field?: string | undefined);
}
declare function defineSchema<TState extends Record<string, unknown> = Record<string, unknown>, TServices extends Record<string, (...args: unknown[]) => unknown> = Record<string, (...args: unknown[]) => unknown>>(config: DefineSchemaConfig<TState, TServices>): VarioView<TState>;
/**
 * 从 VarioView 提取纯 Schema
 *
 * 用于运行时使用（Vue 渲染器等）
 *
 * @param view VarioView
 * @returns 纯 Schema（可序列化为 JSON）
 */
declare function extractSchema<TState extends Record<string, unknown>>(view: VarioView<TState>): Schema<TState>;
/**
 * 类型守卫：检查是否为有效的 Schema 节点
 */
declare function isSchemaNode(value: unknown): value is SchemaNode;

declare function wrapLegacy(input: unknown, options?: {
    diagnosticSink?: DiagnosticSink;
}): SchemaDocument;
declare function migrateToV1(input: unknown): SchemaDocument;
declare function rollbackToV0(doc: SchemaDocument): SchemaDocument;
declare function migrateIdempotent(doc: SchemaDocument): SchemaDocument;
declare function describeDocument(doc: SchemaDocument): VarioDiagnostic;

type ManifestIssue = {
    field: string;
    message: string;
};
declare function validateMaterialManifest(value: unknown): {
    valid: boolean;
    errors: ManifestIssue[];
};

type CanvasPatchRecord = {
    readonly id: string;
    readonly path: string;
    readonly before: Partial<SchemaNode>;
    readonly after: Partial<SchemaNode>;
    readonly affectedIds: readonly string[];
    readonly revision: number;
};
type CanvasReorderRecord = {
    readonly parentPath: string;
    readonly from: number;
    readonly to: number;
    readonly movedId: string;
};

declare class CanvasWorkspace {
    root: SchemaNode;
    view: PreparedView;
    revision: number;
    readonly: boolean;
    lastRecompiledIds: string[];
    private readonly undoStack;
    private readonly redoStack;
    private readonly sink?;
    constructor(root: SchemaNode, options?: {
        readonly?: boolean;
        diagnosticSink?: DiagnosticSink;
    });
    findById(id: string): {
        patch: (partial: Partial<SchemaNode>) => PreparedView;
        node: SchemaNode;
        path: string;
    } | null;
    patch(id: string, partial: Partial<SchemaNode>): PreparedView;
    applyRemote(record: CanvasPatchRecord): PreparedView;
    undo(): PreparedView;
    redo(): PreparedView;
    reorder(parentId: string, from: number, to: number): CanvasReorderRecord;
    node(id: string): PreparedNode | undefined;
}

export { type ActionValidationIssue, type CanvasPatchRecord, type CanvasReorderRecord, CanvasWorkspace, DefineSchemaConfigError, SchemaValidationError, type ValidationOptions, clearNormalizationCache, defineSchema, describeDocument, extractSchema, isCallShorthand, isSchemaNode, migrateIdempotent, migrateToV1, normalizeEventHandler, normalizeSchema, normalizeSchemaNode, rollbackToV0, validateActionPayload, validateMaterialManifest, validateSchema, validateSchemaNode, validateSchemaWithResult, wrapLegacy };
