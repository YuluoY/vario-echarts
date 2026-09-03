export { TraversalCallback, clearPathCache, createExpressionSandbox, createForwardingContext, createLoopContext, createProxy, createRuntimeContext, createScopeContext, getLastSegment, getParentContext, getParentPath, getPathValue, isSafePropertyAccess, isScopeContext, matchPath, parsePath, parsePathCached, releaseLoopContext, setPathValue, stringifyPath, traverseSchema } from './runtime.js';
import * as _variojs_types from '@variojs/types';
import { ChangeSet, RuntimeContext, MaterialManifest, Action } from '@variojs/types';
export { Action, ActionHandler, ActionMap, CreateContextOptions, ErrorContext, ExpressionCache, ExpressionOptions, MethodHandler, MethodsRegistry, PathSegment, RuntimeContext } from '@variojs/types';
import { R as ResultMemo, S as ScopeFrame } from './plan-evaluator-9u6bUK0o.js';
export { C as ScopeTable, c as clearCache, q as compileExpressionPlan, t as compileExpressionPlanUncached, z as createScopeFrame, a as evaluate, e as evaluateExpression, y as evaluateExpressionPlan, b as extractDependencies, k as extractExpression, d as getCacheStats, g as getCachedExpression, u as getCachedExpressionPlan, h as getCapability, x as getPlanCacheStats, i as invalidateCache, j as listCapabilities, A as lookupBinding, l as lookupCachedExpression, p as parseExpression, r as registerCapability, B as releaseScopeFrame, s as setCachedExpression, v as validateAST } from './plan-evaluator-9u6bUK0o.js';
import { D as DiagnosticSink } from './diagnostic-sink-DeR_n259.js';
export { a as DiagnosticEvent, c as createDiagnosticSink, n as noopDiagnosticSink } from './diagnostic-sink-DeR_n259.js';
export { A as ActionError, B as BatchError, f as ErrorCode, d as ErrorCodes, E as ExecuteOptions, b as ExpressionError, P as PathWriteError, c as SchemaDepthError, S as ServiceError, V as VarioError, e as execute, a as registerBuiltinMethods, r as runChild } from './index-CoPOXi8f.js';
export { AnalysisResult, DEFAULT_MOUNT_MAX_DEPTH, DEFAULT_SCAN_MAX_DEPTH, NodeResult, QueryEngineOptions, SchemaIndex, SchemaScanResult, SchemaStats, analyzeSchema, createQueryEngine, findNode, findNodes, findPathById, scanSchemaIterative } from './schema-tools.js';
import '@babel/types';

type ChangeListener = (changeSet: ChangeSet) => void;
declare function subscribeChangeSet(owner: object, listener: ChangeListener): () => void;
declare function beginChangeTransaction(owner: object): void;
declare function endChangeTransaction(owner: object): void;
declare function recordChange(owner: object, path: string, value: unknown): void;
declare function flushChangeSet(owner: object): ChangeSet | null;

type EngineOwner = {
    readonly id: string;
    readonly sessions: Set<RuntimeSession>;
    readonly materials: Map<string, MaterialManifest>;
};
declare function getOrCreateEngine(id?: string): EngineOwner;
declare function registerEngineMaterial(engineId: string, manifest: MaterialManifest): void;
declare function getEngineMaterial(engineId: string, name: string): MaterialManifest | undefined;
declare class RuntimeSession {
    readonly id: string;
    readonly engineId: string;
    readonly memo: ResultMemo;
    readonly ctx: RuntimeContext;
    private readonly unsub;
    disposed: boolean;
    constructor(ctx: RuntimeContext, options?: {
        engineId?: string;
        onChange?: ChangeListener;
        diagnosticSink?: DiagnosticSink;
    });
    dispose(): void;
    /**
     * 从 engine 摘除但不标记 ctx disposed（T3.8 SSR detach：ctx 归调用方所有，
     * hydrate 会用同一 ctx 建新会话，dispose 的 disposed 标记会毒化复用路径）。
     */
    release(): void;
    private releaseFromEngine;
}

