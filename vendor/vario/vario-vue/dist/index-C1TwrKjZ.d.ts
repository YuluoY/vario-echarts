import { ComputedRef, VNode, Directive, App, Ref } from 'vue';
import { RuntimeContext, ExpressionOptions, RuntimeBudget } from '@variojs/types';
import { SchemaNode, Schema } from '@variojs/schema';
import { DiagnosticSink, SchemaStats } from '@variojs/core';

type VirtualRange = {
    start: number;
    end: number;
    overscan: number;
};
type VirtualRangeInput = {
    itemCount: number;
    overscan?: number;
    estimateSize?: number;
};
type LoopChangeSet = {
    itemCount: number;
};
type VirtualListAdapter = {
    getVisibleRange(itemCount: number | VirtualRangeInput): VirtualRange;
    onItemsChanged?(change: LoopChangeSet): void;
    restoreAnchor?(key: string | number): void;
};
declare function createReferenceVirtualAdapter(options?: {
    viewport?: number;
    overscan?: number;
}): VirtualListAdapter;

interface NodeWrapper {
    /** 当前节点的路径 */
    path: string;
    /** 当前节点对象（响应式引用，如果源是响应式的） */
    node: SchemaNode;
    /** Patch 修改节点 */
    patch: (partial: Partial<SchemaNode>) => void;
    /** 访问特定属性 */
    get: (key: string) => any;
    /** 父节点包装器 */
    parent: () => NodeWrapper | null;
}
interface SchemaQueryApi {
    /** 查找第一个匹配的节点 */
    find: (predicate: (node: SchemaNode) => boolean) => NodeWrapper | null;
    /** 查找所有匹配的节点 */
    findAll: (predicate: (node: SchemaNode) => boolean) => NodeWrapper[];
    /** 通过 ID 查找节点 */
    findById: (id: string) => NodeWrapper | null;
}

/**
 * Vue 特有的类型定义
 *
 * 扩展 SchemaNode 以支持 Vue 的特性：
 * - ref: 模板引用（声明映射到 Vue ref）
 * - 生命周期钩子（声明映射到 Vue 钩子）
 * - provide/inject: 依赖注入（声明映射到 Vue API）
 * - teleport: 传送
 * - transition: 过渡动画
 * - keep-alive: 缓存
 *
 * 注意：computed 和 watch 不在 Schema 中定义，
 * 应该在 Vue 组件中使用原生 API 定义，然后通过 useVario 的 computed 选项传入
 */

/**
 * Vue 特有的 SchemaNode 扩展
 * 深度集成 Vue 3 的 Composition API 特性
 */
interface VueSchemaNode extends SchemaNode {
    /**
     * 模板引用名称（类似 Vue 的 ref）
     * 在 useVario 返回的 refs 对象中可以通过此名称访问组件实例
     *
     * @example
     * // Schema 中
     * { type: 'ElInput', ref: 'inputRef' }
     *
     * // 使用
     * const { refs } = useVario(schema, options)
     * refs.inputRef.value?.focus() // 访问组件实例
     */
    readonly ref?: string;
    /**
     * 组件挂载后调用（引用 methods 中的方法名）
     */
    readonly onMounted?: string;
    /**
     * 组件卸载前调用（引用 methods 中的方法名）
     */
    readonly onUnmounted?: string;
    /**
     * 组件更新后调用（引用 methods 中的方法名）
     */
    readonly onUpdated?: string;
    /**
     * 组件挂载前调用（引用 methods 中的方法名）
     */
    readonly onBeforeMount?: string;
    /**
     * 组件卸载前调用（引用 methods 中的方法名）
     */
    readonly onBeforeUnmount?: string;
    /**
     * 组件更新前调用（引用 methods 中的方法名）
     */
    readonly onBeforeUpdate?: string;
    /**
     * KeepAlive 激活时调用（引用 methods 中的方法名）
     */
    readonly onActivated?: string;
    /**
     * KeepAlive 停用时调用（引用 methods 中的方法名）
     */
    readonly onDeactivated?: string;
    /**
     * Provide 值（向下传递数据）
     *
     * 支持表达式：值为字符串时会尝试作为表达式求值
     *
     * @example
     * { type: 'div', provide: { theme: 'dark', locale: 'currentLocale' } }
     */
    readonly provide?: Record<string, any>;
    /**
     * Inject 依赖（从父组件获取数据）
     *
     * 支持三种形式：
     * - 数组: ['theme', 'locale']
     * - 简单映射: { myTheme: 'theme' }
     * - 完整配置: { myTheme: { from: 'theme', default: 'light' } }
     *
     * @example
     * { type: 'ElButton', inject: ['theme', 'locale'] }
     * { type: 'ElButton', inject: { myTheme: { from: 'theme', default: 'light' } } }
     */
    readonly inject?: string[] | Record<string, string | {
        from?: string;
        default?: any;
    }>;
    /**
     * Teleport 目标（将组件传送到指定 DOM 节点）
     *
     * @example
     * { type: 'div', teleport: 'body' }  // 传送到 body
     * { type: 'div', teleport: '#modal' }  // 传送到 #modal
     */
    readonly teleport?: string | boolean;
    /**
     * Transition 配置（过渡动画）
     *
     * @example
     * {
     *   type: 'div',
     *   transition: 'fade',  // 使用预设过渡
     *   // 或
     *   transition: {
     *     name: 'fade',
     *     appear: true,
     *     mode: 'out-in'
     *   }
     * }
     */
    readonly transition?: string | {
        name?: string;
        appear?: boolean;
        mode?: 'default' | 'in-out' | 'out-in';
        duration?: number | {
            enter?: number;
            leave?: number;
        };
    };
    /**
     * Keep-alive 配置（缓存组件状态）
     *
     * @example
     * { type: 'div', keepAlive: true }
     * { type: 'div', keepAlive: { include: 'ComponentA', exclude: 'ComponentB' } }
     */
    readonly keepAlive?: boolean | {
        include?: string | RegExp | Array<string | RegExp>;
        exclude?: string | RegExp | Array<string | RegExp>;
        max?: number;
    };
}
/**
 * useVario 方法上下文
 *
 * 说明：
 * - 该类型用于 `options.methods` 中每个方法的参数类型推导
 * - 同时兼容 `value`（推荐）与 `event`（向后兼容）两种事件值读取方式
 */
