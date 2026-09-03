# CLI 配置选项说明

## convert 命令新增选项

### 1. 输出模式 (`--output-mode`)

控制生成的 Schema 文件的目录结构。

#### folder 模式（默认）

文件夹层级结构，每个层级一个文件夹，内部包含 `index.mjs`：

```bash
pnpm cli convert --output-mode folder

# 输出结构：
output/
├── series/
│   ├── line/
│   │   └── index.mjs
│   ├── bar/
│   │   └── index.mjs
│   └── pie/
│       └── index.mjs
├── xAxis/
│   └── index.mjs
└── yAxis/
    └── index.mjs
```

**使用场景**：
- ✅ 适合大型项目，目录结构清晰
- ✅ 便于按需导入（tree-shaking）
- ✅ 符合现代模块化最佳实践

**导入示例**：
```typescript
import seriesLineSchema from './output/series/line/index.mjs';
import xAxisSchema from './output/xAxis/index.mjs';
```

---

#### flat 模式

扁平文件名结构，所有文件在同一目录下，文件名包含完整层级：

```bash
pnpm cli convert --output-mode flat

# 输出结构：
output/
├── series-line.mjs
├── series-bar.mjs
├── series-pie.mjs
├── xAxis.mjs
└── yAxis.mjs
```

**使用场景**：
- ✅ 适合小型项目或快速原型
- ✅ 文件列表一目了然
- ✅ 便于批量操作（glob 匹配）

**导入示例**：
```typescript
import seriesLineSchema from './output/series-line.mjs';
import xAxisSchema from './output/xAxis.mjs';
```

---

### 2. 国际化文件生成 (`--i18n`)

自动生成多语言国际化文件（基于翻译词表）。

#### 基础用法

```bash
# 生成默认语言（中英文）
pnpm cli convert --translate --i18n

# 输出：
data/i18n/
├── zh-CN.json  # 中文翻译（692 条）
└── en-US.json  # 英文标签（692 条）
```

#### 自定义语言

```bash
# 指定多个语言
pnpm cli convert --translate --i18n --i18n-langs zh-CN en-US ja-JP ko-KR

# 输出：
data/i18n/
├── zh-CN.json  # 中文
├── en-US.json  # 英文
├── ja-JP.json  # 日文（暂时使用英文，未来扩展）
└── ko-KR.json  # 韩文（暂时使用英文，未来扩展）
```

**支持的语言代码**：
- `zh-CN` - 简体中文（DeepSeek 翻译）
- `en-US` - 英文（驼峰转空格）
- `ja-JP` - 日文（预留）
- `ko-KR` - 韩文（预留）
- 其他语言代码 - 使用英文

**i18n 文件格式**：
```json
{
  "backgroundColor": "背景颜色",
  "textBorderColor": "文本边框颜色",
  "shadowBlur": "阴影模糊度",
  "visualMap": "视觉映射"
}
```

**使用示例**：
```vue
<script setup>
import zhCN from '@/data/i18n/zh-CN.json';
import enUS from '@/data/i18n/en-US.json';
import { useI18nFormLayout } from '@/composables/useSchemaFormLayout';

const locale = ref('zh-CN');
const i18n = computed(() => locale.value === 'zh-CN' ? zhCN : enUS);

const { formSchema } = useI18nFormLayout(schema, i18n);
</script>
```

---

### 3. 组件升级 (`SmartColorInputV2`)

新版本默认使用 `SmartColorInputV2` 组件（支持渐变）。

**生成的 Schema**：
```javascript
{
  type: 'SmartColorInputV2',  // 新版组件
  props: {
    placeholder: 'backgroundColor',
    keywords: ['transparent', 'inherit', 'none'],
    pickerType: 'chrome'
  },
  model: {
    path: 'backgroundColor',
    default: '#ffffff'
  }
}
```

**功能对比**：

| 功能 | SmartColorInput | SmartColorInputV2 |
|------|----------------|-------------------|
| 纯色选择 | ✅ | ✅ |
| HEX/RGB/RGBA | ✅ | ✅ |
| 关键字 | ✅ | ✅ |
| 线性渐变 | ❌ | ✅ |
| 径向渐变 | ❌ | ✅ |
| 渐变预览 | ❌ | ✅ |
| 模式切换 | ❌ | ✅ |

---

## 完整命令示例

### 示例 1: 文件夹模式 + 国际化

