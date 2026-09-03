type MaterialManifest = {
    name: string;
    type?: string;
    version: string;
    props?: Record<string, unknown>;
    events?: string[] | Readonly<Record<string, unknown>>;
    slots?: string[] | Readonly<Record<string, unknown>>;
    models?: string[] | Readonly<Record<string, unknown>>;
    capabilities?: string[];
    migrations?: readonly unknown[];
};
type CapabilityManifest = {
    name: string;
    pure: boolean;
    cost: number;
    inputLimit: number;
    allowInExpression: boolean;
};

type NodeId = string;
type SchemaVersion = 0 | 1;
type SchemaDocument = {
    version: SchemaVersion;
    schemaVersion?: SchemaVersion;
    id?: string;
    root: SchemaNode;
    initialState?: Readonly<Record<string, unknown>>;
    materials?: readonly MaterialManifest[];
    materialVersions?: Readonly<Record<string, string>>;
    extensions?: Readonly<Record<string, unknown>>;
};

/**
 * Action 相关类型定义
 */
/**
 * 动作类型映射
 * 根据 type 值推导对应的动作参数类型
 */
type ActionMap = {
    set: {
        path: string;
        value: string | unknown;
    };
    emit: {
        event: string;
        data?: string | unknown;
    };
    navigate: {
        to: string;
    };
    log: {
        level?: 'info' | 'warn' | 'error';
        message: string;
    };
    if: {
        cond: string;
        then?: Action[];
        else?: Action[];
    };
    loop: {
        var: string;
        in: string;
        body: Action[];
    };
    call: {
        method: string;
        params?: string | Record<string, unknown> | unknown[];
        resultTo?: string;
        modifiers?: EventModifiers;
    };
    batch: {
        actions: Action[];
    };
    push: {
        path: string;
        value: string | unknown;
    };
    pop: {
        path: string;
    };
    shift: {
        path: string;
    };
    unshift: {
        path: string;
        value: string | unknown;
    };
    splice: {
        path: string;
        start: number | string;
        deleteCount?: number | string;
        items?: string | unknown[];
    };
};
/**
 * 动作类型（所有支持的 action type）
 */
type ActionType = keyof ActionMap;
/**
 * 动作接口
 * 支持类型推导：根据 type 推导对应的参数结构
 *
 * @example
 * // type 字段会有智能提示：'call' | 'set' | 'emit' | ...
 * const action: Action = { type: 'call', method: 'handleClick' }
 */
type BuiltInAction = {
    [K in keyof ActionMap]: {
        readonly type: K;
    } & Readonly<ActionMap[K]>;
}[keyof ActionMap];
type CustomAction = {
    readonly type: string;
};
type Action = BuiltInAction | CustomAction;
/**
 * 类型守卫：检查动作是否符合特定类型
 */
declare function isActionOfType<T extends keyof ActionMap>(action: Action, actionType: T): action is Action & ActionMap[T];
/**
 * 可写的 Action 类型（用于构建 Action 对象）
 * 移除了 readonly 修饰符，允许动态赋值
 */
type WritableAction<T extends keyof ActionMap = keyof ActionMap> = {
    type: T;
} & ActionMap[T];
/**
 * 创建特定类型的 Action（类型安全的构建器）
 * @example
 * const action = createAction('call', { method: 'handleClick' })
 * action.params = ['arg1', 'arg2'] // 类型安全
 */
declare function createAction<T extends keyof ActionMap>(type: T, props: ActionMap[T]): WritableAction<T>;

/**
 * Model 修饰符类型
 *
 * Vue 3 标准 v-model 修饰符：
 * - trim: 去除输入值的首尾空格
 * - number: 自动将输入值转换为数字
 * - lazy: 使用 change 事件而不是 input 事件更新
 *
 * 也支持自定义修饰符
 */
