# vendor/vario — @variojs 构建产物快照

本目录存放 [vario](../..) 框架四个核心包的**构建产物**（dist），以 pnpm workspace 包的形式接入本仓库，使 CI（GitHub Actions）无需访问本地软链接即可构建 Studio。

## 为什么 vendor

- 本地开发时 `@variojs/*` 通过绝对路径 `link:` 指向本地 vario 仓库，CI 机器上不存在该路径
- npm 上已发布的 `@variojs/*@0.5.12` 等版本**缺少本地未发布特性**（如 schema 的 `_componentize` 显式组件化、`model.default/lazy` 默认值支持），直接用会导致 Studio 的折叠面板动画与默认展开功能失效

## 包含的包

| 包 | 版本 | 说明 |
|---|---|---|
| @variojs/core | 0.1.9 | 指令 VM、表达式系统、运行时上下文 |
| @variojs/schema | 0.1.6 | Schema DSL 定义、校验、转换 |
| @variojs/types | 0.0.7 | TypeScript 类型定义 |
| @variojs/vue | 0.5.12 | Vue 3 渲染器（含本地未发布改动） |

## 更新方式

在本地 vario 仓库构建后，回到本仓库执行：

```bash
pnpm build   # 在 vario 仓库
cd vario-echarts
scripts/sync-vario-vendor.sh          # 默认路径 ../vario 相对本仓库上级
scripts/sync-vario-vendor.sh /path/to/vario  # 或显式指定
pnpm install
```

然后提交 vendor 变更。

## 本地开发提示

接入 vendor 后，Studio 消费的是 vendor 里的 dist 快照。若需实时调试 vario 源码，可临时把 `apps/studio/package.json` 中 `@variojs/*` 的 `workspace:*` 改回 `link:/path/to/vario/packages/vario-xxx`，调试完再改回并执行 `pnpm install`。
