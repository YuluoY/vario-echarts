# CLI 工具文档

## 安装

CLI 工具已包含在 monorepo 中，无需单独安装。

```bash
# 在项目根目录
pnpm install

# 使用 CLI
pnpm cli <command> [options]
```

## 命令列表

### `fetch` - 获取基础数据

获取 ECharts 基础数据（option 大纲 + type 定义）。

```bash
pnpm cli fetch [options]
```

**选项**:

| 选项 | 简写 | 说明 | 默认值 |
|------|------|------|--------|
| `--force` | `-f` | 强制更新，忽略缓存 | `false` |
| `--locale` | `-l` | 数据语言（zh-CN 或 en-US） | `zh-CN` |
| `--concurrency` | `-c` | 并发数 | `6` |
| `--compress` | `-z` | 压缩模式 (none/zip/brotli/buffer) | `none` |
| `--format` | `-F` | 输出格式 (cjs/mjs/json) | `mjs` |
| `--output` | `-o` | 输出目录 | `data/base` |
| `--cache` | | 缓存目录 | `data/.cache` |

**示例**:

```bash
# 基础获取（使用缓存）
pnpm cli fetch

# 强制更新
pnpm cli fetch --force

# 获取英文数据
pnpm cli fetch --locale en-US

# 使用 zip 压缩
pnpm cli fetch --compress zip

# 指定并发数
pnpm cli fetch --concurrency 10

# 输出到指定目录
pnpm cli fetch --output ./my-data
```

### `fetch --all` - 批量获取所有选项

获取所有 ECharts 选项的详细信息。

```bash
pnpm cli fetch --all [options]
```

**选项**:

| 选项 | 简写 | 说明 | 默认值 |
|------|------|------|--------|
| `--force` | `-f` | 强制更新 | `false` |
| `--concurrency` | `-c` | 并发数 | `6` |
| `--compress` | `-z` | 压缩模式 | `none` |
| `--include` | `-i` | 仅包含指定选项（逗号分隔） | - |
| `--exclude` | `-e` | 排除指定选项（逗号分隔） | - |
| `--filter` | | 过滤模式 (global/box/regular) | - |

**示例**:

```bash
# 获取所有选项
pnpm cli fetch --all

# 仅获取指定选项
pnpm cli fetch --all --include title,legend,series-line

# 排除某些选项
pnpm cli fetch --all --exclude animation,aria

# 仅获取常规选项（排除 global 和 box）
pnpm cli fetch --all --filter regular
```

### `fetch -k <key>` - 获取单个选项

获取指定选项的详细信息。

```bash
pnpm cli fetch -k <option-key> [options]
```

**参数**:

- `option-key`: 选项名称，如 `title`, `series-line`, `dataZoom-slider`

**选项**:

| 选项 | 简写 | 说明 | 默认值 |
|------|------|------|--------|
| `--force` | `-f` | 强制更新 | `false` |
| `--output` | `-o` | 输出文件路径 | - |

**示例**:

```bash
# 获取 title 选项
pnpm cli fetch -k title

# 获取 series-line 选项
pnpm cli fetch -k series-line

# 获取 dataZoom-slider 选项（嵌套选项）
pnpm cli fetch -k dataZoom-slider

# 输出到文件
pnpm cli fetch -k title --output ./title.json
```

### `check-update` - 检查更新

检查 ECharts 官方数据是否有更新。

```bash
pnpm cli check-update [options]
```

**选项**:

| 选项 | 简写 | 说明 |
|------|------|------|
| `--json` | `-j` | 以 JSON 格式输出 |

**示例**:

```bash
# 检查更新
pnpm cli check-update

# JSON 输出
pnpm cli check-update --json
```

**输出示例**:

```
✓ 本地版本: 5.4.3
✓ 远程版本: 5.5.0
✓ 发现更新!

新增选项 (3):
  - series-custom3D
  - globe
  - map3D

修改选项 (12):
  - title
  - legend
  - series-line
  ...

建议运行: pnpm cli fetch --force
```

### `clean` - 清理缓存

清理本地缓存数据。

```bash
pnpm cli clean [options]
```

**选项**:

| 选项 | 说明 |
|------|------|
| `--cache` | 仅清理缓存目录 |
| `--base` | 仅清理 base 目录 |
| `--all` | 清理所有数据 |

**示例**:

```bash
# 清理缓存
pnpm cli clean --cache

# 清理所有数据
pnpm cli clean --all
```

### `list` - 列出可用选项

列出所有可用的 ECharts 选项。

```bash
pnpm cli list [options]
```

**选项**:

| 选项 | 简写 | 说明 |
|------|------|------|
| `--filter` | `-f` | 过滤模式 |
| `--json` | `-j` | JSON 格式输出 |
| `--count` | `-c` | 仅显示数量 |

**示例**:

```bash
# 列出所有选项
pnpm cli list

# 仅列出常规选项
pnpm cli list --filter regular

# JSON 格式
pnpm cli list --json

# 仅显示数量
pnpm cli list --count
```

### `convert` - 转换为 Vario Schema

将 ECharts 选项数据转换为 Vario Schema 格式。

```bash
pnpm cli convert [options]
```

**选项**:

| 选项 | 简写 | 说明 | 默认值 |
|------|------|------|--------|
| `--base` | `-b` | 基础数据目录 | `data/base` |
| `--output` | `-o` | 输出目录 | `output` |
| `--keys` | `-k` | 指定要转换的选项（空格分隔） | 全部 |
| `--locale` | `-l` | 语言（zh-CN 或 en-US） | `zh-CN` |
| `--translate` | | 启用 DeepSeek API 翻译 | `false` |
| `--api-key` | | DeepSeek API 密钥 | 内置密钥 |
| `--output-mode` | | 输出模式（folder/flat） | `folder` |
| `--i18n` | | 生成国际化文件 | `false` |
| `--i18n-langs` | | 国际化语言列表 | `zh-CN en-US` |

**输出模式说明**:

- `folder`: 按文件夹结构输出，如 `output/series/line/index.mjs`
- `flat`: 扁平化输出，如 `output/series-line.mjs`

**示例**:

```bash
# 转换所有选项（使用中文）
pnpm cli convert

# 转换指定选项
pnpm cli convert --keys title legend series-line

# 使用英文 locale
pnpm cli convert --locale en-US

# 启用自动翻译（需要先获取字段名翻译）
pnpm cli convert --translate

# 扁平化输出
pnpm cli convert --output-mode flat

# 生成国际化文件
pnpm cli convert --i18n --i18n-langs zh-CN en-US ja-JP

# 完整示例：转换并生成国际化
pnpm cli convert --locale zh-CN --i18n --output ./my-schemas
```

**工作流程**:

1. 加载 `data/base` 中的基础数据（option.mjs + type.mjs）
2. 加载 `data/base/options/{locale}/` 中的选项详情（含 desc 描述）
3. 使用 `SchemaGenerator` 生成 Vario Schema
4. 如果启用翻译，调用 DeepSeek API 翻译字段名
5. 输出到指定目录

**注意事项**:

- 转换前需要先运行 `pnpm cli fetch` 获取基础数据
- 如需选项描述，需要先运行 `pnpm cli fetch --all --locale zh-CN` 获取详情
- 翻译功能需要有效的 DeepSeek API 密钥

## 配置文件

CLI 支持通过配置文件设置默认选项。

### 配置文件位置

1. `echarts-fetcher.config.js` (项目根目录)
2. `.echarts-fetcherrc` (项目根目录)
3. `~/.echarts-fetcherrc` (用户主目录)

### 配置格式

```javascript
// echarts-fetcher.config.js
module.exports = {
  // 数据源
  source: 'official',
  
  // 缓存配置
  cache: {
    enabled: true,
    dir: './data/.cache',
  },
  
  // 并发配置
  concurrency: 8,
  
  // 重试配置
  retries: 3,
  retryDelay: 1000,
  
  // 超时配置
  timeout: 30000,
  
  // 输出配置
  output: {
    dir: './data/base',
    format: 'mjs',
    compress: 'none',
  }
};
```

## 环境变量

CLI 支持通过环境变量配置：

