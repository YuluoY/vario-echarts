import { RuntimeContext, PathSegment as PathSegment$1, ReactiveAdapter, VarioDiagnostic, PreparedView, RuntimeBudget, ChangeSet, PreparedNode } from '@variojs/types';
import { SchemaNode, MaterialManifest, PrepareViewOptions } from '@variojs/schema';
import * as vue from 'vue';
import { Ref, VNode, ComponentInternalInstance, App, Directive } from 'vue';
import { V as VueSchemaNode, a as VNodePlugin, M as MethodContext, U as UseVarioOverload, b as UseVarioOptions, c as UseVarioResult, d as VirtualListAdapter } from './index-C1TwrKjZ.js';
export { e as createReferenceVirtualAdapter, f as defaultPlugins, k as keepAlivePlugin, l as lifecyclePlugin, g as teleportPlugin, t as transitionPlugin } from './index-C1TwrKjZ.js';
import { RuntimeContext as RuntimeContext$1, PathSegment, DiagnosticSink, PageSessionManager, ResultMemo, RuntimeSession, ScopeTable, StateStore, ScopeFrame } from '@variojs/core';

/**
 * Bidirectional binding handlers for Vue integration
 *
 * 功能：
 * - v-model 双向绑定处理
 * - 智能检测组件类型（原生元素 vs Vue 组件）
 * - 自动适配不同的 model 协议（Vue 3 标准 vs 传统协议）
 * - 支持自定义配置（可选）
 *
 * 设计原则：
 * - 使用 vario-core 的路径工具，避免重复代码
 * - 优先自动检测，减少配置需求
 * - 支持 Vue 3 和传统协议
 */

/**
 * 组件 model 配置
 */
interface ModelConfig {
    /** 值属性名（如 modelValue, value） */
    prop: string;
    /** 更新事件名（如 update:modelValue, input, change） */
    event: string;
}
/**
 * 创建双向绑定配置
 *
 * @param componentType 组件类型名
 * @param modelPath 模型路径（如 "user.name"）
 * @param ctx 运行时上下文
 * @param component 组件对象（可选，用于自动检测）
 * @param getState 获取响应式状态的函数（用于 Vue 响应式追踪）
 * @param modelName 具名 model（可选，如 "checked", "value"）
 * @param schemaDefault 当状态未初始化时使用的默认值（来自 schema model.default）
 * @param schemaLazy true 时不预写 state，仅当用户修改该绑定值后才写入 state
 * @param modifiers v-model 修饰符（可选，如 { trim: true, lazy: true, number: true }）
 * @param pageConfigs 页面级 model 配置，优先于全局 registerModelConfig
 * @returns 包含 prop 和 event handler 的对象
 */
declare function createModelBinding(componentType: string, modelPath: string, ctx: RuntimeContext, component?: unknown, getState?: () => Record<string, unknown>, modelName?: string, schemaDefault?: unknown, schemaLazy?: boolean, modifiers?: Record<string, boolean>, pageConfigs?: Map<string, ModelConfig>): Record<string, unknown>;
/**
 * 注册自定义组件的 model 配置
 * @param componentType 组件类型名
 * @param config model 配置
 * @param modelName 具名 model（可选）
 */
declare function registerModelConfig(componentType: string, config: ModelConfig, modelName?: string): void;
/**
 * 清除自定义配置
 */
declare function clearModelConfigs(): void;
/**
 * LIFE-4：把 useVario modelBindings 编成页面级表，不写入全局 customConfigs。
 */
declare function createBindingConfigTable(bindings?: Record<string, ModelConfig>): Map<string, ModelConfig>;
/**
 * SSR-3 / VUE-8：在首帧 render 前把 model.default 写入 state，避免 render 中写持久 store。
 */
declare function applySchemaModelDefaults(schema: SchemaNode, ctx: RuntimeContext, options?: {
    lazy?: boolean;
}): void;

/**
 * Ref 支持
 *
 * 实现 Vue 的模板引用功能，允许在 Schema 中声明 ref，
 * 并通过 useVario 返回的 refs 对象访问组件实例
 */

/**
 * Refs 注册表
 * 存储所有通过 ref 属性声明的组件引用
 *
 * 使用 Proxy 实现动态访问：用户可以通过 refs.xxx 访问任何 ref，
 * 如果 ref 不存在会自动创建（懒加载）
 */