type ModelModifiers = ReadonlyArray<'trim' | 'number' | 'lazy' | string> | Readonly<Record<'trim' | 'number' | 'lazy' | string, boolean>>;
/**
 * 事件修饰符类型
 *
 * DOM 事件修饰符：
 * - stop: 阻止事件冒泡（event.stopPropagation()）
 * - prevent: 阻止默认行为（event.preventDefault()）
 * - capture: 使用捕获模式
 * - self: 只当事件在该元素本身触发时才执行
 * - once: 事件只触发一次
 * - passive: 提升移动端性能（不调用 preventDefault）
 *
 * 键盘修饰符：
 * - enter, tab, delete, esc, space, up, down, left, right
 *
 * 系统修饰符：
 * - ctrl, alt, shift, meta
 *
 * 鼠标修饰符：
 * - left, right, middle
 */
type EventModifier = 'stop' | 'prevent' | 'capture' | 'self' | 'once' | 'passive' | 'enter' | 'tab' | 'delete' | 'esc' | 'space' | 'up' | 'down' | 'left' | 'right' | 'ctrl' | 'alt' | 'shift' | 'meta' | 'left' | 'right' | 'middle' | string;
type EventModifiers = ReadonlyArray<EventModifier> | Readonly<Record<EventModifier, boolean>>;
/**
 * 常见的 DOM/Vue 事件名称
 */
type CommonEventName = 'click' | 'dblclick' | 'mousedown' | 'mouseup' | 'mousemove' | 'mouseenter' | 'mouseleave' | 'mouseover' | 'mouseout' | 'keydown' | 'keyup' | 'keypress' | 'input' | 'change' | 'submit' | 'focus' | 'blur' | 'reset' | 'drag' | 'dragstart' | 'dragend' | 'dragover' | 'dragenter' | 'dragleave' | 'drop' | 'scroll' | 'resize' | 'wheel' | 'copy' | 'cut' | 'paste' | 'touchstart' | 'touchmove' | 'touchend' | 'touchcancel' | `update:${string}` | 'selection-change' | 'current-change' | 'row-click' | 'cell-click' | 'sort-change' | 'filter-change' | 'expand-change' | 'opened' | 'closed' | 'open' | 'close' | string;
/**
 * 事件名称类型（支持修饰符点语法）
 *
 * @example
 * type T1 = EventName  // 'click' | 'input' | 'submit' | ...
 * type T2 = EventName  // 'click.stop' | 'click.prevent' | ...
 * type T3 = EventName  // 'keydown.enter' | 'keydown.ctrl.enter' | ...
 */
type EventName = CommonEventName | `${CommonEventName}.${EventModifier}` | `${CommonEventName}.${EventModifier}.${EventModifier}` | `${CommonEventName}.${EventModifier}.${EventModifier}.${EventModifier}` | `${string}.${EventModifier}` | string;
/**
 * model 作用域/绑定配置
 * - path: 绑定路径
 * - scope: true 时仅作子节点路径作用域，不在本节点绑定
 * - default: 当状态中该路径值为 undefined 时使用的默认值（仅在本节点绑定时生效）
 * - lazy: true 时不预写 state，仅在该 model 值变化后才写入 state
 * - modifiers: v-model 修饰符（trim, number, lazy 等）
 */
interface ModelScopeConfig {
    readonly path: string;
    readonly scope?: boolean;
    /** 状态未初始化时使用的默认值 */
    readonly default?: unknown;
    /** true 时不预写 state，仅当用户修改该绑定值后才写入 state */
    readonly lazy?: boolean;
    /** v-model 修饰符 */
    readonly modifiers?: ModelModifiers;
}
/**
 * Schema 节点接口
 *
 * 表示 Vario Schema 中的一个节点，可以是组件、元素或文本
 *
 * @template TState 状态类型，用于类型推导
 */