interface MethodContext<TState extends Record<string, unknown> = Record<string, unknown>, TEvent = unknown> {
    /** 响应式状态对象 */
    state: TState;
    /** Schema 中定义的 params 参数 */
    params: any;
    /**
     * 事件值（Vue 组件 emit 的参数或原生 DOM 事件）
     * 推荐优先使用该字段
     */
    value: TEvent;
    /** @deprecated 请使用 value 代替，此属性仅用于向后兼容 */
    event?: TEvent;
    /** 完整运行时上下文（包含 state、$methods、_get/_set 等） */
    ctx: RuntimeContext<TState>;
}
/**
 * useVario 配置项
 */
interface UseVarioOptions<TState extends Record<string, unknown> = Record<string, unknown>> {
    /** 初始状态（会自动包裹为响应式对象） */
    state?: TState;
    /** 计算属性（Options 风格函数）或 Composition 风格（ComputedRef） */
    computed?: Record<string, ((state: TState) => any) | ComputedRef<any>>;
    /** 方法（统一注册到 $methods） */
    methods?: Record<string, (ctx: MethodContext<TState, any>) => any>;
    /** 双向绑定配置（非标准组件） */
    modelBindings?: Record<string, any>;
    /** 事件处理 */
    onEmit?: (event: string, data?: unknown) => void;
    /**
     * 状态变更回调：每次 `_set` / model 写回成功后触发。
     * （`skipCallback` 的内部写入——如 computed 同步——不触发）
     */
    onStateChange?: (path: string, value: unknown, ctx: RuntimeContext<TState>) => void;
    /** 错误处理 */
    onError?: (error: Error) => void;
    /** 错误边界配置 */
    errorBoundary?: {
        /** 是否启用错误边界（默认 true） */
        enabled?: boolean;
        /** 自定义错误显示节点 */
        fallback?: (error: Error) => VNode;
        /** 错误恢复回调 */
        onRecover?: (error: Error) => void;
    };
    /** 自定义指令映射（支持用户注册指令） */
    directives?: Record<string, Directive>;
    /** Vue 应用实例（用于非组件上下文，优先级高于 getCurrentInstance） */
    app?: App | null;
    /** 全局组件映射（用于非组件上下文，优先级最高） */
    components?: Record<string, any>;
    /** 表达式求值配置 */
    exprOptions?: ExpressionOptions;
    /** Model 绑定配置（供外部/扩展使用）
     * - separator: 路径分隔符，默认 '.'
     * - lazy: 整棵 schema 的 model 默认惰性，true 时不预写 state
     */
    modelOptions?: {
        separator?: string;
        lazy?: boolean;
    };
    /**
     * 命名空间数据 getter（如 $variables/$datasources/$functions/$utils）。
     * 返回的快照会注入到 RuntimeContext，供 cond/show/loop/props `{{ }}` 求值。
     * 这是正式 API：结构不变时只应走本通道热更新，不要因此换根 schema 引用。
     * 每次调用应返回最新快照。
     */
    namespaces?: () => Record<string, unknown>;
    /**
     * 命名空间变化订阅。当命名空间数据变化时调用 handler，触发 ctx 更新 + 按 path 失效缓存 + 重渲染。
     * handler 可接收 `{ namespace, path }`；path 存在时只失效依赖该路径的表达式缓存。
     * 返回取消订阅函数，如无订阅源则返回 undefined。
     */
    onNamespacesChange?: (handler: (info?: {
        namespace?: string;
        path?: string;
    }) => void) => (() => void) | undefined;
    onSchemaPatch?: (info: {
        path: string;
        patch: Partial<SchemaNode>;
        root: SchemaNode;
    }) => void;
    runtimeMode?: 'legacy' | 'shadow' | 'prepared';
    engineId?: string;
    runtimeBudget?: Partial<RuntimeBudget>;
    diagnosticSink?: DiagnosticSink;
    virtualAdapter?: VirtualListAdapter | null;
}
/**
 * useVario 返回值
 */