declare class RefsRegistry {
    private refs;
    private _proxy;
    /**
     * 注册一个 ref
     */
    register(name: string): Ref<any>;
    /**
     * 获取所有 refs（返回动态 Proxy，可以访问后续添加的 ref）
     */
    getAll(): Record<string, Ref<any>>;
    /**
     * 获取指定的 ref
     */
    get(name: string): Ref<any> | undefined;
    get size(): number;
    /**
     * 清除所有 refs（组件卸载时调用）
     */
    clear(): void;
    /**
     * 移除指定的 ref
     */
    remove(name: string): boolean;
}
/**
 * 为 VNode 添加 ref 处理
 */
declare function attachRef(vnode: VNode, schema: VueSchemaNode, refsRegistry: RefsRegistry, owner?: ComponentInternalInstance | null, options?: {
    inLoop?: boolean;
}): VNode;

/**
 * 节点上下文：methods 中通过 ctx.$self / $parent / $siblings / $children 访问节点关系
 *
 * 使用 Proxy + WeakMap 实现 ctx.$parent.$parent 链式访问，不污染用户 schema。
 */

/** 节点在树中的上下文（父、兄弟、自身索引等） */
interface NodeContext {
    /** 父节点 schema */
    parent?: SchemaNode;
    /** 同层兄弟节点数组（含自身，与 parent.children 顺序一致） */
    siblings?: SchemaNode[];
    /** 当前节点在 siblings 中的下标 */
    selfIndex?: number;
    /** 节点路径（可选，供节点追踪使用） */
    path?: string;
}
/** 渲染过程中维护的 节点 → 父节点 映射 */
type ParentMap = WeakMap<SchemaNode, SchemaNode | null>;

/**
 * VarioNode 需要的渲染器接口
 */
interface VarioNodeRenderer {
    /** 解析组件类型 */
    resolveComponent: (type: string) => any;
    /** 求值表达式 */
    evaluateExpr: (expr: string, ctx: RuntimeContext$1) => unknown;
    /** 构建属性 */
    buildAttrs: (schema: SchemaNode, ctx: RuntimeContext$1, component: any, modelPathStack: PathSegment[], nodeContext?: NodeContext, parentMap?: ParentMap) => Record<string, any>;
    /** 解析子节点 */
    resolveChildren: (schema: SchemaNode, ctx: RuntimeContext$1, modelPathStack: PathSegment[], parentMap?: ParentMap, path?: string) => any;
    /** 尝试通过插件包装组件（lifecycle/provide-inject 等），返回 null 则走默认 h() */
    wrapComponent?: (component: any, attrs: Record<string, any>, children: any, vueSchema: VueSchemaNode, ctx: RuntimeContext$1) => VNode | null;
    /** 通过插件装饰 VNode（keepAlive/transition/teleport 等） */
    decorateVNode?: (vnode: VNode, vueSchema: VueSchemaNode, ctx: RuntimeContext$1) => VNode;
    /** 附加 ref */
    attachRef?: (vnode: VNode, vueSchema: VueSchemaNode, ctx?: RuntimeContext$1) => VNode;
    /** 获取 model 路径栈更新 */
    getUpdatedModelPathStack?: (schema: SchemaNode, modelPathStack: PathSegment[], ctx: RuntimeContext$1) => PathSegment[];
}

/**
 * Model 绑定相关配置（供外部/扩展使用）
 */
interface ModelOptions {
    /** 路径分隔符，默认 '.'，可供自定义路径格式 */
    separator?: string;
    /** 整棵 schema 的 model 默认惰性：true 时所有未显式设置 lazy 的 model 均不预写 state */
    lazy?: boolean;
}
/**
 * Vue 渲染器配置
 *
 * 组件化策略：scope boundary 始终组件化（model 绑定 / 自定义组件 / lifecycle）。
 * 循环项含子节点时自动包装 LoopItemCell。Vue 组件级 diff 自动跳过未变组件。
 */