| 变量 | 说明 | 示例 |
|------|------|------|
| `ECHARTS_FETCHER_CACHE_DIR` | 缓存目录 | `./data/.cache` |
| `ECHARTS_FETCHER_CONCURRENCY` | 并发数 | `10` |
| `ECHARTS_FETCHER_TIMEOUT` | 超时时间 | `60000` |
| `ECHARTS_FETCHER_RETRY_COUNT` | 重试次数 | `5` |
| `ECHARTS_FETCHER_COMPRESS` | 压缩模式 | `zip` |
| `HTTP_PROXY` | HTTP 代理 | `http://proxy:8080` |
| `HTTPS_PROXY` | HTTPS 代理 | `https://proxy:8080` |

## 使用示例

### 完整工作流

```bash
# 1. 检查更新
pnpm cli check-update

# 2. 获取基础数据
pnpm cli fetch

# 3. 批量获取所有选项详情
pnpm cli fetch --all --concurrency 8 --compress zip

# 4. 验证数据
pnpm cli list --count
```

### CI/CD 集成

```yaml
# .github/workflows/update-echarts.yml
name: Update ECharts Data

on:
  schedule:
    - cron: '0 0 * * 0'  # 每周日
  workflow_dispatch:

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Check updates
        id: check
        run: |
          pnpm cli check-update --json > update-info.json
          echo "has_update=$(jq '.hasUpdate' update-info.json)" >> $GITHUB_OUTPUT
      
      - name: Update data
        if: steps.check.outputs.has_update == 'true'
        run: |
          pnpm cli fetch --force
          pnpm cli fetch --all --compress brotli
      
      - name: Commit changes
        if: steps.check.outputs.has_update == 'true'
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add data/
          git commit -m "chore: update echarts data"
          git push
```

### 脚本集成

```javascript
// scripts/update-echarts.js
const { execSync } = require('child_process');

function updateECharts() {
  try {
    // 检查更新
    const result = execSync('pnpm cli check-update --json', { encoding: 'utf8' });
    const updateInfo = JSON.parse(result);
    
    if (updateInfo.hasUpdate) {
      console.log(`发现更新: ${updateInfo.remoteVersion}`);
      
      // 执行更新
      execSync('pnpm cli fetch --force', { stdio: 'inherit' });
      execSync('pnpm cli fetch --all --compress zip', { stdio: 'inherit' });
      
      console.log('更新完成!');
    } else {
      console.log('已是最新版本');
    }
  } catch (error) {
    console.error('更新失败:', error);
    process.exit(1);
  }
}

updateECharts();
```

## 故障排查

### 网络超时

```bash
# 增加超时时间
pnpm cli fetch --timeout 60000

# 减少并发数
pnpm cli fetch --concurrency 3
```

### 缓存损坏

```bash
# 清理缓存并重新获取
pnpm cli clean --cache
pnpm cli fetch --force
```

### 内存不足

```bash
# 使用流式处理（AsyncGenerator）
# fetch --all 会自动流式处理，无需担心内存

# 或分批次获取
pnpm cli fetch -k title
pnpm cli fetch -k legend
...
```

### 权限错误

```bash
# 检查目录权限
ls -la data/

# 修复权限
chmod -R 755 data/

# 或使用 sudo（不推荐）
sudo pnpm cli fetch
```

## 高级用法

### 自定义数据源

```javascript
// echarts-fetcher.config.js
module.exports = {
  source: {
    name: 'mirror-cn',
    baseUrl: 'https://echarts.apache.org.cn/zh',
    optionOutlinePath: '/documents/option-parts/option-outline.js',
    optionTypesPath: '/documents/option-parts/option.js',
    optionDetailPath: (key) => `/documents/option-parts/option.${key}.js`
  }
};
```

### 代理配置

```bash
# 使用环境变量
export HTTP_PROXY=http://proxy.company.com:8080
export HTTPS_PROXY=http://proxy.company.com:8080
pnpm cli fetch

# 或在配置文件中
// echarts-fetcher.config.js
module.exports = {
  proxy: 'http://proxy.company.com:8080'
};
```

---

**版本**: 1.0.0
**更新日期**: 2025-01-31