interface SchemaNode<TState extends Record<string, unknown> = Record<string, unknown>> {
    /**
     * 组件类型或 HTML 标签名
     *
     * @example "Button", "Input", "div"
     */
    readonly type: string;
    /**
     * 组件属性
     *
     * 支持表达式插值（字符串形式的表达式会被求值）
     *
     * @example { label: "提交", disabled: "{{ !user.name }}" }
     */
    readonly props?: Readonly<Record<string, unknown>>;
    /**
     * 子节点
     *
     * 可以是：
     * - SchemaNode 数组（多个子节点）
     * - 字符串（文本节点，支持表达式插值）
     *
     * @example ["文本内容", { type: "Button", ... }]
     * @example "{{ user.name }}"
     */
    readonly children?: ReadonlyArray<SchemaNode<TState>> | string;
    /**
     * 事件处理器（支持多种格式）
     *
     * 键为事件名，支持修饰符语法（Vue 风格）：
     * - "click" - 普通事件
     * - "click.stop" - 带单个修饰符
     * - "click.stop.prevent" - 带多个修饰符
     *
     * 值支持多种格式：
     * 1. Action 对象
     * 2. Action 对象数组
     * 3. 字符串（method 名简写）
     * 4. 字符串数组（多个 method 名）
     * 5. 数组简写 [call, method, params?, modifiers?]（四个固定位置，类似指令格式）
     *
     * @example
     * // 单个 action 对象
     * { "click.stop": { type: "call", method: "handleClick" } }
     *
     * // Action 数组
     * { click: [{ type: "call", method: "validate" }, { type: "emit", event: "submit" }] }
     *
     * // 字符串简写（自动转为 call action）
     * { "click.prevent": "handleSubmit" }
     *
     * // 字符串数组
     * { submit: ["validate", "submit"] }
     *
     * // 数组简写格式（四个固定位置）
     * { click: ["call", "handleClick", ["{{name}}"], ["stop"]] }
     * { click: ["call", "handleClick", ["{{name}}"], { stop: true, prevent: true }] }
     */
    readonly events?: Readonly<Record<EventName, EventHandler>>;
    /**
     * 自定义指令配置（类似 Vue 的 v-directive）
     *
     * 支持多种格式：
     * 1. 完整对象：{ name: 'focus', value: true, arg: 'param', modifiers: { lazy: true } }
     * 2. 数组简写（类似 Vue withDirectives）：['focus', true, 'param', { lazy: true }]
     * 3. 对象映射：{ focus: true } 或 { focus: 'value' }
     *
     * @example
     * // 完整对象
     * directives: [{
     *   name: 'focus',
     *   value: '{{ shouldFocus }}',
     *   arg: 'param',
     *   modifiers: { lazy: true }
     * }]
     *
     * // 数组简写（参考 Vue withDirectives）
     * directives: [
     *   ['focus', true],
     *   ['custom', '{{ value }}', 'arg', { mod1: true }]
     * ]
     *
     * // 对象映射简写
     * directives: {
     *   focus: true,
     *   custom: '{{ value }}'
     * }
     */
    readonly directives?: DirectiveConfig;
    /**
     * 条件渲染表达式
     *
     * 当表达式为真时渲染该节点
     *
     * @example "user.age >= 18"
     */
    readonly cond?: string;
    /**
     * 可见性控制表达式
     *
     * 当表达式为真时显示该节点（使用 CSS display 控制）
     *
     * @example "isVisible"
     */
    readonly show?: string;
    /**
     * 列表渲染配置
     *
     * 用于循环渲染列表项
     */
    readonly loop?: Readonly<LoopConfig>;
    /**
     * 双向绑定路径或作用域配置（单 model）
     *
     * - 字符串：绑定路径，在 autoResolve 时会参与路径栈并创建绑定
     * - 对象：path 必填；scope: true 时仅作子节点路径作用域不绑定；default 为状态未初始化时的默认值
     *
     * @example "user.name"
     * @example { path: "form", scope: true }
     * @example { path: "name", default: "张三" }
     * @example { path: "optional", lazy: true }
     */
    readonly model?: string | ModelScopeConfig;
    /**
     * 具名双向绑定（多 model，Vue 3.4+）
     *
     * 支持多个 model 绑定，键为 model 名称，值为路径
     *
     * @example { checked: "user.agreed", value: "user.email" }
     */
    readonly [key: `model:${string}`]: string;
    /**
     * 插槽名称（用于 template 节点）
     *
     * 当 type 为 'template' 时，指定插槽名称
     *
     * @example { type: 'template', slot: 'default', props: { scope: 'scope' }, children: '...' }
     */
    readonly slot?: string;
    /**
     * 自定义扩展属性
     *
     * 允许挂载任意自定义属性，用于元数据、调试信息、扩展功能或特定业务需求。
     * 这些属性会被核心渲染器忽略，不会参与渲染，但可以在自定义处理器中使用。
     *
     * 注意：属性名应避免与标准属性冲突（如 type、props、model 等）。
     * 建议使用命名空间前缀（如 myLib_xxx）来避免冲突。
     *
     * @example
     * {
     *   type: 'div',
     *   raw: { source: 'api', id: 123 },
     *   debug: true,
     *   meta: { author: 'team-a' },
     *   myPlugin_config: { animate: true }
     * }
     */
    readonly [key: string]: unknown;
}
/**
 * 列表渲染配置
 */
