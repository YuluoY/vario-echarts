# 多语言 Schema 生成说明

## 📝 工作原理

### 1. 描述字段（desc）
- **来源**：直接从 `data/base/options/{locale}/` 目录获取
- **无需翻译**：desc 字段已经是对应语言的完整 HTML 描述
- **示例**：
  ```bash
  # 使用中文描述
  pnpm cli convert --locale zh-CN --keys series-line
  # desc 来自: data/base/options/zh-CN/series-line.mjs
  
  # 使用英文描述
  pnpm cli convert --locale en-US --keys series-line
  # desc 来自: data/base/options/en-US/series-line.mjs
  ```

### 2. 字段名翻译（label/placeholder）
- **中文 locale (`zh-CN`)**：
  - 原始字段名是英文（如 `lineStyle`）
  - 需要翻译为中文（如 `线条样式`）
  - 使用 `data/i18n/zh-CN.json` 或 `data/translations.json`
  
- **英文 locale (`en-US`)**：
  - 原始字段名已经是英文（如 `lineStyle`）
  - **不需要翻译**，直接使用
  - 可以选择性地转换为友好的标签（如 `Line Style`）

### 3. 完整示例

#### 生成中文 Schema
```bash
pnpm cli convert --locale zh-CN --keys series-line
```

生成的 Schema：
```javascript
{
  type: 'ElInput',
  props: {
    placeholder: '线条样式' // 翻译自 'lineStyle'
  },
  _raw: {
    label: '线条样式',      // 翻译自 'lineStyle'
    desc: '<p>线条的样式...</p>' // 来自 zh-CN/series-line.mjs
  }
}
```

#### 生成英文 Schema
```bash
pnpm cli convert --locale en-US --keys series-line
```

生成的 Schema：
```javascript
{
  type: 'ElInput',
  props: {
    placeholder: 'lineStyle' // 保持英文
  },
  _raw: {
    label: 'lineStyle',      // 保持英文
    desc: '<p>Style of the line...</p>' // 来自 en-US/series-line.mjs
  }
}
```

## 🔧 实现细节

### Core 包（生成器）
```typescript
// vario-generator.ts
if (fieldDetail && fieldDetail.desc) {
  // 保留原始 HTML 内容（已经是对应 locale 的描述，不需要翻译）
  node._raw.desc = fieldDetail.desc;
}
```

### CLI 包（转换命令）
```typescript
// index.ts

// 1. 根据 locale 加载对应语言的 options
const optionsDir = resolve(basePath, 'options', locale);

// 2. 只在中文 locale 时初始化翻译器
if (locale === 'zh-CN') {
  translator = new FieldTranslator(dictPath, options.apiKey);
  // 加载 zh-CN.json 翻译
}

// 3. 生成 Schema
const schema = generator.generate(key, type, option[key]?.desc, optionDetails[key]);

// 4. 翻译字段名（仅中文）
if (translator) {
  translateSchema(schema, translator);
}
```

### translateSchema 函数
```typescript
/**
 * 翻译 Schema 中的字段名和标签
 * 注意：_raw.desc 不需要翻译，因为已经从对应 locale 的 options 文件中获取
 */
function translateSchema(schema: any, translator: FieldTranslator) {
  // 翻译 title, placeholder, label
  // 不翻译 desc（直接使用本地数据）
}
```

## 📊 数据流程图

```
用户执行命令
    ↓
pnpm cli convert --locale {locale} --keys series-line
    ↓
加载基础数据
    ├── data/base/option.mjs  (选项结构)
    └── data/base/type.mjs    (类型定义)
    ↓
加载详细描述（根据 locale）
    ├── locale=zh-CN → data/base/options/zh-CN/series-line.mjs
    └── locale=en-US → data/base/options/en-US/series-line.mjs
    ↓
生成 Schema
    └── _raw.desc = optionDetail[field].desc (已是对应语言)
    ↓
翻译字段名（仅中文）
    ├── locale=zh-CN → 翻译 label/placeholder
    └── locale=en-US → 不翻译（保持英文）
    ↓
输出 Schema 文件
```

## ✅ 优势

1. **性能提升**：desc 不需要翻译，减少了翻译 API 调用
2. **质量保证**：使用官方的多语言描述，更准确
3. **灵活性**：支持任意语言扩展（只需添加新的 locale 目录）
4. **清晰分离**：描述和字段名的处理逻辑分离

## 🚀 使用建议

### 生成多语言 Schema
```bash
# 中文 Schema（带翻译的字段名 + 中文描述）
pnpm cli convert --locale zh-CN --keys series-line series-bar

# 英文 Schema（英文字段名 + 英文描述）
pnpm cli convert --locale en-US --keys series-line series-bar
```

### 目录结构
```
output/
├── zh-CN/               # 中文 Schema
│   ├── series/
│   │   ├── line/
│   │   │   └── index.mjs
│   │   └── bar/
│   │       └── index.mjs
└── en-US/               # 英文 Schema
    └── series/
        ├── line/
        │   └── index.mjs
        └── bar/
            └── index.mjs
```
