# Core 包 API 文档

`@vario-echarts/core` 是核心处理包，负责数据加载、类型分析和 Schema 生成。

## 安装

```bash
pnpm add @vario-echarts/core
```

## 核心类

### BaseLoader

数据加载器，用于加载 `data/base` 目录中的基础数据。

```typescript
import { BaseLoader } from '@vario-echarts/core';

const loader = new BaseLoader('data/base');
const { option, type } = await loader.load();
```

#### 构造函数

```typescript
constructor(basePath: string)
```

- `basePath`: 基础数据目录路径（包含 option.mjs 和 type.mjs）

#### 方法

##### `load()`

加载基础数据。

```typescript
async load(): Promise<BaseData>
```

**返回值**:

```typescript
interface BaseData {
  option: BaseOptionOutline;  // 选项大纲
  type: BaseTypeTree;         // 类型树
}
```

##### `getOptionKeys(option)`

获取所有选项键名。

```typescript
getOptionKeys(option: BaseOptionOutline): string[]
```

**示例**:

```typescript
const loader = new BaseLoader('data/base');
const { option } = await loader.load();
const keys = loader.getOptionKeys(option);
// ['title', 'legend', 'grid', 'xAxis', 'yAxis', 'series-line', ...]
```

---

### SchemaGenerator

Schema 生成器，将类型树转换为 Vario Schema。

```typescript
import { SchemaGenerator } from '@vario-echarts/core';

const generator = new SchemaGenerator({
  useSmartComponents: true,
  includeSmartMeta: false
});

const schema = generator.generate('title', typeTree, optionDesc);
```

#### 构造函数

```typescript
constructor(options?: GeneratorOptions)
```

**GeneratorOptions**:

```typescript
interface GeneratorOptions {
  /** 使用智能组件（默认 true） */
  useSmartComponents?: boolean;
  /** 添加 _smart 元数据（默认 false） */
  includeSmartMeta?: boolean;
}
```

#### 方法

##### `generate()`

生成单个选项的 Schema。

```typescript
generate(
  optionKey: string,
  typeTree: BaseTypeTree,
  optionDesc?: string,
  optionDetail?: Record<string, any>
): SmartSchemaNode[]
```

**参数**:

- `optionKey`: 选项键名，如 `'title'`、`'series-line'`
- `typeTree`: 类型树数据
- `optionDesc`: 选项描述（可选）
- `optionDetail`: 选项详情数据，用于获取字段描述（可选）

**返回值**: Vario Schema 节点数组

**示例**:

```typescript
const generator = new SchemaGenerator({ useSmartComponents: true });

// 生成 title 的 schema
const titleSchema = generator.generate('title', typeTree, '图表标题配置');

// 生成 series-line 的 schema
const lineSchema = generator.generate('series-line', typeTree);
```

---

### TypeAnalyzer

类型分析器，用于分析字段类型并推断最佳组件。

```typescript
import { TypeAnalyzer, typeAnalyzer } from '@vario-echarts/core';

// 使用单例
const result = typeAnalyzer.analyze(typeNode);

// 或创建新实例
const analyzer = new TypeAnalyzer();
const result = analyzer.analyze(typeNode);
```

#### 方法

##### `analyze()`

分析类型节点。

```typescript
analyze(typeNode: TypeTreeNode): TypeAnalysisResult
```

**TypeAnalysisResult**:

```typescript
interface TypeAnalysisResult {
  rawTypes: string[];           // 原始类型列表
  category: FieldCategory;      // 字段类别
  specialKeywords: string[];    // 特殊关键字
  allowCustom: boolean;         // 是否允许自定义
  propPattern: PropPattern;     // 属性模式
  enumOptions?: string[];       // 枚举选项
}
```

**FieldCategory 枚举**:

```typescript
type FieldCategory = 
  | 'color'     // 颜色
  | 'size'      // 尺寸
  | 'position'  // 位置
  | 'style'     // 样式
  | 'opacity'   // 透明度
  | 'number'    // 数字
  | 'string'    // 字符串
  | 'boolean'   // 布尔
  | 'generic';  // 通用
```

**PropPattern 枚举**:

```typescript
type PropPattern =
  | 'generic'       // 通用
  | 'color-suffix'  // 颜色后缀（*Color）
  | 'border'        // 边框相关
  | 'shadow'        // 阴影相关
  | 'text'          // 文本相关
  | 'font'          // 字体相关
  | 'width'         // 宽度
  | 'height'        // 高度
  | 'position'      // 位置
  | 'type-suffix';  // 类型后缀（*Type）
```

---

## 类型定义

### BaseOptionOutline

选项大纲类型。

```typescript
interface BaseOptionOutline {
  [key: string]: {
    desc?: string;           // 描述
    uiControl?: UIControl;   // UI 控制
    exampleBaseOptions?: any;
  };
}
```