interface VueRendererOptions {
    instance?: ComponentInternalInstance | null;
    /** Vue 应用实例（用于获取全局组件，优先级高于 instance） */
    app?: App | null;
    /** 全局组件映射（用于获取全局组件，优先级最高） */
    components?: Record<string, any>;
    /** 自定义指令映射（支持用户注册指令） */
    directives?: Record<string, Directive>;
    getState?: () => any;
    refsRegistry?: RefsRegistry;
    modelOptions?: ModelOptions;
    /** VNode 插件列表，默认使用 defaultPlugins（lifecycle/keepAlive/transition/teleport） */
    plugins?: VNodePlugin[];
    /** 页面级 model 配置，不写入全局 registerModelConfig */
    modelConfigs?: Map<string, ModelConfig>;
    regionInterceptor?: (schema: SchemaNode, path: string, ctx: RuntimeContext) => VNode | null | undefined;
    diagnosticSink?: DiagnosticSink;
    /** 显式运行时模式：决定表达式求值与事件作用域的路径（禁止用"能否查到 PageSession"推断） */
    runtimeMode?: 'legacy' | 'shadow' | 'prepared';
}
/**
 * Vue 渲染器
 * 将 Vario Schema 转换为 Vue VNode
 */
declare class VueRenderer implements VarioNodeRenderer {
    refsRegistry: RefsRegistry;
    private instance;
    private getState?;
    private pathResolver;
    private componentResolver;
    private expressionEvaluator;
    private eventHandler;
    private directiveHandler;
    private directiveMap;
    private attrsBuilder;
    private loopHandler;
    private childrenResolver;
    /** VNode 插件（组件包装 + VNode 装饰） */
    private plugins;
    private sink?;
    private preparedByPlugin;
    /** 显式运行时模式（legacy 走 evaluate 旧缓存；prepared 走 plan+memo） */
    readonly runtimeMode: 'legacy' | 'shadow' | 'prepared';
    /** 深度扫描结果缓存（按 schema 引用；patch 时 invalidateScan 失效） */
    private scanCache;
    regionInterceptor?: (schema: SchemaNode, path: string, ctx: RuntimeContext) => VNode | null | undefined;
    /**
     * 稳定的 parentMap 引用（方案 C 优化）
     * 使用实例级别 WeakMap，避免 render() 每次创建新 WeakMap
     * 导致 VarioNode 的 parentMap prop 引用变化→触发不必要的级联重渲染。
     * WeakMap 的 GC 特性保证：旧 schema 对象被回收后，对应条目自动清理。
     */
    private _stableParentMap;
    constructor(options?: VueRendererOptions);
    release(): void;
    /**
     * 使 schema 根的深度扫描缓存失效（patchNode / onSchemaPatch 后调用）
     */
    invalidateScan(root: SchemaNode): void;
    /**
     * 渲染 Schema 为 VNode
     */
    render(schema: SchemaNode, ctx: RuntimeContext): VNode | null;
    /**
     * 创建 VNode — 渲染管线
     *
     * 校验 → parentMap → cond → show → componentize → loop → resolve → model
     * → attrs → children → show-style → slots → lifecycle → h() → decorators
     */
    private createVNode;
    renderNode(schema: SchemaNode, ctx: RuntimeContext, path?: string): VNode;
    /** 注册 parentMap（节点→父节点映射） */
    private registerParentMap;
    /** 求值 cond 表达式。返回 truthy 值 / null（false）/ Error */
    private evaluateCond;
    /** 求值 show 表达式 */
    private evaluateShow;
    /** 解析 model 路径栈 */
    private resolveModelStack;
    /** 规范化 children：作用域插槽直传，组件用函数插槽，原生元素直传 */
    private normalizeChildren;
    /** 创建 VNode：先尝试 wrapComponent 插件，否则直接 h() */
    private createComponentVNode;
    /**
     * 创建错误提示 VNode
     */
    private createErrorVNode;
    /**
     * 应用 show 指令：根据 showValue 设置 display: none
     */
    private applyShowDirective;
    /**
     * 应用 VNode 装饰器：ref → directives → 插件(decorateVNode)
     * ref 和 directives 是 schema 核心能力，始终内置；
     * 其余 Vue 特性（keepAlive/transition/teleport）由插件按注册顺序装饰。
     */
    private applyVNodeDecorators;
    /**
     * 解析组件类型
     */
    resolveComponent(type: string): any;
    /**
     * 求值表达式
     */
    evaluateExpr(expr: string, ctx: RuntimeContext): unknown;
    /**
     * 构建属性
     */
    buildAttrs(schema: SchemaNode, ctx: RuntimeContext, component: any, modelPathStack: PathSegment$1[], nodeContext?: NodeContext, parentMap?: ParentMap): Record<string, any>;
    /**
     * 解析子节点
     */
    resolveChildren(schema: SchemaNode, ctx: RuntimeContext, modelPathStack: PathSegment$1[], parentMap?: ParentMap, path?: string): any;
    /**
     * 通过插件尝试包装组件（VarioNode 接口）
     */
    wrapComponent(component: any, attrs: Record<string, any>, children: any, vueSchema: VueSchemaNode, ctx: RuntimeContext): VNode | null;
    /**
     * 通过插件装饰 VNode（VarioNode 接口）
     */
    decorateVNode(vnode: VNode, vueSchema: VueSchemaNode, ctx: RuntimeContext): VNode;
    /**
     * 附加 ref
     */
    attachRef(vnode: VNode, vueSchema: VueSchemaNode, ctx?: RuntimeContext): VNode;
    /**
     * 获取更新后的 model 路径栈
     */
    getUpdatedModelPathStack(schema: SchemaNode, modelPathStack: PathSegment$1[], ctx: RuntimeContext): PathSegment$1[];
    /**
     * 清除组件解析缓存
     */
    clearComponentCache(): void;
    /**
     * 使特定组件的缓存失效
     */
    invalidateComponentCache(type: string): void;
}

