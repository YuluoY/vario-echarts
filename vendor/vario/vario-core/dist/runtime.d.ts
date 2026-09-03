import { CreateContextOptions, RuntimeContext, ReactiveAdapter, SchemaNode } from '@variojs/types';
export { RuntimeContext } from '@variojs/types';
import { D as DiagnosticSink } from './diagnostic-sink-DeR_n259.js';

/**
 * RuntimeContext 创建工厂
 *
 * 实现要点：扁平化状态存储、系统 API 保护、命名冲突检测、Proxy 保护。
 * 复杂类型见 ../types.ts（CreateContextOptions、OnStateChangeCallback 等）。
 */

/**
 * 创建运行时上下文（传入具体 initialState 时，TState 从实参自动推导）
 */
declare function createRuntimeContext<TState extends Record<string, unknown>>(initialState: TState, options?: CreateContextOptions<TState>): RuntimeContext<TState>;
/**
 * 创建运行时上下文（显式指定 TState 时可传空或部分初始状态，如 createRuntimeContext<MyState>({}, options)）
 */
declare function createRuntimeContext<TState extends Record<string, unknown>>(initialState: Partial<TState> & Record<string, unknown>, options?: CreateContextOptions<TState>): RuntimeContext<TState>;
/**
 * 创建运行时上下文（不传或传空且未指定 TState 时，退回 Record<string, unknown>）
 */
declare function createRuntimeContext(initialState?: Record<string, unknown>, options?: CreateContextOptions<Record<string, unknown>>): RuntimeContext<Record<string, unknown>>;

/**
 * Proxy 沙箱实现
 *
 * 功能：
 * - 防止覆盖系统 API（$ 和 _ 前缀保护）
 * - 拦截属性设置操作
 * - 当 ReactiveAdapter 存在时，将状态属性的 get/set/has/ownKeys 路由到 adapter
 */

/**
 * 创建受保护的 Proxy 上下文
 * 禁止设置以 $ 或 _ 开头的属性
 *
 * @template T 上下文类型，必须是 RuntimeContext 的子类型
 * @param ctx 运行时上下文对象
 * @param adapter 可选的响应式适配器，提供后状态读写路由到 adapter
 * @returns 受保护的 Proxy 包装的上下文
 */
declare function createProxy<T extends RuntimeContext>(ctx: T, adapter?: ReactiveAdapter): T;

/**
 * 沙箱边界控制
 *
 * 功能：
 * - 表达式层：严格沙箱，无法访问全局对象
 * - 方法层：白名单控制，可访问全局对象
 */

/**
 * 创建表达式沙箱上下文
 * 移除全局对象访问能力
 */
declare function createExpressionSandbox(ctx: RuntimeContext): RuntimeContext;
/**
 * 检查属性访问是否安全（用于表达式求值）
 */
declare function isSafePropertyAccess(prop: string, ctx: RuntimeContext, options?: {
    allowGlobals?: boolean;
}): boolean;

/**
 * 转发上下文原语：loop / scope 共用的"不挂父 ctx 原型"的 Proxy 转发结构。
 *
 * - 词法绑定放在 locals 上；state 通过 Proxy 转发到 parent。
 * - parents WeakMap 记录转发关系，供 session/execution 查找回落父 ctx。
 */

declare function createForwardingContext(parentCtx: RuntimeContext, locals: Record<string, unknown>): RuntimeContext;
/**
 * 查询转发 ctx 的父 ctx（loop/scope 均支持）；非转发 ctx 返回 undefined。
 */
declare function getParentContext(ctx: object | null | undefined): RuntimeContext | undefined;

/**
 * 循环上下文对象池
 *
 * 公开 shim：不 Object.create / setPrototypeOf 父 RuntimeContext。
 * 词法绑定放在 locals 上；state 通过 Proxy 转发到 parent。
 *
 * 词法写入（FR-9）：_set 首段为 $item / itemKey 时写回当前项，
 * 并按 itemsPath.<index>.<rest> 记录变更与失效缓存。
 */

