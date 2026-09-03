# Vario-ECharts — 项目指令

> 迁移说明：本文件由 `.github/copilot-instructions.md` 迁移而来，统一收敛到 `.github/instructions/*.instructions.md`。

## 项目概述

将 Apache ECharts 配置项文档转换为 Vario Schema 的工具链 monorepo，同时包含可视化配置工作台 Studio。

```
ECharts 官方文档
   ↓ (fetch/爬取)
data/base/          — 原始 ECharts 配置数据（JSON）
   ↓ (@vario-echarts/core)
output/             — 生成的 Vario Schema 文件（.mjs）
   ↓
Studio / smart-components  — 可视化使用生成的 Schema
```

## 包结构

| 包/目录 | 职责 |
|---|---|
| `packages/core` | `BaseLoader`（加载 base/ 数据）、`TypeAnalyzer`（智能类型分析）、`SchemaGenerator`（生成 Vario Schema） |
| `packages/fetcher` | `EChartsFetcher`：并发下载、缓存管理（`data/.cache`）、压缩/解压 |
| `packages/cli` | CLI 入口：`fetch`、`fetch --all`、`fetch --force`、`convert` |
| `packages/smart-components` | 基于生成 Schema 的 Vue 3 智能组件库 |
| `apps/studio` | Vite + Vue 3 可视化配置工作台 |
| `data/base/` | ECharts 爬取的原始数据（不手动修改） |
| `output/` | 由 CLI 生成的 Schema（不手动修改） |
| `data/translations.json` | 配置项中文翻译表（手动维护） |

## 关键开发命令

```bash
pnpm install          # 安装依赖（postinstall 自动构建 core + fetcher）
pnpm dev              # 启动 Studio 开发服务器
pnpm build            # 构建所有包（-r 递归）

# CLI 工作流（生成/更新 output/）
pnpm fetch            # 增量获取 ECharts 数据到 data/base/
pnpm fetch:all        # 强制全量重新获取
pnpm convert          # 将 data/base/ 转换为 output/ 的 Vario Schema

pnpm clean            # 清理 dist、node_modules、data/.cache
pnpm clean:cache      # 仅清理爬取缓存
```

## 数据流与约定

- `data/base/` 存放爬取的原始 JSON，按 ECharts 配置项分目录
- `output/` 中每个配置项对应一个 `.mjs` 文件，由 `convert` 命令自动生成，**不要手动编辑**
- 翻译工作流：修改 `data/translations.json`，重新运行 `pnpm convert` 再生成多语言 Schema
- `postinstall` 会自动构建 `core` 和 `fetcher`，确保 CLI 可用

## 构建约定

- 所有包使用 `pnpm -r build`（递归），顺序由 `pnpm-workspace.yaml` 隐式管理
- Studio 基于 Vite，构建产物在 `apps/studio/dist/`
- 包使用 TypeScript + tsup 输出 ESM

## 关键文件参考

- `docs/architecture/01-系统架构.md` — 三层架构详细说明
- `docs/guides/02-翻译工作流程.md` — 国际化操作流程
- `packages/core/src/` — SchemaGenerator 实现
- `packages/fetcher/src/` — EChartsFetcher 实现
- `apps/studio/src/` — Studio 可视化工作台