/**
 * useVario composable for Vue integration
 *
 * 设计目标：
 * - Options 风格（state/computed/methods）零学习成本
 * - Composition 风格透传 reactive/computed
 * - 状态直接可访问（无需 .value）
 * - 方法统一通过 $methods 调用
 * - 生命周期：在使用 useVario 的组件中直接使用 Vue 的生命周期钩子
 *   （如 onMounted, onUnmounted 等），无需通过 options 传递
 *
 * 性能优化：
 * - 1000+ 组件场景：避免在每个 useVario 中注册生命周期钩子
 * - 生命周期钩子应在使用 useVario 的组件中直接使用，减少抽象层开销
 */

/**
 * 定义带类型推导的方法处理函数
 *
 * @template TEvent - 事件值类型
 * @template TState - 状态类型
 * @param handler - 方法处理函数
 * @returns 原函数（仅用于类型推导）
 *
 * @example
 * ```typescript
 * const { } = useVario(schema, {
 *   methods: {
 *     // value 自动推导为 string[]
 *     onCollapseChange: defineMethod<string[]>(({ value }) => {
 *       activeNames.value = value
 *     }),
 *
 *     // value 自动推导为 MouseEvent
 *     onClick: defineMethod<MouseEvent>(({ value }) => {
 *       console.log(value.clientX, value.clientY)
 *     }),
 *
 *     // 同时访问 state 和 value
 *     onSubmit: defineMethod<FormData>(({ value, state }) => {
 *       state.formData = value
 *     })
 *   }
 * })
 * ```
 */
declare function defineMethod<TEvent = unknown, TState extends Record<string, unknown> = Record<string, unknown>>(handler: (ctx: MethodContext<TState, TEvent>) => any): (ctx: MethodContext<TState, any>) => any;
declare const useVario: UseVarioOverload;

/**
 * VueReactiveAdapter
 *
 * 将 Vue 的 reactive() 对象适配为 ReactiveAdapter 接口，
 * 让 RuntimeContext 直接读写 Vue 的响应式状态，消除"双份状态 + 三重锁同步"。
 *
 * 设计要点：
 * - 状态只有一份（Vue reactive 对象），不再需要同步
 * - get/set 通过 @variojs/core 的 path 工具操作，支持嵌套路径
 * - createObject/createArray 使用 reactive() 确保新建结构也是响应式的
 */

/**
 * 创建 Vue 响应式适配器
 *
 * @param state - Vue reactive() 包裹的状态对象
 * @returns ReactiveAdapter 实例
 */
declare function createVueReactiveAdapter<TState extends Record<string, unknown>>(state: TState, options?: {
    untrackReads?: boolean;
}): ReactiveAdapter & {
    release: () => void;
};
declare function bindAdapterRelease(ctx: object, adapter: {
    release: () => void;
}): void;
declare function releaseVueAdapter(ctx: object | null | undefined): void;