interface LoopConfig {
    /**
     * 数据源路径（表达式）
     *
     * 指向状态中的数组或对象
     *
     * @example "items"
     * @example "user.roles"
     */
    readonly items: string;
    /**
     * 循环变量名
     *
     * 在循环体内可通过此变量访问当前项
     *
     * @example "item"
     * @example "role"
     */
    readonly itemKey: string;
    /**
     * 索引变量名（可选）
     *
     * 在循环体内可通过此变量访问当前索引
     *
     * @example "index"
     */
    readonly indexKey?: string;
    /**
     * 稳定 item key 表达式（可选）。缺省回退 item.id，再回退 index。
     */
    readonly key?: string;
    /**
     * 是否对该 loop 使用宿主虚拟化。false 时全量展开但仍受预算约束。
     */
    readonly virtual?: boolean;
}
/**
 * Schema 根节点类型
 *
 * Schema 本身就是一个 SchemaNode
 */
type Schema<TState extends Record<string, unknown> = Record<string, unknown>> = SchemaNode<TState>;
/**
 * 事件处理器数组简写格式（四个固定位置，类似指令格式）
 * [call, method, params?, modifiers?]
 *
 * @example ['call', 'submit']
 * @example ['call', 'submit', ['{{name}}', '{{age}}']]
 * @example ['call', 'submit', [], ['stop', 'prevent']]
 * @example ['call', 'submit', ['{{id}}'], { stop: true }]
 */
type CallParams = ActionMap['call'] extends {
    params?: infer P;
} ? P : never;
type EventHandlerParams = ReadonlyArray<unknown> | Readonly<{
    params?: CallParams;
}>;
type EventHandlerArray = readonly [
    string,
    string,
    (EventHandlerParams | undefined)?,
    (EventModifiers | undefined)?
];
/**
 * 事件处理器类型（支持多种格式）
 */
type EventHandler = Action | ReadonlyArray<Action> | string | ReadonlyArray<string> | EventHandlerArray;
/**
 * 单个指令配置对象
 */
interface DirectiveObject {
    /**
     * 指令名称（不含 v- 前缀）
     *
     * @example 'focus'
     * @example 'custom-directive'
     */
    readonly name: string;
    /**
     * 指令的值（支持表达式）
     *
     * @example true
     * @example '{{ isVisible }}'
     * @example { key: 'value' }
     */
    readonly value?: unknown;
    /**
     * 指令参数
     *
     * @example 'param' // v-bind:param
     */
    readonly arg?: string;
    /**
     * 指令修饰符
     *
     * @example { lazy: true, trim: true }
     */
    readonly modifiers?: Record<string, boolean>;
}
/**
 * 指令数组简写格式（参考 Vue withDirectives）
 * [name, value?, arg?, modifiers?]
 */
type DirectiveArray = readonly [
    string,
    (unknown | undefined)?,
    (string | undefined)?,
    (Record<string, boolean> | undefined)?
];
/**
 * 指令配置类型（支持多种格式）
 */
type DirectiveConfig = DirectiveObject | DirectiveArray | ReadonlyArray<DirectiveObject | DirectiveArray> | Readonly<Record<string, unknown>>;
/**
 * defineSchema 配置接口
 *
 * @template TState 状态类型
 * @template TServices 服务类型
 */
