import { Action, RuntimeContext } from '@variojs/types';
import { D as DiagnosticSink } from './diagnostic-sink-DeR_n259.js';

/**
 * Action VM 执行器
 *
 * execute() 只创建一次 ExecutionSession；嵌套 if/loop/batch 共享
 * absolute deadline、remainingSteps、signal、executionId。
 */

interface ExecuteOptions {
    timeout?: number;
    maxSteps?: number;
    signal?: AbortSignal;
    diagnosticSink?: DiagnosticSink;
}
declare function execute(actions: Action[], ctx: RuntimeContext, options?: ExecuteOptions): Promise<void>;
declare function runChild(actions: Action[], ctx: RuntimeContext): Promise<void>;

/**
 * 内置动作处理器
 *
 * 内建 action 走独立 registry，不再写入公共 ctx.$methods。
 */

/**
 * 兼容 shim：内建 handler 不再复制到公共 $methods。
 */
declare function registerBuiltinMethods(_ctx: RuntimeContext): void;

/**
 * Vario 错误处理体系
 *
 * 统一的错误基类和错误码系统
 */

/**
 * 错误上下文信息
 */
interface ErrorContext {
    /** Schema 路径（如 "events.click[0]"） */
    schemaPath?: string;
    /** 表达式字符串 */
    expression?: string;
    /** 动作对象 */
    action?: Action;
    /** 调用栈（简化版） */
    stack?: string[];
    engineId?: string;
    pageId?: string;
    schemaId?: string;
    revision?: number;
    nodeId?: string;
    actionId?: string;
    expressionId?: string;
    phase?: string;
    /** 额外上下文信息 */
    metadata?: Record<string, unknown>;
}
/**
 * Vario 错误基类
 *
 * 所有 Vario 相关错误都应继承此类
 */
declare class VarioError extends Error {
    /** 错误码 */
    readonly code: string;
    /** 错误上下文 */
    readonly context: ErrorContext;
    constructor(message: string, code: string, context?: ErrorContext);
    /**
     * 获取友好的错误消息
     */
    getFriendlyMessage(): string;
    /**
     * 转换为 JSON（用于序列化）
     */
    toJSON(): Record<string, unknown>;
}
/**
 * 动作执行错误
 */
declare class ActionError extends VarioError {
    constructor(action: Action, message: string, code?: string, context?: Omit<ErrorContext, 'action'>);
}
/**
 * 表达式求值错误
 */
declare class ExpressionError extends VarioError {
    constructor(expression: string, message: string, code?: string, context?: Omit<ErrorContext, 'expression'>);
}
/**
 * 服务调用错误
 */
declare class ServiceError extends VarioError {
    readonly service: string;
    readonly originalError?: Error;
    constructor(service: string, message: string, originalError?: Error, context?: ErrorContext);
}
/**
 * 批量执行错误
 */
declare class BatchError extends VarioError {
    readonly failedActions: Array<{
        action: Action;
        error: Error;
    }>;
    constructor(failedActions: Array<{
        action: Action;
        error: Error;
    }>, message: string, context?: ErrorContext);
}
/**
 * 路径写入失败：不触发成功 change callback。
 */
declare class PathWriteError extends VarioError {
    readonly path: string;
    constructor(path: string, message: string, code?: string, context?: ErrorContext);
}
declare class SchemaDepthError extends VarioError {
    constructor(message: string, context?: ErrorContext);
}
/**
 * 错误码定义
 */