### BaseTypeTree

类型树类型。

```typescript
interface BaseTypeTree {
  prop?: string;
  type?: string | string[];
  default?: any;
  children?: BaseTypeTree[];
  isObject?: boolean;
  isArray?: boolean;
  arrayItemType?: string;
}
```

### TypeTreeNode

类型树节点类型。

```typescript
interface TypeTreeNode {
  prop?: string;              // 属性名
  type?: string | string[];   // 类型
  default?: any;              // 默认值
  desc?: string;              // 描述
  options?: string;           // 可选值（逗号分隔）
  children?: TypeTreeNode[];  // 子节点
  isObject?: boolean;         // 是否对象
  isArray?: boolean;          // 是否数组
  arrayItemType?: string;     // 数组项类型
  uiControl?: UIControl;      // UI 控制
}
```

### SmartSchemaNode

智能 Schema 节点类型。

```typescript
interface SmartSchemaNode {
  type: string;                           // 组件类型
  props?: Record<string, unknown>;        // 组件属性
  model?: string | ModelScopeConfig;      // 双向绑定
  children?: SmartSchemaNode[];           // 子节点
  _smart?: TypeAnalysisResult;            // 智能元数据
  _raw?: {
    label?: string;                       // 原始字段名
    desc?: string;                        // 字段描述
  };
}
```

---

## 工具函数

### 默认值解析

```typescript
import { parseDefaultValue, isSpecialKeyword } from '@vario-echarts/core';

// 解析默认值
const value = parseDefaultValue("'solid'");  // 'solid'
const num = parseDefaultValue('100');        // 100

// 检查特殊关键字
isSpecialKeyword('inherit');     // true
isSpecialKeyword('transparent'); // true
isSpecialKeyword('auto');        // true
```

### 属性模式匹配

```typescript
import { matchPropPattern, inferCategoryByProp } from '@vario-echarts/core';

// 匹配属性模式
matchPropPattern('backgroundColor');  // 'color-suffix'
matchPropPattern('borderWidth');      // 'border'
matchPropPattern('shadowBlur');       // 'shadow'

// 推断字段类别
inferCategoryByProp('color');         // 'color'
inferCategoryByProp('width');         // 'size'
inferCategoryByProp('left');          // 'position'
```

---

## 常量

### 关键字常量

```typescript
import {
  LINE_STYLE_KEYWORDS,
  POSITION_KEYWORDS,
  FONT_WEIGHT_KEYWORDS,
  FONT_STYLE_KEYWORDS
} from '@vario-echarts/core';

LINE_STYLE_KEYWORDS;   // ['solid', 'dashed', 'dotted']
POSITION_KEYWORDS;     // ['left', 'right', 'center', 'top', 'bottom', 'middle']
FONT_WEIGHT_KEYWORDS;  // ['normal', 'bold', 'bolder', 'lighter', ...]
FONT_STYLE_KEYWORDS;   // ['normal', 'italic', 'oblique']
```

---

## 使用示例

### 完整工作流

```typescript
import { BaseLoader, SchemaGenerator } from '@vario-echarts/core';

async function generateSchemas() {
  // 1. 加载基础数据
  const loader = new BaseLoader('data/base');
  const { option, type } = await loader.load();
  
  // 2. 获取所有选项键
  const keys = loader.getOptionKeys(option);
  console.log(`共 ${keys.length} 个选项`);
  
  // 3. 创建生成器
  const generator = new SchemaGenerator({
    useSmartComponents: true
  });
  
  // 4. 生成 Schema
  const schemas: Record<string, any> = {};
  for (const key of keys) {
    schemas[key] = generator.generate(key, type, option[key]?.desc);
  }
  
  return schemas;
}
```

### 自定义组件映射

```typescript
const generator = new SchemaGenerator({
  useSmartComponents: true,
  includeSmartMeta: true  // 包含元数据用于自定义处理
});

const schema = generator.generate('title', type);

// 根据 _smart 元数据自定义处理
function customizeSchema(node: SmartSchemaNode) {
  if (node._smart?.category === 'color') {
    // 使用自定义颜色组件
    node.type = 'MyColorPicker';
  }
  
  if (node.children) {
    node.children.forEach(customizeSchema);
  }
  
  return node;
}
```

---

## 与其他包的关系

```
@vario-echarts/fetcher  ──获取数据──▶  data/base/
                                           │
                                           ▼
@vario-echarts/core     ◀──加载数据──  BaseLoader
        │
        │ SchemaGenerator
        ▼
    Vario Schema        ──渲染──▶  @variojs/vue
                                           │
                                           ▼
                               @vario-echarts/smart-components
```

---

**版本**: 1.0.0  
**更新日期**: 2026-02-04