interface DefineSchemaConfig<TState extends Record<string, unknown> = Record<string, unknown>, TServices extends Record<string, (...args: unknown[]) => unknown> = Record<string, (...args: unknown[]) => unknown>> {
    /**
     * 初始状态定义
     *
     * 用于类型推导和运行时初始化
     */
    readonly state: TState;
    /**
     * 业务逻辑服务（可选）
     *
     * 服务函数可以访问全局对象（如 fetch, localStorage）
     * 会自动注册到 ctx.$methods['services.*']
     */
    readonly services?: Readonly<TServices>;
    /**
     * Schema 函数
     *
     * 接收运行时上下文，返回 Schema
     *
     * @param ctx 运行时上下文（包含 state, services, $emit 等）
     * @returns Schema 节点
     */
    readonly schema: (ctx: any) => Schema<TState>;
}
/**
 * VarioView 类型
 *
 * defineSchema 的返回值类型
 * 包含编译后的 Schema 和元数据
 */
interface VarioView<TState extends Record<string, unknown> = Record<string, unknown>> {
    /**
     * 编译后的纯 Schema（JSON 格式）
     */
    readonly schema: Schema<TState>;
    /**
     * 状态类型（用于类型推导）
     */
    readonly stateType: TState;
    /**
     * 服务类型（用于类型推导）
     */
    readonly servicesType?: Record<string, (...args: unknown[]) => unknown>;
    readonly document?: SchemaDocument;
}

/**
 * Expression 相关类型定义
 */
/**
 * 表达式求值选项
 */
interface ExpressionOptions {
    /**
     * 是否允许访问全局对象（默认 false）
     */
    allowGlobals?: boolean;
    /**
     * 最大求值步数
     */
    maxSteps?: number;
    /**
     * 求值超时（毫秒）
     */
    timeout?: number;
    /**
     * 最大嵌套深度（防止 DoS 攻击，默认 50）
     */
    maxNestingDepth?: number;
}
/**
 * 表达式缓存接口
 * 结果类型使用 unknown，因为表达式求值结果类型无法静态推导
 */
interface ExpressionCache {
    expr: string;
    result: unknown;
    dependencies: string[];
    timestamp: number;
    policyFingerprint?: string;
}

/**
 * Utils 类型定义
 */
/**
 * 路径段类型
 */
type PathSegment = string | number;
/**
 * 路径值类型推导工具
 * 根据路径字符串推导对应的值类型，支持对象嵌套与数组索引
 *
 * @example
 * GetPathValue<{ user: { name: string } }, 'user.name'> // string
 * GetPathValue<{ items: number[] }, 'items.0'> // number
 * GetPathValue<{ list: { id: number }[] }, 'list.0.id'> // number
 */
type GetPathValue<T, TPath extends string> = TPath extends `${infer Key}.${infer Rest}` ? Key extends keyof T ? T[Key] extends Record<string, unknown> ? GetPathValue<T[Key], Rest> : T[Key] extends readonly (infer E)[] ? Rest extends `${number}` ? E : Rest extends `${number}.${infer R}` ? GetPathValue<E, R> : unknown : unknown : unknown : TPath extends keyof T ? T[TPath] : unknown;
/**
 * 路径设置值类型推导工具
 * 根据路径字符串推导可以设置的值类型
 */
type SetPathValue<T, TPath extends string> = GetPathValue<T, TPath>;
/**
 * 状态变更回调：path 与 value 类型联动，TPath 由 path 推导，value 为 GetPathValue<TState, TPath>
 */
type OnStateChangeCallback<TState extends Record<string, unknown>> = <TPath extends string>(path: TPath, value: GetPathValue<TState, TPath>, ctx: any) => void;
/**
 * 从 Schema 推导状态类型
 *
 * @example
 * type MyState = InferStateType<typeof mySchema>
 */
type InferStateType<TSchema> = TSchema extends {
    stateType: infer TState;
} ? TState : never;
/**
 * 类型工具：从 DefineSchemaConfig 推导状态类型
 */
type InferStateFromConfig<TConfig> = TConfig extends {
    state: infer TState;
} ? TState : never;
/**
 * 类型工具：从 DefineSchemaConfig 推导服务类型
 */
type InferServicesFromConfig<TConfig> = TConfig extends {
    services: infer TServices;
} ? TServices : never;

/**
 * Runtime 相关类型定义
 */

