import * as ESTree from '@babel/types';
import { RuntimeContext, ExpressionOptions, ExpressionPlan } from '@variojs/types';
import { D as DiagnosticSink } from './diagnostic-sink-DeR_n259.js';

/**
 * 表达式解析器
 *
 * 使用 @babel/parser 解析 JavaScript 表达式为 AST
 * 移除 models. 前缀支持
 */

/**
 * 解析表达式为 AST
 *
 * @param expr 表达式字符串（如 "user.name + 1"）
 * @returns ESTree.Node AST 节点
 */
declare function parseExpression(expr: string): ESTree.Node;

/**
 * AST 白名单验证器
 *
 * 功能：
 * - 深度遍历 AST，检查每个节点
 * - 只允许安全的语法节点
 * - 禁止危险的语法（赋值、函数、this 等）
 * - 检查函数调用中的函数名是否在白名单中
 */

/**
 * 验证 AST 是否通过白名单检查
 *
 * @param ast AST 节点
 * @param options 验证选项
 * @param options.allowGlobals 是否允许全局函数调用（跳过白名单检查）
 * @param options.maxNestingDepth 最大嵌套深度（默认 50）
 * @throws ExpressionError 如果发现禁止的节点
 */
declare function validateAST(ast: ESTree.Node, options?: {
    allowGlobals?: boolean;
    maxNestingDepth?: number;
}): void;

/**
 * 表达式求值器
 *
 * 功能：
 * - 安全求值 AST
 * - 支持白名单函数调用
 * - 执行步数/时间限制
 */

/**
 * 安全求值 AST
 *
 * @param ast AST 节点
 * @param ctx 运行时上下文
 * @param options 求值选项
 * @returns 求值结果（类型无法静态推导）
 *
 * 注意：表达式求值结果类型无法在编译时确定，返回 unknown
 */
declare function evaluateExpression(ast: ESTree.Node, ctx: RuntimeContext, options?: ExpressionOptions): unknown;

/**
 * 表达式求值入口函数
 *
 * 整合解析、验证、缓存、求值流程
 */

declare function evaluate(expr: string, ctx: RuntimeContext, options?: ExpressionOptions): unknown;

/**
 * 依赖提取算法
 *
 * 功能：
 * - 从 AST 中提取状态依赖
 * - 支持通配符依赖（items.*）
 * - 保守策略：标记整个对象
 */

/**
 * 从 AST 中提取依赖的状态路径
 *
 * @param ast AST 节点
 * @returns 依赖路径数组（支持通配符）
 */
declare function extractDependencies(ast: ESTree.Node): string[];

/**
 * 表达式缓存系统
 *
 * - 每个 RuntimeContext 独立缓存（WeakMap）
 * - Map 插入顺序 LRU，O(1) 淘汰，满容量不全表清空
 * - cache key 含 policyFingerprint
 * - hit/miss sentinel：null/undefined/false/0 可命中
 */

type CacheLookup = {
    hit: true;
    value: unknown;
} | {
    hit: false;
};
declare function lookupCachedExpression(expr: string, ctx: RuntimeContext, fingerprint?: string): CacheLookup;
declare function getCachedExpression(expr: string, ctx: RuntimeContext): unknown | null;
declare function setCachedExpression(expr: string, result: unknown, dependencies: string[], ctx: RuntimeContext, fingerprint?: string): void;
declare function invalidateCache(changedPath: string, ctx: RuntimeContext): void;
declare function clearCache(ctx: RuntimeContext): void;
declare function getCacheStats(ctx: RuntimeContext): {
    size: number;
    expressions: string[];
    hits: number;
    misses: number;
    evicts: number;
};

/**
 * 表达式安全策略：validator 与 evaluator 共用精确方法表。
 */

type CapabilitySpec = {
    readonly name: string;
    readonly pure: boolean;
    readonly cost: number;
    readonly inputLimit: number;
    readonly allowInExpression: boolean;
    readonly impl: (...args: unknown[]) => unknown;
};
declare function registerCapability(spec: CapabilitySpec, options?: {
    engineId?: string;
}): void;
declare function getCapability(name: string, engineId?: string): CapabilitySpec | undefined;
declare function listCapabilities(): readonly CapabilitySpec[];
declare function getPolicyFingerprint(options?: ExpressionOptions): string;

/**
 * 表达式工具函数
 *
 * 提供表达式解析、格式化的通用工具
 * 支持 {{ }} 格式的表达式提取和规范化
 */
/**
 * 提取表达式字符串
 * 支持 {{ expression }} 格式，自动去掉包装
 *
 * @param expr 表达式字符串，可能是 "{{ showContent }}" 或 "showContent"
 * @returns 去掉 {{ }} 包装后的表达式字符串
 *
 * @example
 * ```typescript
 * extractExpression("{{ showContent }}") // => "showContent"
 * extractExpression("showContent") // => "showContent"
 * extractExpression("{{ userRole === 'admin' }}") // => "userRole === 'admin'"
 * ```
 */
declare function extractExpression(expr: string): string;
/**
 * 规范化表达式字符串
 * 确保表达式格式统一，便于后续处理
 *
 * @param expr 表达式字符串
 * @returns 规范化后的表达式字符串（去掉 {{ }} 包装）
 */