```bash
pnpm cli convert \
  --base data/base \
  --output output \
  --translate \
  --i18n \
  --output-mode folder

# 输出：
# output/series/line/index.mjs
# output/xAxis/index.mjs
# data/i18n/zh-CN.json
# data/i18n/en-US.json
```

### 示例 2: 扁平模式 + 多语言

```bash
pnpm cli convert \
  --output-mode flat \
  --translate \
  --i18n \
  --i18n-langs zh-CN en-US ja-JP

# 输出：
# output/series-line.mjs
# output/xAxis.mjs
# data/i18n/zh-CN.json
# data/i18n/en-US.json
# data/i18n/ja-JP.json
```

### 示例 3: 仅转换特定配置项

```bash
pnpm cli convert \
  --keys series-line xAxis yAxis \
  --output-mode flat \
  --translate \
  --i18n

# 仅输出：
# output/series-line.mjs
# output/xAxis.mjs
# output/yAxis.mjs
# data/i18n/zh-CN.json
# data/i18n/en-US.json
```

### 示例 4: 快速测试（无翻译）

```bash
pnpm cli convert \
  --keys series-line \
  --output-mode flat

# 输出：
# output/series-line.mjs（未翻译，使用原始字段名）
```

---

## 选项对照表

| 选项 | 短选项 | 默认值 | 说明 |
|------|--------|--------|------|
| `--base` | `-b` | `data/base` | 基础数据目录 |
| `--output` | `-o` | `output` | 输出目录 |
| `--keys` | `-k` | 所有 | 要转换的配置项 |
| `--translate` | - | `false` | 启用 DeepSeek 翻译 |
| `--api-key` | - | `sk-xxx` | DeepSeek API Key |
| `--output-mode` | - | `folder` | 输出模式（folder/flat） |
| `--i18n` | - | `false` | 生成国际化文件 |
| `--i18n-langs` | - | `['zh-CN', 'en-US']` | 国际化语言列表 |

---

## 最佳实践

### 开发阶段
```bash
# 快速测试，扁平模式，无翻译
pnpm cli convert --output-mode flat --keys series-line
```

### 生产构建
```bash
# 完整转换，文件夹模式，翻译 + 国际化
pnpm cli convert --translate --i18n --output-mode folder
```

### CI/CD 流程
```bash
# 自动化构建，指定 API Key
pnpm cli convert \
  --translate \
  --i18n \
  --api-key $DEEPSEEK_API_KEY \
  --output-mode folder \
  --i18n-langs zh-CN en-US ja-JP
```

---

## 升级指南

### 从旧版 CLI 升级

**v1.2.0 → v1.3.0**：

```bash
# 旧版（v1.2.0）
pnpm cli convert --translate

# 新版（v1.3.0）
pnpm cli convert \
  --translate \
  --output-mode folder \  # 明确指定输出模式
  --i18n                  # 启用国际化文件生成
```

**变更说明**：
1. ✅ 默认使用 `SmartColorInputV2`（自动）
2. ✅ 默认输出模式为 `folder`（兼容旧版）
3. ⚠️  国际化文件需要手动启用 `--i18n`
4. ⚠️  多语言需要通过 `--i18n-langs` 指定

---

## 常见问题

### Q1: 如何切换回旧版颜色选择器？

A: 目前自动使用 `SmartColorInputV2`。如需使用旧版，可以在生成后手动替换组件类型。

### Q2: flat 模式和 folder 模式如何选择？

A: 
- 项目规模 < 20 个配置项 → `flat` 模式
- 项目规模 ≥ 20 个配置项 → `folder` 模式
- 需要 tree-shaking → `folder` 模式

### Q3: 国际化文件在哪里？

A: 
- 翻译词表: `data/translations.json`
- 国际化文件: `data/i18n/zh-CN.json`, `data/i18n/en-US.json`

### Q4: 如何添加新语言？

A: 
```bash
# 1. 添加语言代码
pnpm cli convert --translate --i18n --i18n-langs zh-CN en-US fr-FR

# 2. 在 translator.ts 中添加翻译逻辑
case 'fr-FR':
  // TODO: 添加法语翻译
  break;
```

---

## 相关文档

- [useSchemaFormLayout 指南](./composables/useSchemaFormLayout-guide.md)
- [SmartColorInputV2 使用指南](./v1.3.0-summary.md#smartcolorinputv2-组件)
- [v1.3.0 功能总结](./v1.3.0-summary.md)