/**
 * 响应式适配器接口
 *
 * 核心设计：让 RuntimeContext 的状态存储可以适配到不同 UI 框架的响应式系统，
 * 从而消除"双份状态同步"问题。Vue 侧提供 VueReactiveAdapter（内部用 reactive()），
 * React 侧可提供 ReactReactiveAdapter（内部用 useSyncExternalStore + 不可变快照）。
 *
 * 当 adapter 被注入到 RuntimeContext 后：
 * - _get/_set 通过 adapter 读写状态
 * - Proxy 的 get/set/has/ownKeys trap 也路由到 adapter
 * - 不再需要 onStateChange 做双向同步（因为只有一份状态）
 */
interface ReactiveAdapter {
    /** 通过路径读取值（支持嵌套路径如 'user.name'） */
    get(path: string): unknown;
    /** 通过路径设置值（支持嵌套路径，自动创建中间结构） */
    set(path: string, value: unknown): void;
    /** 直接读取顶层属性（供 Proxy get trap 使用） */
    getProperty(key: string): unknown;
    /** 直接设置顶层属性（供 Proxy set trap 使用） */
    setProperty(key: string, value: unknown): void;
    /** 检查属性是否存在（供 Proxy has trap 和表达式引擎 'name in ctx' 使用） */
    has(key: string): boolean;
    /** 返回所有状态键名（供 Proxy ownKeys trap 和 for...in 使用） */
    keys(): string[];
}
/**
 * 方法处理器类型
 * 所有注册到 $methods 的方法必须符合此签名
 *
 * 注意：动作处理器也通过 $methods 注册，但它们的参数是 Action
 */
interface ExecutionMetadata {
    readonly signal?: AbortSignal;
    readonly executionId?: string;
}
type MethodHandler<TParams = unknown, TResult = unknown> = (ctx: any, // 避免循环依赖，实际上是 RuntimeContext
params: TParams, metadata?: ExecutionMetadata) => Promise<TResult> | TResult;
/**
 * 动作处理器类型（特殊的方法处理器）
 */
type ActionHandler = MethodHandler<any, void>;
/**
 * 方法注册表类型
 * 支持普通方法和指令处理器
 */
type MethodsRegistry = Record<string, MethodHandler>;
/**
 * 运行时上下文类型
 * 使用交叉类型结合接口，既支持状态类型推导又支持动态属性
 *
 * @template TState 状态类型，用于类型推导和约束
 *
 * 设计说明：
 * - 使用接口 + 索引签名，既支持类型推导又支持动态属性
 * - 状态属性通过 TState 泛型约束
 * - 系统 API 使用具体类型定义，确保类型安全
 */
type RuntimeContext<TState extends Record<string, unknown> = Record<string, unknown>> = TState & {
    $emit: (event: string, data?: unknown) => void;
    $methods: MethodsRegistry;
    $exprOptions?: ExpressionOptions;
    /**
     * 事件值（在事件处理中可用）
     * - 对于 DOM 原生事件：Event 对象
     * - 对于 Vue 组件 emit：emit 的参数值（如 string[]、number 等）
     */
    $event?: unknown;
    $item?: TState[keyof TState];
    $index?: number;
    /** 当前节点（节点上下文功能，在事件处理中可用） */
    $self?: SchemaNode<TState>;
    /** 父节点（支持链式访问 $parent.$parent，节点上下文功能） */
    $parent?: SchemaNode<TState> | null;
    /** 兄弟节点数组（不包含自身，节点上下文功能） */
    $siblings?: SchemaNode<TState>[];
    /** 子节点数组（节点上下文功能） */
    $children?: SchemaNode<TState>[];
    _get: <TPath extends string>(path: TPath) => GetPathValue<TState, TPath>;
    _set: <TPath extends string>(path: TPath, value: SetPathValue<TState, TPath>, options?: {
        skipCallback?: boolean;
        bypassSession?: boolean;
    }) => void;
} & Record<string, unknown>;
/**
 * RuntimeContext 创建选项
 * @template TState 与 context 一致的状态类型，供 onStateChange 等回调获得完整类型推导
 */