declare function normalizeExpression(expr: string): string;
/**
 * 检查是否为表达式格式
 *
 * @param value 要检查的值
 * @returns 如果是 {{ }} 格式返回 true
 */
declare function isExpressionFormat(value: any): boolean;
/**
 * 批量提取表达式
 * 从对象或数组中提取所有表达式字符串
 *
 * @param value 要处理的值（对象、数组或字符串）
 * @param extractor 提取函数，默认使用 extractExpression
 * @returns 处理后的值
 */
declare function extractExpressionsRecursively(value: any, extractor?: (expr: string) => string): any;

interface CompileExpressionPlanOptions {
    /** 祖先 loop 的词法别名（itemKey/indexKey），进入 localDeps 且参与 plan id */
    aliases?: readonly string[];
}
declare function compileExpressionPlan(source: string, options?: CompileExpressionPlanOptions): ExpressionPlan;
declare function compileExpressionPlanUncached(source: string, options?: CompileExpressionPlanOptions): ExpressionPlan;

/**
 * Shared immutable ExpressionPlan LRU. Plans are frozen and keyed by
 * policy fingerprint + source. Not used for evaluated results.
 */

type PlanCacheStats = {
    size: number;
    hits: number;
    misses: number;
    evicts: number;
};
declare class PlanCache {
    readonly maxSize: number;
    private readonly map;
    private hits;
    private misses;
    private evicts;
    constructor(maxSize?: number);
    key(source: string, fingerprint?: string): string;
    get(source: string, fingerprint?: string): ExpressionPlan | undefined;
    set(plan: ExpressionPlan): ExpressionPlan;
    getOrCompile(source: string, fingerprint?: string): ExpressionPlan;
    stats(): PlanCacheStats;
    clear(): void;
}
declare const sharedPlanCache: PlanCache;
declare function getCachedExpressionPlan(source: string): ExpressionPlan;
declare function getPlanCacheStats(): PlanCacheStats;

/**
 * Session-scoped expression result memo. Never shared across sessions.
 * Validity is keyed by plan id, policy, scope generation and dependency versions.
 */

type MemoLookup = {
    hit: true;
    value: unknown;
} | {
    hit: false;
};
type ResultMemoStats = {
    size: number;
    hits: number;
    misses: number;
    evicts: number;
};
declare class ResultMemo {
    readonly maxSize: number;
    private readonly map;
    private readonly versions;
    /** 已见依赖索引：bump 时按双向前缀匹配传播失效（FR-2） */
    private readonly knownDeps;
    private generation;
    private hits;
    private misses;
    private evicts;
    private readonly sessionId;
    private readonly policyFingerprint;
    private readonly sink?;
    constructor(options: {
        sessionId: string;
        maxSize?: number;
        policyFingerprint?: string;
        sink?: DiagnosticSink;
    });
    bump(path: string): void;
    bumpAll(paths: readonly string[]): void;
    nextGeneration(): number;
    currentGeneration(): number;
    private versionToken;
    private composeKey;
    lookup(planId: string, deps: readonly string[], scopeGeneration?: number): MemoLookup;
    store(planId: string, deps: readonly string[], value: unknown, scopeGeneration?: number): void;
    notify(name: string, planId: string): void;
    stats(): ResultMemoStats;
    clear(): void;
}

/**
 * Immutable lexical ScopeFrame. Does not Object.create a parent RuntimeContext.
 */
interface ScopeFrame {
    readonly id: string;
    readonly parentId: string | null;
    readonly bindings: Readonly<Record<string, unknown>>;
    readonly generation: number;
}
type ScopeTable = Map<string, ScopeFrame>;
declare function createScopeFrame(parent: ScopeFrame | null, bindings: Record<string, unknown>): ScopeFrame;
declare function lookupBinding(table: ScopeTable, frame: ScopeFrame | null, name: string): {
    found: true;
    value: unknown;
} | {
    found: false;
};
declare function releaseScopeFrame(table: ScopeTable, frame: ScopeFrame): void;

declare function evaluateExpressionPlan(plan: ExpressionPlan, ctx: RuntimeContext, options?: {
    memo?: ResultMemo;
    frame?: ScopeFrame | null;
    table?: ScopeTable;
}): unknown;

export { lookupBinding as A, releaseScopeFrame as B, type ScopeTable as C, ResultMemo as R, type ScopeFrame as S, evaluate as a, extractDependencies as b, clearCache as c, getCacheStats as d, evaluateExpression as e, getPolicyFingerprint as f, getCachedExpression as g, getCapability as h, invalidateCache as i, listCapabilities as j, extractExpression as k, lookupCachedExpression as l, isExpressionFormat as m, normalizeExpression as n, extractExpressionsRecursively as o, parseExpression as p, compileExpressionPlan as q, registerCapability as r, setCachedExpression as s, compileExpressionPlanUncached as t, getCachedExpressionPlan as u, validateAST as v, sharedPlanCache as w, getPlanCacheStats as x, evaluateExpressionPlan as y, createScopeFrame as z };
