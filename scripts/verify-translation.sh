#!/bin/bash

# 翻译系统验证测试脚本

echo "🔍 翻译系统完整性检查"
echo "====================="
echo ""

# 1. 检查核心文件
echo "1️⃣ 检查核心文件..."
FILES=(
  "packages/cli/src/translator.ts"
  "data/translations.json"
  "docs/TRANSLATION-QUICKREF.md"
  "docs/translation-guide.md"
  "docs/development/translation-implementation.md"
)

for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✅ $file"
  else
    echo "  ❌ $file (不存在)"
  fi
done
echo ""

# 2. 检查词表统计
echo "2️⃣ 词表统计..."
if [ -f "data/translations.json" ]; then
  TOTAL=$(wc -l < data/translations.json)
  echo "  📊 词表行数: $TOTAL"
  echo "  📚 翻译条数: ~$(($TOTAL - 2))"  # 减去 { 和 }
else
  echo "  ❌ 词表文件不存在"
fi
echo ""

# 3. 检查翻译质量示例
echo "3️⃣ 翻译质量示例..."
if [ -f "data/translations.json" ]; then
  echo "  颜色相关:"
  grep -E '".*Color"' data/translations.json | head -5
  echo ""
  echo "  样式相关:"
  grep -E '".*Style"' data/translations.json | head -5
else
  echo "  ❌ 词表文件不存在"
fi
echo ""

# 4. 检查 Schema 输出
echo "4️⃣ Schema 输出验证..."
SCHEMAS=(
  "output/title/index.mjs"
  "output/legend/index.mjs"
  "output/tooltip/index.mjs"
)

for schema in "${SCHEMAS[@]}"; do
  if [ -f "$schema" ]; then
    echo "  ✅ $schema"
    # 检查是否包含中文
    if grep -q "placeholder.*[\u4e00-\u9fa5]" "$schema" 2>/dev/null; then
      echo "     🎯 包含中文翻译"
    else
      echo "     ⚠️  未检测到中文（可能未启用翻译）"
    fi
  else
    echo "  ❌ $schema (不存在)"
  fi
done
echo ""

# 5. 功能测试
echo "5️⃣ 功能测试建议..."
echo "  手动测试步骤："
echo "  1. pnpm convert --keys title --translate"
echo "  2. head -30 output/title/index.mjs | grep placeholder"
echo "  3. pnpm dev  # 启动 Studio 查看效果"
echo ""

# 总结
echo "✨ 检查完成！"
echo ""
echo "📚 文档链接:"
echo "  - 快速参考: docs/TRANSLATION-QUICKREF.md"
echo "  - 使用指南: docs/translation-guide.md"
echo "  - 实现细节: docs/development/translation-implementation.md"