declare const VarioTeleport: vue.DefineComponent<{
    to: string;
}, () => VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<{
    to: string;
}> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;
/**
 * 创建 Teleport VNode
 *
 * @param target 传送目标（CSS 选择器或 true 表示 body）
 * @param children 子节点
 */
declare function createTeleport(target: string | boolean, children: VNode | VNode[] | null): VNode;
/**
 * 检查是否需要 teleport
 */
declare function shouldTeleport(target: string | boolean | undefined): target is string | boolean;

/**
 * Provide/Inject 支持
 *
 * 在 Schema 节点上支持 Vue 的依赖注入系统
 *
 * 特性：
 * - provide: 向下传递数据给子组件
 * - inject: 从父组件获取数据
 * - 支持表达式求值：provide 的值可以是表达式
 * - 支持默认值：inject 可以指定默认值
 */

/**
 * 处理 provide 配置
 * 在组件 setup 中调用，向下传递数据
 *
 * @param schema Schema 节点
 * @param ctx 运行时上下文
 */
declare function setupProvide(schema: VueSchemaNode, ctx: RuntimeContext): void;
/**
 * 处理 inject 配置
 * 在组件 setup 中调用，从父组件获取数据
 *
 * @param schema Schema 节点
 * @returns inject 的值对象，可合并到 props 或 attrs
 */
declare function setupInject(schema: VueSchemaNode): Record<string, any>;
/**
 * 在 setup 中同时处理 provide 和 inject
 *
 * @param schema Schema 节点
 * @param ctx 运行时上下文
 * @returns inject 的值对象
 */
declare function setupProvideInject(schema: VueSchemaNode, ctx: RuntimeContext): Record<string, any>;

declare const VarioRoot: vue.DefineComponent<{
    sessionId: string;
    rootId: string;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}> | null, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<{
    sessionId: string;
    rootId: string;
}> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const VarioNode: vue.DefineComponent<{
    sessionId: string;
    nodeId: string;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}> | null, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<{
    sessionId: string;
    nodeId: string;
}> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare function useVarioPages(options?: {
    maxResidentPages?: number;
    maxHeapBytes?: number;
    runtimeBudget?: {
        maxActivePages?: number;
    };
}): {
    manager: PageSessionManager<{
        status: string;
        pause(): void;
        resume(): void;
        dispose(): void;
        activate?(): void;
    }>;
    activeId: vue.ShallowRef<string | null, string | null>;
    open: (id: string, schema: SchemaNode, pageOptions?: UseVarioOptions) => UseVarioResult<Record<string, unknown>>;
    pause: (id: string) => void;
    dispose: (id: string) => void;
};

declare const StaticRegion: vue.DefineComponent<{
    sessionId: string;
    regionId: string;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}> | null, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<{
    sessionId: string;
    regionId: string;
}> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;
declare const DynamicRegion: vue.DefineComponent<{
    sessionId: string;
    regionId: string;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}> | null, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<{
    sessionId: string;
    regionId: string;
}> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare class VueStateBridge {
    private readonly view;
    private readonly budget;
    readonly tokens: Map<string, vue.ShallowRef<number | undefined, number | undefined>>;
    readonly diagnostics: VarioDiagnostic[];
    private readonly flushedIds;
    constructor(view: PreparedView, budget?: Pick<RuntimeBudget, 'maxDirtyRegionsPerTick'>);
    tokenFor(regionId: string): vue.ShallowRef<number | undefined, number | undefined>;
    apply(changeSet: ChangeSet, ctx?: RuntimeContext): void;
}

