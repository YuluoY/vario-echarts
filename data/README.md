# Data 目录结构说明

## 📁 目录结构

```
data/
├── base/                    # ECharts 基础数据
│   ├── option.mjs           # 选项大纲（中文）
│   ├── type.mjs             # 类型定义
│   └── options/             # 详细选项数据（按语言分类）
│       ├── zh-CN/           # 中文选项（48 个文件）
│       └── en-US/           # 英文选项（48 个文件）
├── i18n/                    # 国际化资源
│   ├── zh-CN.json           # 中文 UI 翻译
│   └── en-US.json           # 英文 UI 翻译
└── translations.json        # 字段翻译映射表
```

## 📝 文件说明

### base/option.mjs 和 type.mjs
- 从 ECharts 官方 API 获取的基础数据
- `option.mjs` - 配置项的树形结构大纲
- `type.mjs` - 配置项的类型定义和默认值

### base/options/{locale}/
按语言组织的详细选项数据，每个文件对应一个 ECharts 配置项。

**中文数据** (`zh-CN/`):
- 包含中文的字段描述、参数说明
- 从 `https://echarts.apache.org/zh/documents/option-parts/` 获取

**英文数据** (`en-US/`):
- 包含英文的字段描述、参数说明  
- 从 `https://echarts.apache.org/en/documents/option-parts/` 获取

**文件列表** (每种语言 48 个):
- 轴相关: angleAxis, axisPointer, parallelAxis, radiusAxis, singleAxis, xAxis, yAxis
- 坐标系: calendar, geo, grid, parallel, polar, radar
- 数据: dataset, dataZoom-inside, dataZoom-slider, visualMap-continuous, visualMap-piecewise
- 系列: series-bar, series-line, series-pie 等 (共 23 个)
- 其他: aria, brush, graphic, legend, timeline, title, toolbox, tooltip

### i18n/
UI 界面的国际化翻译文件，用于 Studio 应用。

### translations.json
字段名称的翻译映射表，用于将英文字段名翻译为中文 label。

## 🔧 使用方法

### 下载 ECharts 数据

```bash
# 下载中文数据
pnpm cli fetch --locale zh-CN --all

# 下载英文数据  
pnpm cli fetch --locale en-US --all
```

数据会自动保存到对应的语言目录：
- 中文 → `data/base/options/zh-CN/`
- 英文 → `data/base/options/en-US/`

### 生成 Schema

```bash
# 使用中文描述生成 Schema
pnpm cli convert --locale zh-CN --keys series-line

# 使用英文描述生成 Schema
pnpm cli convert --locale en-US --keys series-line
```

## 📊 缓存目录

CLI 工具会将下载的数据缓存到 `data/.cache` 或 `data/.cache-en` 目录：

```
data/
├── .cache/              # 中文数据缓存
│   ├── option.mjs
│   ├── type.mjs
│   └── options/
│       └── *.mjs
└── .cache-en/           # 英文数据缓存
    ├── option.mjs
    ├── type.mjs
    └── options/
        └── *.mjs
```

缓存可以加速后续的操作，避免重复下载。

## 🔄 目录重组历史

**v1.3.0** (2026-02-02):
- 将 options 数据按语言分类到 `zh-CN/` 和 `en-US/` 子目录
- 修复了缓存路径重复的 `options/options/` 问题
- 更新 CLI 命令支持 `--locale` 参数指定数据语言

**之前的结构**:
```
data/base/options/
├── series-line.mjs      # 中文数据（根目录）
├── series-bar.mjs
└── en-US/               # 英文数据（子目录）
    ├── series-line.mjs
    └── series-bar.mjs
```

**现在的结构**:
```
data/base/options/
├── zh-CN/               # 中文数据
│   ├── series-line.mjs
│   └── series-bar.mjs
└── en-US/               # 英文数据
    ├── series-line.mjs
    └── series-bar.mjs
```

这样的结构更加清晰和对称，便于管理和维护。