declare const ErrorCodes: {
    readonly ACTION_UNKNOWN_TYPE: "ACTION_UNKNOWN_TYPE";
    readonly ACTION_EXECUTION_ERROR: "ACTION_EXECUTION_ERROR";
    readonly ACTION_ABORTED: "ACTION_ABORTED";
    readonly ACTION_TIMEOUT: "ACTION_TIMEOUT";
    readonly ACTION_MAX_STEPS_EXCEEDED: "ACTION_MAX_STEPS_EXCEEDED";
    readonly ACTION_MISSING_PARAM: "ACTION_MISSING_PARAM";
    readonly ACTION_INVALID_PARAM: "ACTION_INVALID_PARAM";
    readonly EXPRESSION_PARSE_ERROR: "EXPRESSION_PARSE_ERROR";
    readonly EXPRESSION_VALIDATION_ERROR: "EXPRESSION_VALIDATION_ERROR";
    readonly EXPRESSION_EVALUATION_ERROR: "EXPRESSION_EVALUATION_ERROR";
    readonly EXPRESSION_TIMEOUT: "EXPRESSION_TIMEOUT";
    readonly EXPRESSION_MAX_STEPS_EXCEEDED: "EXPRESSION_MAX_STEPS_EXCEEDED";
    readonly EXPRESSION_UNSAFE_ACCESS: "EXPRESSION_UNSAFE_ACCESS";
    readonly EXPRESSION_FUNCTION_NOT_WHITELISTED: "EXPRESSION_FUNCTION_NOT_WHITELISTED";
    readonly SERVICE_NOT_FOUND: "SERVICE_NOT_FOUND";
    readonly SERVICE_CALL_ERROR: "SERVICE_CALL_ERROR";
    readonly BATCH_ERROR: "BATCH_ERROR";
    readonly SCHEMA_VALIDATION_ERROR: "SCHEMA_VALIDATION_ERROR";
    readonly SCHEMA_INVALID_ACTION: "SCHEMA_INVALID_ACTION";
    readonly SCHEMA_DEPTH_EXCEEDED: "SCHEMA_DEPTH_EXCEEDED";
    readonly SCHEMA_CIRCULAR_REFERENCE: "SCHEMA_CIRCULAR_REFERENCE";
    readonly PATH_WRITE_ERROR: "PATH_WRITE_ERROR";
    readonly PATH_FORBIDDEN_SEGMENT: "PATH_FORBIDDEN_SEGMENT";
    readonly PATH_BUDGET_EXCEEDED: "PATH_BUDGET_EXCEEDED";
    readonly PATH_UNRESOLVED_INDEX: "PATH_UNRESOLVED_INDEX";
    readonly SESSION_CANCELLED: "SESSION_CANCELLED";
    readonly SESSION_DISPOSED: "SESSION_DISPOSED";
    readonly SESSION_DISPOSED_WRITE: "SESSION_DISPOSED_WRITE";
    readonly SESSION_PAUSED: "SESSION_PAUSED";
    readonly SCHEMA_READONLY: "SCHEMA_READONLY";
    readonly UNSUPPORTED_EVENT_MODIFIER: "UNSUPPORTED_EVENT_MODIFIER";
    readonly CAPABILITY_NOT_REGISTERED: "CAPABILITY_NOT_REGISTERED";
    readonly TELEPORT_INVALID_TARGET: "TELEPORT_INVALID_TARGET";
    readonly TELEPORT_MISSING_HOST: "TELEPORT_MISSING_HOST";
    readonly LOOP_DUPLICATE_KEY: "LOOP_DUPLICATE_KEY";
    readonly LOOP_INVALID_KEY: "LOOP_INVALID_KEY";
    readonly LOOP_INDEX_FALLBACK: "LOOP_INDEX_FALLBACK";
    readonly LOOP_BUDGET_EXCEEDED: "LOOP_BUDGET_EXCEEDED";
    readonly SCOPE_STALE_GENERATION: "SCOPE_STALE_GENERATION";
};
type ErrorCode = typeof ErrorCodes[keyof typeof ErrorCodes];

export { ActionError as A, BatchError as B, type ExecuteOptions as E, PathWriteError as P, ServiceError as S, VarioError as V, registerBuiltinMethods as a, ExpressionError as b, SchemaDepthError as c, ErrorCodes as d, execute as e, type ErrorCode as f, runChild as r };