declare class StateStore {
    private readonly owner;
    revision: number;
    private readonly pathVersions;
    private disposed;
    private silent;
    private held;
    constructor(owner: object);
    subscribe(listener: ChangeListener): () => void;
    read(path: string): unknown;
    write(path: string, value: unknown): void;
    mutate(path: string, updater: (current: unknown) => unknown): void;
    version(path?: string): number;
    pathVersion(path: string): number;
    batch(fn: () => void): void;
    flush(): _variojs_types.ChangeSet | null;
    pause(): void;
    resume(): void;
    dispose(): void;
}

type ResidentPage = {
    status: string;
    pause(): void;
    resume(): void;
    dispose(): void;
    activate?(): void;
};
type PageSessionManagerOptions = {
    maxResidentPages?: number;
    maxHeapBytes?: number;
};
type ResidentRecord<T extends ResidentPage> = {
    session: T;
    lastUsed: number;
    heapBytes: number;
};
declare class PageSessionManager<T extends ResidentPage = ResidentPage> {
    readonly options: PageSessionManagerOptions;
    readonly pages: Map<string, ResidentRecord<T>>;
    constructor(options?: PageSessionManagerOptions);
    get maxResidentPages(): number;
    register(id: string, session: T, heapBytes?: number): void;
    touch(id: string): void;
    activate(id: string): void;
    pause(id: string): void;
    dispose(id: string): void;
    disposeAll(): void;
    private evict;
    private lruId;
}

/**
 * ExecutionSession：一次用户事件共享 deadline / remainingSteps / signal / executionId。
 *
 * 生命周期（FR-1）：
 * - execute() 的 finally 必须解绑 ctx → session 绑定（unbindExecutionSession）。
 * - 复用仅对"仍在运行且未 cancel"的 session 生效（active 标志）。
 * - loop 迭代的 loopCtx 显式绑定到父 session，迭代结束解绑。
 */

interface ExecutionMetadata {
    readonly signal: AbortSignal;
    readonly executionId: string;
    readonly deadline: number;
}
interface JournalEntry {
    readonly path: string;
    readonly oldValue: unknown;
}
interface MutationJournal {
    committed: boolean;
    rolledBack: boolean;
    readonly entries: readonly JournalEntry[];
    record(path: string, oldValue: unknown): void;
    commit(): void;
    rollback(): void;
}
declare class ExecutionSession {
    readonly id: string;
    readonly executionId: string;
    readonly deadline: number;
    remainingSteps: number;
    readonly signal: AbortSignal;
    readonly metadata: ExecutionMetadata;
    readonly scope: ScopeFrame;
    readonly diagnostics: DiagnosticSink;
    /** execute 退出后置 false；false 的会话不再被复用 */
    active: boolean;
    cancelled: boolean;
    cancelReason: 'timeout' | 'abort' | null;
    readonly sink?: DiagnosticSink;
    journal: MutationJournal | null;
    readonly callStack: Action[];
    private readonly controller;
    private timeoutId;
    constructor(options: {
        timeout: number;
        maxSteps: number;
        diagnosticSink?: DiagnosticSink;
    });
    consumeStep(action: Action): void;
    canWrite(): boolean;
    throwIfCancelled(action?: Action): void;
    cancel(reason?: 'timeout' | 'abort'): void;
    /**
     * journal 记录 batch 内每次 _set 的 (path, oldValue)，失败时逆序恢复。
     */
    beginJournal(): MutationJournal;
    dispose(): void;
    private clearTimer;
}
declare function createExecutionSession(options: {
    timeout: number;
    maxSteps: number;
    diagnosticSink?: DiagnosticSink;
}): ExecutionSession;
declare function bindExecutionSession(ctx: object, session: ExecutionSession): void;
/** 解除 ctx → session 绑定；execute/loop 迭代结束时调用 */
declare function unbindExecutionSession(ctx: object): void;
declare function getExecutionSession(ctx: object | null | undefined): ExecutionSession | undefined;

export { DiagnosticSink, ExecutionSession, PageSessionManager, ResultMemo, RuntimeSession, ScopeFrame, StateStore, beginChangeTransaction, bindExecutionSession, createExecutionSession, endChangeTransaction, flushChangeSet, getEngineMaterial, getExecutionSession, getOrCreateEngine, recordChange, registerEngineMaterial, subscribeChangeSet, unbindExecutionSession };