type LoopCellRecord = {
    readonly key: string | number;
    readonly index: number;
};
type SessionStatus = 'active' | 'inactive' | 'paused' | 'disposed';
declare function getPageSessionForContext(ctx: RuntimeContext): PageSession | undefined;
declare function activePageSessionCount(): number;
declare class PageSession {
    readonly id: string;
    status: SessionStatus;
    view: PreparedView | null;
    ctx: RuntimeContext | null;
    readonly memo: ResultMemo;
    readonly runtime: RuntimeSession;
    bridge: VueStateBridge | null;
    renderer: VueRenderer | null;
    virtualAdapter: VirtualListAdapter | null;
    readonly timers: Set<NodeJS.Timeout>;
    readonly subscriptions: Array<() => void>;
    readonly executions: Set<string>;
    readonly bySchema: WeakMap<SchemaNode<Record<string, unknown>>, PreparedNode>;
    readonly byId: Map<string, PreparedNode>;
    readonly sources: Map<string, SchemaNode<Record<string, unknown>>>;
    readonly loopCells: Map<string, readonly LoopCellRecord[]>;
    /** loop 模板后代节点集合（indexView 预计算）：拦截器据此判定，不依赖同步栈（T3.1） */
    readonly loopDescendants: Set<string>;
    private readonly rendering;
    private readonly lexicalStack;
    readonly frames: ScopeTable;
    readonly materials: Map<string, MaterialManifest>;
    readonly store: StateStore;
    readonly sink: DiagnosticSink;
    readonly budget: Partial<RuntimeBudget>;
    private readonly frameStack;
    private readonly scope;
    private readonly unsub;
    constructor(options: {
        ctx: RuntimeContext;
        view: PreparedView | null;
        renderer?: VueRenderer;
        virtualAdapter?: VirtualListAdapter | null;
        engineId?: string;
        runtimeBudget?: Partial<RuntimeBudget>;
        diagnosticSink?: DiagnosticSink;
    });
    indexView(view: PreparedView | null): void;
    node(id: string): PreparedNode | undefined;
    source(id: string): SchemaNode | undefined;
    pushRendering(id: string): void;
    popRendering(id: string): void;
    isRendering(id: string): boolean;
    pushLexical(ctx: RuntimeContext): void;
    popLexical(): void;
    currentLexical(): RuntimeContext | null;
    isLexical(): boolean;
    pushScope(bindings: Record<string, unknown>): ScopeFrame;
    popScope(): void;
    /**
     * 事件帧：按 id 登记到 frames 表（不入 frameStack），异步事件交叠时
     * 由调用方持有 frame 引用并在结束时 releaseFrame，脱离栈顶约束（FR-6）。
     */
    createEventFrame(bindings: Record<string, unknown>): ScopeFrame;
    /** 按 id 释放帧（事件结束 / 抛错时同样调用；session 已 dispose 时为 no-op） */
    releaseFrame(frame: ScopeFrame): void;
    currentFrame(): ScopeFrame | null;
    get state(): StateStore;
    deactivate(): void;
    /**
     * 从全局表摘除但不 dispose ctx（T3.8 SSR：ctx 归调用方所有，
     * hydrate 会用同一 ctx 建新会话；dispose 会把 ctx 标记为 disposed）。
     */
    detach(): void;
    activate(): void;
    pause(): void;
    resume(): void;
    dispose(): void;
}

declare const LoopRegion: vue.DefineComponent<{
    sessionId: string;
    regionId: string;
}, () => VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}> | null, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<{
    sessionId: string;
    regionId: string;
}> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

/**
 * prepared 循环项 cell：loopCtx 生命周期跟随本组件（T3.1/KG-8）——
 * render 结束不再释放，事件闭包与延迟渲染的 VarioNode 子树都能读到 $item；
 * item/index 变化时重建，onBeforeUnmount 释放。
 */
