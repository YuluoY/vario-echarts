# Vario Vue ECharts

基于 Apache ECharts 的 Vue 3 可视化配置工具库。

## 📦 项目简介

这是一个为 ECharts 提供智能配置和可视化编辑能力的 monorepo 项目，包含：

- **@vario-echarts/core** - 核心 Schema 生成器
- **@vario-echarts/fetcher** - ECharts 数据获取器
- **@vario-echarts/cli** - 命令行工具
- **@vario-echarts/smart-components** - 智能 Vue 组件库
- **Studio** - 可视化配置工作台

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 构建所有包

```bash
pnpm -r build
```

### 启动 Studio 开发服务器

```bash
cd apps/studio
pnpm dev
```

### 使用 CLI 工具

```bash
# 生成 Schema
pnpm --filter @vario-echarts/cli generate

# 查看帮助
pnpm --filter @vario-echarts/cli cli --help
```

## 📖 文档

- **[项目概览](./docs/01-项目概览.md)** - 项目详细介绍和功能说明

### API 文档
- [CLI 工具文档](./docs/api/01-CLI工具文档.md)
- [数据获取器 API](./docs/api/02-数据获取器API.md)

### 架构文档
- [系统架构](./docs/architecture/01-系统架构.md)
- [架构概览](./docs/architecture/02-架构概览.md)
- [智能组件指南](./docs/architecture/03-智能组件指南.md)

### 开发指南
- [国际化指南](./docs/guides/01-国际化指南.md)
- [翻译工作流程](./docs/guides/02-翻译工作流程.md)
- [生成器使用指南](./docs/guides/03-生成器使用指南.md)
- [CLI 选项指南](./docs/guides/04-CLI选项指南.md)
- [表单布局组合式函数指南](./docs/guides/05-表单布局组合式函数指南.md)

### 版本历史
- [更新日志](./docs/changelog/01-更新日志.md)
- [v1.3.0 版本总结](./docs/changelog/02-v1.3.0版本总结.md)
- [v1.2.0 版本总结](./docs/changelog/03-v1.2.0版本总结.md)

## 🏗️ 项目结构

```
vario-vue-echarts/
├── apps/
│   └── studio/              # 可视化配置工作台
├── packages/
│   ├── cli/                 # 命令行工具
│   ├── core/                # 核心 Schema 生成器
│   ├── fetcher/             # ECharts 数据获取器
│   └── smart-components/    # 智能 Vue 组件库
├── data/                    # ECharts 数据和翻译
│   ├── base/                # 基础数据
│   │   ├── option.mjs       # 中文选项大纲
│   │   ├── type.mjs         # 类型定义
│   │   └── options/         # 详细选项数据
│   │       ├── zh-CN/       # 中文选项
│   │       └── en-US/       # 英文选项
│   ├── i18n/                # 国际化资源
│   └── translations.json    # 翻译映射
├── docs/                    # 项目文档
├── output/                  # 生成的 Schema 输出
└── scripts/                 # 构建和部署脚本
```

## ✨ 主要功能

### 1. 智能 Schema 生成
- 从 ECharts 官方文档自动生成可配置 Schema
- 支持中英文双语
- 智能类型推断和 UI 控件映射

### 2. 可视化配置工作台
- 实时预览 ECharts 图表
- 表单化配置界面
- Schema 预览和导出

### 3. 智能组件库
- `SmartStyleSelect` - 样式编辑器（颜色、字体、边框等）
- `SmartColorPicker` - 渐变色/纯色选择器
- `SmartLineStyleEditor` - 线条样式编辑器
- 表单自动布局和国际化

### 4. 多语言支持
- 中文（简体）
- 英文
- 可扩展的 i18n 架构

## 🔧 开发

### 构建单个包

```bash
# 构建 CLI
pnpm --filter @vario-echarts/cli build

# 构建 Core
pnpm --filter @vario-echarts/core build
```

### 运行测试

```bash
pnpm test
```

## 📝 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