interface UseVarioResult<TState extends Record<string, unknown>> extends SchemaQueryApi {
    /** 当前渲染结果 */
    vnode: Ref<VNode | null>;
    /** 响应式 state */
    state: TState;
    /** RuntimeContext 引用 */
    ctx: Ref<RuntimeContext<TState>>;
    /** 模板引用（ref）集合 */
    refs: Record<string, Ref<any>>;
    /** 当前错误（如果有） */
    error: Ref<Error | null>;
    /** Schema 统计信息 */
    stats: Ref<SchemaStats>;
    /** 手动触发重新渲染（用于错误恢复） */
    retry: () => void;
    /** 释放 PageSession；幂等，unmount 时也会调用 */
    dispose: () => void;
    pause: () => void;
    resume: () => void;
}
/**
 * useVario 的函数重载签名
 */
type UseVarioOverload = {
    <TState extends Record<string, unknown>>(schema: Schema<TState> | (() => Schema<TState>) | ComputedRef<Schema<TState>>, options: UseVarioOptions<TState> & {
        state: TState;
    }): UseVarioResult<TState>;
    <TState extends Record<string, unknown> = Record<string, unknown>>(schema: Schema<TState> | (() => Schema<TState>) | ComputedRef<Schema<TState>>, options?: UseVarioOptions<TState>): UseVarioResult<TState>;
};

/**
 * VNode 插件接口
 *
 * 将 Vue 特有特性（lifecycle/provide-inject/transition/keepAlive/teleport）
 * 从渲染器硬编码逻辑抽离为可组合的插件，实现：
 * - 按需加载：未使用的 Vue 特性不参与渲染管线
 * - 可 tree-shake：打包时可剔除未引用的插件
 * - 清晰边界：schema 核心管线 (cond/show/loop/model/events) 与 Vue 特性解耦
 */

interface VNodePlugin {
    /** 插件名称（调试用） */
    name: string;
    /**
     * 组件包装阶段：拦截 h(component, attrs, children) 调用
     *
     * 用于需要替换组件创建方式的场景（如 lifecycle/provide-inject
     * 需要用 defineComponent 包装）。
     *
     * @returns VNode — 使用插件生成的 VNode
     * @returns null  — 该插件不处理，继续默认 h()
     */
    wrapComponent?: (component: any, attrs: Record<string, any>, children: any, schema: VueSchemaNode, ctx: RuntimeContext) => VNode | null;
    /**
     * VNode 装饰阶段：在 VNode 创建后依次包装
     *
     * 用于外层包裹场景（transition/keepAlive/teleport）。
     * 多个 decorate 插件按注册顺序依次执行。
     *
     * @returns 装饰后的 VNode（可直接返回原 vnode 表示不处理）
     */
    decorateVNode?: (vnode: VNode, schema: VueSchemaNode, ctx: RuntimeContext) => VNode;
    setup?: (engine?: unknown) => void;
    validate?: (schema: VueSchemaNode) => void;
    prepare?: (schema: VueSchemaNode) => void;
    dispose?: () => void;
}

/**
 * 生命周期 + Provide/Inject 插件
 *
 * 当 schema 节点声明了 onMounted/onUnmounted 等生命周期钩子，
 * 或 provide/inject 依赖注入时，用 defineComponent 包装组件。
 */

declare const lifecyclePlugin: VNodePlugin;

/**
 * KeepAlive 插件
 *
 * 当 schema 节点声明了 keepAlive 时，用 KeepAlive 组件包裹 VNode。
 */

declare const keepAlivePlugin: VNodePlugin;

/**
 * Transition 插件
 *
 * 当 schema 节点声明了 transition 时，用 Transition 组件包裹 VNode。
 */

declare const transitionPlugin: VNodePlugin;

/**
 * Teleport 插件
 *
 * 当 schema 节点声明了 teleport 时，用 Teleport 组件包裹 VNode。
 */

declare const teleportPlugin: VNodePlugin;

/**
 * VNode 插件系统
 *
 * 提供默认插件集合和按需导入能力：
 * - defaultPlugins: 包含所有 Vue 特性插件（向后兼容）
 * - 各插件单独导出，支持 tree-shake
 */

/**
 * 默认插件集合（全量 Vue 特性支持）
 *
 * 渲染器未指定 plugins 时使用此集合，保持向后兼容。
 * 顺序：wrapComponent 插件在前，decorateVNode 插件按语义顺序排列
 * （keepAlive → transition → teleport，内层到外层）。
 */
declare const defaultPlugins: VNodePlugin[];

export { type MethodContext as M, type UseVarioOverload as U, type VueSchemaNode as V, type VNodePlugin as a, type UseVarioOptions as b, type UseVarioResult as c, type VirtualListAdapter as d, createReferenceVirtualAdapter as e, defaultPlugins as f, teleportPlugin as g, keepAlivePlugin as k, lifecyclePlugin as l, transitionPlugin as t };