interface CreateContextOptions<TState extends Record<string, unknown> = Record<string, unknown>> {
    onEmit?: (event: string, data?: unknown) => void;
    methods?: MethodsRegistry;
    /** 在 _set 调用后触发，value 类型随 path 推导 */
    onStateChange?: <TPath extends string>(path: TPath, value: GetPathValue<TState, TPath>, ctx: RuntimeContext<TState>) => void;
    createObject?: () => Record<string, unknown>;
    createArray?: () => unknown[];
    exprOptions?: ExpressionOptions;
    /**
     * 响应式适配器（可选）
     *
     * 提供后，RuntimeContext 的状态读写全部路由到 adapter，
     * 不再在 ctx 内部维护独立的状态副本。
     * 这消除了 useVario 中"双份状态 + 三重锁同步"的复杂度。
     *
     * 向后兼容：不提供 adapter 时行为与之前完全一致。
     */
    adapter?: ReactiveAdapter;
}

/**
 * Error 相关类型定义
 */
/**
 * 错误上下文接口
 */
interface ErrorContext {
    /** 错误发生的路径 */
    path?: string;
    /** 表达式字符串（如果是表达式错误） */
    expression?: string;
    /** Action 对象（如果是 Action 错误） */
    action?: Record<string, unknown>;
    /** 修复建议 */
    suggestion?: string;
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
 * Schema 验证错误上下文
 */
interface SchemaValidationErrorContext {
    /** 表达式字符串（如果是表达式错误） */
    expression?: string;
    /** 修复建议 */
    suggestion?: string;
    /** 额外上下文信息 */
    metadata?: Record<string, unknown>;
}

type RegionKind = 'static' | 'dynamic' | 'loop' | 'slot' | 'semantic';
interface VarioDiagnostic {
    readonly code: string;
    readonly message: string;
    readonly path: string;
    readonly phase: string;
    readonly engineId?: string;
    readonly pageId?: string;
    readonly schemaId?: string;
    readonly revision?: number;
    readonly nodeId?: string;
    readonly actionId?: string;
    readonly expressionId?: string;
    readonly metadata?: Readonly<Record<string, unknown>>;
}
interface ExpressionPlan {
    readonly id: string;
    readonly source: string;
    readonly stateDeps: readonly string[];
    readonly localDeps: readonly string[];
    readonly dynamicDeps: readonly string[];
    readonly dependencyMode: 'exact' | 'prefix' | 'dynamic';
    readonly ast?: unknown;
    readonly pure: boolean;
    readonly cost: number;
    readonly estimatedCost: number;
    readonly policyFingerprint: string;
    /** 编译时注入的词法别名集合（祖先 loop 的 itemKey/indexKey），参与 plan id */
    readonly aliases?: readonly string[];
}
interface LoopPlan {
    readonly nodeId: string;
    readonly itemsSource: string;
    readonly itemKey: string;
    readonly indexKey: string;
    readonly keySource: string | null;
    readonly templateIds: readonly string[];
    readonly template: SchemaNode;
    readonly regionId?: string;
    readonly itemsPlanId?: string;
    readonly templateNodeId?: string;
    readonly itemAlias?: string;
    readonly indexAlias?: string;
    readonly keyPlanId?: string;
    readonly estimatedTemplateNodes?: number;
    readonly virtual?: boolean;
}
interface SlotPlan {
    readonly nodeId: string;
    readonly name: string;
    readonly propNames: readonly string[];
    readonly fallbackIds: readonly string[];
}
interface PreparedNode {
    readonly id: string;
    readonly type: string;
    readonly componentType?: string;
    readonly path: string;
    readonly schemaPath?: string;
    readonly depth: number;
    readonly parentId: string | null;
    readonly childIds: readonly string[];
    readonly childrenIds?: readonly string[];
    readonly region: RegionKind;
    readonly regionId?: string;
    readonly schema?: SchemaNode;
    readonly expressionIds?: readonly string[];
    readonly dynamicPlans?: readonly string[];
    readonly dynamicProps?: Readonly<Record<string, string>>;
    readonly textPlan?: {
        readonly planId: string;
    };
    readonly conditionPlan?: string;
    readonly showPlan?: string;
    readonly eventPlans?: Readonly<Record<string, readonly Action[]>>;
    readonly modelPlans?: readonly {
        readonly path: string;
    }[];
    readonly staticAttrs?: Readonly<Record<string, unknown>>;
    readonly staticProps?: Readonly<Record<string, unknown>>;
    readonly flags?: number;
    readonly featureFlags?: number;
    readonly loopPlanId?: string;
    readonly slotPlanId?: string;
}
interface PreparedRegion {
    readonly id?: string;
    readonly kind: RegionKind;
    readonly nodeIds: readonly string[];
}
type PathPlan = string;
interface RuntimeBudget {
    readonly maxDepth: number;
    readonly maxNodes: number;
    readonly maxExpandedNodes: number;
    readonly maxDirtyRegionsPerTick?: number;
    readonly maxActivePages?: number;
    readonly maxLoopItemsPerRegion?: number;
    readonly maxExpandedNodesPerPage?: number;
    readonly maxActiveLoopCells?: number;
    readonly maxScopeDepth?: number;
    /** prepared 专用：state 用 deep reactive + sync deep watch，直接改 state 路由为 recordChange（T3.5） */
    readonly deepStateWatch?: boolean;
}
interface PreparedStats {
    readonly nodeCount: number;
    readonly maxDepth: number;
    readonly expressionCount: number;
    readonly loopCount: number;
}
interface PreparedView {
    readonly id?: string;
    readonly revision: number;
    readonly rootNodeId?: string;
    readonly rootId?: string;
    readonly nodes: ReadonlyMap<string, PreparedNode>;
    readonly nodeList?: readonly PreparedNode[];
    readonly nodeMap?: ReadonlyMap<string, PreparedNode>;
    readonly regions: ReadonlyMap<string, PreparedRegion>;
    readonly regionList?: readonly PreparedRegion[];
    readonly regionMap?: ReadonlyMap<string, PreparedRegion>;
    readonly idMap: ReadonlyMap<string, string>;
    readonly diagnostics: readonly VarioDiagnostic[];
    readonly expressions: ReadonlyMap<string, ExpressionPlan>;
    readonly actions: ReadonlyMap<string, Readonly<Record<string, readonly Action[]>>>;
    readonly loops: ReadonlyMap<string, LoopPlan>;
    readonly slots: ReadonlyMap<string, SlotPlan>;
    readonly nodeCount: number;
    readonly maxDepth: number;
    readonly stats?: PreparedStats;
    readonly legacyRequired?: boolean;
}
interface ChangeRecord {
    readonly path: string;
    readonly value: unknown;
}
interface ChangeSet {
    readonly id: number;
    readonly transactionId?: string;
    readonly paths: readonly string[];
    readonly records: readonly ChangeRecord[];
    readonly versions?: Readonly<Record<string, number>>;
}

export { type Action, type ActionHandler, type ActionMap, type ActionType, type BuiltInAction, type CapabilityManifest, type ChangeRecord, type ChangeSet, type CommonEventName, type CreateContextOptions, type CustomAction, type DefineSchemaConfig, type DirectiveArray, type DirectiveConfig, type DirectiveObject, type ErrorContext, type EventHandler, type EventHandlerArray, type EventModifier, type EventModifiers, type EventName, type ExecutionMetadata, type ExpressionCache, type ExpressionOptions, type ExpressionPlan, type GetPathValue, type InferServicesFromConfig, type InferStateFromConfig, type InferStateType, type LoopConfig, type LoopPlan, type MaterialManifest, type MethodHandler, type MethodsRegistry, type ModelModifiers, type ModelScopeConfig, type NodeId, type OnStateChangeCallback, type PathPlan, type PathSegment, type PreparedNode, type PreparedRegion, type PreparedStats, type PreparedView, type ReactiveAdapter, type RegionKind, type RuntimeBudget, type RuntimeContext, type Schema, type SchemaDocument, type SchemaNode, type SchemaValidationErrorContext, type SchemaVersion, type SetPathValue, type SlotPlan, type VarioDiagnostic, type VarioView, type WritableAction, createAction, isActionOfType };
