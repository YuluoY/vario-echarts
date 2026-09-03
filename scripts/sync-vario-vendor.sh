#!/usr/bin/env bash
# 同步本地 vario 构建产物到 vendor/
# 用法：先在 vario 仓库执行 pnpm build，再回本仓库执行 scripts/sync-vario-vendor.sh [vario仓库路径]
set -euo pipefail

VARIO_ROOT="${1:-$(cd "$(dirname "$0")/../../.." && pwd)/vario}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

if [ ! -d "$VARIO_ROOT/packages/vario-vue/dist" ]; then
  echo "❌ 未找到 vario 构建产物：$VARIO_ROOT/packages/vario-vue/dist"
  echo "   请先在 vario 仓库执行 pnpm build，或传入正确路径：sync-vario-vendor.sh /path/to/vario"
  exit 1
fi

for pkg in vario-core vario-schema vario-types vario-vue; do
  src="$VARIO_ROOT/packages/$pkg"
  dest="$ROOT/vendor/vario/$pkg"
  mkdir -p "$dest"
  rm -rf "$dest/dist"
  cp -R "$src/dist" "$dest/dist"
  # 同步版本号与依赖声明（保留精简清单结构）
  node -e "
    const fs = require('fs');
    const src = JSON.parse(fs.readFileSync('$src/package.json', 'utf8'));
    const destPath = '$dest/package.json';
    const dest = JSON.parse(fs.readFileSync(destPath, 'utf8'));
    dest.version = src.version;
    for (const k of ['dependencies', 'peerDependencies', 'exports']) {
      if (src[k]) dest[k] = src[k]; else delete dest[k];
    }
    fs.writeFileSync(destPath, JSON.stringify(dest, null, 2) + '\n');
  "
  echo "✓ $pkg -> vendor/vario/$pkg ($(node -p "require('$dest/package.json').version"))"
done

echo ""
echo "完成。执行 pnpm install 后生效，别忘了提交 vendor 变更。"