interface LoopContextOptions {
    /** 循环数据源在父 ctx 上的路径（如 'items'），用于词法写入的变更记录 */
    itemsPath?: string;
    /** 当前项的别名（如 itemKey: 'user' 时 user 即当前项） */
    itemKey?: string;
    /** 索引的别名 */
    indexKey?: string;
}
declare class LoopContextPool {
    private pool;
    acquire(): Record<string, unknown>;
    release(ctx: Record<string, unknown>): void;
    clear(): void;
    get size(): number;
}
declare function getLoopContextPool(): LoopContextPool;
declare function setLoopDiagnosticSink(sink: DiagnosticSink): void;
/**
 * 创建循环上下文（对象池 + Proxy 转发，不挂父 ctx 原型）。
 *
 * 词法写入规则：
 * - 首段为 $item / itemKey：写剩余路径到绑定对象，按 itemsPath.<index>.<rest> 记录变更
 * - 首段为 $index / indexKey：不可写，抛 PathWriteError
 * - 其余路径：透传父 ctx 的 _set
 */
declare function createLoopContext(parentCtx: RuntimeContext, item: unknown, index: number, options?: LoopContextOptions): RuntimeContext;
/**
 * 释放循环上下文（删除登记；locals 上的词法绑定保留可读）
 */
declare function releaseLoopContext(loopCtx: Partial<RuntimeContext>): void;
/** 读取 loop ctx 上登记的 locals（诊断/测试用） */
declare function getLoopLocals(loopCtx: object): Record<string, unknown> | undefined;

declare function clearLoopContextPool(): void;

/**
 * 作用域插槽上下文：只多一层局部绑定，不注入 $item/$index。
 *
 * 与 HEAD 的 Object.create(ctx) 语义对齐（插槽参数优先于 state 同名键），
 * 但不挂父 ctx 原型，通过 Proxy 转发 + isScopeContext 标记判定。
 */

declare function createScopeContext(parentCtx: RuntimeContext, bindings: Record<string, unknown>): RuntimeContext;
declare function isScopeContext(ctx: unknown): boolean;

/**
 * 集中的路径安全政策：保留段、长度/深度/数组下标预算。
 */
type PathSegment = string | number;

/**
 * 路径解析工具模块
 *
 * 统一的路径解析逻辑，供 vario-core 和框架集成层使用
 */

/**
 * 解析路径字符串为段数组
 *
 * 支持两种语法：
 * - 点语法：`user.name` → ['user', 'name']
 * - 括号语法：`users[0].name` → ['users', 0, 'name']
 * - 混合语法：`data.users[0].profile.tags[1]` → ['data', 'users', 0, 'profile', 'tags', 1]
 * - 空括号：`users[].name` → ['users', -1, 'name']（-1 表示动态索引，由循环上下文填充）
 */
declare function parsePath(path: string): PathSegment[];
/**
 * 解析路径（带缓存）。返回冻结只读副本；满 2000 时 LRU 淘汰最旧项，不全表清空。
 */
declare function parsePathCached(path: string): readonly PathSegment[];
declare function clearPathCache(): void;
declare function stringifyPath(segments: readonly PathSegment[]): string;
declare function getPathValue(obj: Record<string, unknown>, path: string | readonly PathSegment[]): unknown;
declare function setPathValue(obj: Record<string, unknown>, path: string | readonly PathSegment[], value: unknown, options?: {
    createIntermediate?: boolean;
    createObject?: () => Record<string, unknown>;
    createArray?: () => unknown[];
}): boolean;
declare function matchPath(pattern: string, path: string): boolean;
declare function getParentPath(path: string): string;
declare function getLastSegment(path: string): PathSegment | undefined;

type TraversalCallback = (node: SchemaNode, path: string, depth: number, parent: SchemaNode | null) => boolean | void;
/**
 * 通用 Schema 遍历工具 (UI Component Tree 风格)
 * 采用深度优先遍历 (DFS)
 *
 * @param root 根节点
 * @param callback 回调函数
 * @param separator 路径分隔符，默认为 '.'
 */
declare function traverseSchema(root: SchemaNode, callback: TraversalCallback, separator?: string): void;

export { type LoopContextOptions, type PathSegment, type TraversalCallback, clearLoopContextPool, clearPathCache, createExpressionSandbox, createForwardingContext, createLoopContext, createProxy, createRuntimeContext, createScopeContext, getLastSegment, getLoopContextPool, getLoopLocals, getParentContext, getParentPath, getPathValue, isSafePropertyAccess, isScopeContext, matchPath, parsePath, parsePathCached, releaseLoopContext, setLoopDiagnosticSink, setPathValue, stringifyPath, traverseSchema };