declare const LoopItemCell: vue.DefineComponent<{
    sessionId: string;
    regionId: string;
    itemIndex: number;
    itemKey: string | number;
    generation: number;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}> | null, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<{
    sessionId: string;
    regionId: string;
    itemIndex: number;
    itemKey: string | number;
    generation: number;
}> & Readonly<{}>, {
    generation: number;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const VarioLifecycleBoundary: vue.DefineComponent<{
    inner: any;
    innerAttrs: Record<string, any>;
    innerChildren: any;
    schema?: (VueSchemaNode | null) | undefined;
    runtimeCtx?: (RuntimeContext | null) | undefined;
    sessionId?: string | undefined;
    nodeId?: string | undefined;
}, () => VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<{
    inner: any;
    innerAttrs: Record<string, any>;
    innerChildren: any;
    schema?: (VueSchemaNode | null) | undefined;
    runtimeCtx?: (RuntimeContext | null) | undefined;
    sessionId?: string | undefined;
    nodeId?: string | undefined;
}> & Readonly<{}>, {
    nodeId: string;
    schema: Record<string, any>;
    innerChildren: null;
    runtimeCtx: Record<string, any>;
    sessionId: string;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

declare const VarioErrorBoundary: vue.DefineComponent<{
    fallback?: ((error: Error) => VNode) | undefined;
    onCaptured?: ((error: Error) => void) | undefined;
    sessionId?: string | undefined;
    nodeId?: string | undefined;
}, () => VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}> | VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | undefined, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<{
    fallback?: ((error: Error) => VNode) | undefined;
    onCaptured?: ((error: Error) => void) | undefined;
    sessionId?: string | undefined;
    nodeId?: string | undefined;
}> & Readonly<{}>, {
    nodeId: string;
    sessionId: string;
    fallback: Function;
    onCaptured: Function;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

type ShadowDiff = {
    nodeId: string;
    path: string;
    field: string;
    legacy: unknown;
    prepared: unknown;
};
declare function compareShadowPlans(legacySchema: SchemaNode, prepared: PreparedView): ShadowDiff[];

type CanaryDecision = {
    mode: RuntimeMode;
    reason: string;
    rolledBack: boolean;
    unit: 'session' | 'tenant' | 'engine';
    at: string;
};
declare function evaluateCanary(options: {
    correctnessOk: boolean;
    parityDiffs: number;
    heapOverBudget?: boolean;
    perfOverBudget?: boolean;
    unit?: 'session' | 'tenant' | 'engine';
    engineId?: string;
}): CanaryDecision;

type VueCapabilities = {
    effectScopePause: boolean;
    version: string;
};
declare function detectVueCapabilities(): VueCapabilities;

type SsrRenderOptions = {
    components?: Record<string, unknown>;
    directives?: Record<string, unknown>;
    /** 隔离的 engine（capability/material 注册表）；缺省共享 'default'（T3.8/FR-14） */
    engineId?: string;
};
declare function createSsrSession(ctx: RuntimeContext, schema: SchemaNode, options?: SsrRenderOptions): PageSession;

declare function renderSsrToString(schema: SchemaNode, ctx: RuntimeContext, options?: SsrRenderOptions): Promise<string>;
declare function hydrateVarioApp(container: {
    innerHTML: string;
}, schema: SchemaNode, ctx: RuntimeContext): Promise<{
    app: App;
    session: PageSession;
}>;

type RuntimeMode = 'legacy' | 'shadow' | 'prepared';
declare function getRuntimeMode(engineId?: string): RuntimeMode;
declare function setRuntimeMode(next: RuntimeMode, scope?: {
    engineId?: string;
}): void;

type RuntimeMetric = {
    name: string;
    sessionId?: string;
    nodeId?: string;
    planId?: string;
    executionId?: string;
    durationMs?: number;
    count?: number;
    engineId?: string;
    pageId?: string;
    schemaId?: string;
    revision?: number;
    actionId?: string;
    expressionId?: string;
};
declare function recordRuntimeMetric(metric: RuntimeMetric, target?: DiagnosticSink): void;
declare function recordInteractionBudget(input: {
    nodeId?: string;
    actionId?: string;
    sessionId?: string;
    durationMs: number;
}, target?: DiagnosticSink): void;

declare function adaptLegacySchema(schema: SchemaNode, options?: PrepareViewOptions): PreparedView;

export { DynamicRegion, LoopItemCell, LoopRegion, MethodContext, type ModelConfig, type ModelOptions, PageSession, RefsRegistry, StaticRegion, UseVarioOptions, UseVarioOverload, UseVarioResult, VNodePlugin, VarioErrorBoundary, VarioLifecycleBoundary, VarioNode, VarioRoot, VarioTeleport, VirtualListAdapter, VueRenderer, type VueRendererOptions, VueSchemaNode, activePageSessionCount, adaptLegacySchema, evaluateCanary as applyCanary, applySchemaModelDefaults, attachRef, bindAdapterRelease, clearModelConfigs, compareShadowPlans, createBindingConfigTable, createModelBinding, createSsrSession, createTeleport, createVueReactiveAdapter, defineMethod, detectVueCapabilities, evaluateCanary, getPageSessionForContext, getRuntimeMode, hydrateVarioApp, recordInteractionBudget, recordRuntimeMetric, registerModelConfig, releaseVueAdapter, renderSsrToString, setRuntimeMode, setupInject, setupProvide, setupProvideInject, shouldTeleport, useVario, useVarioPages };
