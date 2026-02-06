#!/usr/bin/env node
/**
 * CLI Entry
 * ECharts to Vario Schema CLI Tool
 */

import { Command } from 'commander';
import { BaseLoader, SchemaGenerator } from '@vario-echarts/core';
import { EChartsFetcher, type FetchProgress, type FetchError } from '@vario-echarts/fetcher';
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { FieldTranslator } from './translator.js';

// 获取项目根目录（CLI 在 packages/cli，根目录是 ../../）
const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, '../../..');

const program = new Command();

program
  .name('echarts-to-vario')
  .description('Convert ECharts base data to Vario Schema')
  .version('2.0.0');

// Fetch command - 获取 ECharts 数据
program
  .command('fetch')
  .description('Fetch ECharts data from official website')
  .option('-f, --force', 'Force update (ignore cache)', false)
  .option('-l, --locale <locale>', 'Locale for fetching data (zh-CN or en-US)', 'zh-CN')
  .option('-c, --concurrency <number>', 'Concurrency limit', '6')
  .option('-z, --compress <mode>', 'Compression mode (none/zip/brotli/buffer)', 'none')
  .option('-F, --format <format>', 'Output format (cjs/mjs/json)', 'mjs')
  .option('-o, --output <path>', 'Output directory', 'data/base')
  .option('--cache <path>', 'Cache directory', 'data/.cache')
  .option('--all', 'Fetch all option details', false)
  .option('-k, --key <key>', 'Fetch specific option key')
  .option('--save-to-base', 'Save fetched option to data/base/options/', false)
  .action(async (options) => {
    try {
      console.log('🚀 Initializing fetcher...\n');
      
      // 验证 locale
      if (options.locale && !['zh-CN', 'en-US'].includes(options.locale)) {
        console.error('❌ Invalid locale. Must be zh-CN or en-US');
        process.exit(1);
      }
      
      // 使用绝对路径
      const cacheDir = resolve(options.cache);
      const outputDir = resolve(options.output);
      
      // 确保目录存在
      if (!existsSync(cacheDir)) {
        mkdirSync(cacheDir, { recursive: true });
      }
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }
      
      const fetcher = new EChartsFetcher({
        cacheDir,
        locale: options.locale,
        concurrency: parseInt(options.concurrency),
        compress: options.compress,
        cacheEnabled: true,
      });

      // 进度监控
      let lastProgress: FetchProgress | null = null;
      fetcher.onProgress((progress) => {
        lastProgress = progress;
        const { phase, current, total, item } = progress;
        const percent = Math.round((current / total) * 100);
        
        if (phase === 'metadata') {
          process.stdout.write(`\r📦 Fetching metadata... ${current}/${total}`);
        } else if (phase === 'option-details') {
          process.stdout.write(`\r📥 Downloading options... ${percent}% (${current}/${total})${item ? ` - ${item}` : ''}`);
        }
      });

      // 错误监控
      const errors: FetchError[] = [];
      fetcher.onError((error) => {
        errors.push(error);
        if (error.item) {
          console.error(`\n⚠️  Failed to fetch ${error.item}: ${error.error.message}`);
        }
      });

      // 获取基础数据
      console.log('📦 Fetching base data (option + type)...');
      const baseData = await fetcher.fetchBaseData(options.force);
      console.log(`\n✅ Base data fetched! (${Object.keys(baseData.option).length} options available)`);

      // 如果是获取单个选项
      if (options.key) {
        console.log(`\n📥 Fetching option: ${options.key}...`);
        const detail = await fetcher.fetchOptionDetail(options.key);
        
        // 根据 --save-to-base 参数决定保存位置
        let outputPath: string;
        if (options.saveToBase) {
          // 保存到 data/base/options/{locale}/{key}.{format}
          outputPath = join(outputDir, 'options', options.locale, `${options.key}.${options.format}`);
        } else {
          // 保存到指定输出目录
          outputPath = join(options.output, 'options', `${options.key}.${options.format}`);
        }
        
        mkdirSync(dirname(outputPath), { recursive: true });
        
        let content: string;
        if (options.format === 'json') {
          content = JSON.stringify(detail, null, 2);
        } else {
          content = options.format === 'mjs' 
            ? `export default ${JSON.stringify(detail, null, 2)};\n`
            : `module.exports = ${JSON.stringify(detail, null, 2)};\n`;
        }
        
        writeFileSync(outputPath, content, 'utf-8');
        console.log(`✅ Saved to ${outputPath}\n`);
        return;
      }

      // 如果是获取所有选项详情
      if (options.all) {
        const keys = fetcher.getOptionKeys(baseData.option);
        console.log(`\n📥 Fetching ${keys.length} option details...`);
        console.log('   This may take a while depending on your network.\n');

        let completed = 0;
        fetcher.onResult(() => {
          completed++;
        });

        // 批量获取
        for await (const result of fetcher.fetchOptionsBatch(keys)) {
          // 结果会自动保存到缓存
        }

        console.log(`\n\n✅ Fetched ${completed} options!`);
        if (errors.length > 0) {
          console.log(`⚠️  ${errors.length} errors occurred.`);
        }
      }

      // 保存到 base 目录
      console.log(`\n💾 Saving to ${outputDir}...`);
      const saveResult = await fetcher.saveToBase(outputDir, {
        compress: options.compress,
        format: options.format,
        clean: true,
      });

      console.log(`\n✨ Done!`);
      console.log(`   📁 Output: ${saveResult.outputDir}`);
      console.log(`   📄 Files: ${saveResult.files.length}`);
      console.log(`   ⏱️  Duration: ${(saveResult.duration / 1000).toFixed(2)}s`);
      console.log(`   📦 Compression: ${saveResult.compress}\n`);

    } catch (error) {
      console.error('\n❌ Error:', error);
      process.exit(1);
    }
  });

// Check-update command - 检查更新
program
  .command('check-update')
  .description('Check for ECharts data updates')
  .option('--cache <path>', 'Cache directory', 'data/.cache')
  .option('--json', 'Output in JSON format')
  .action(async (options) => {
    try {
      console.log('🔍 Checking for updates...\n');

      const fetcher = new EChartsFetcher({
        cacheDir: options.cache,
      });

      const updateInfo = await fetcher.checkUpdates();

      if (options.json) {
        console.log(JSON.stringify(updateInfo, null, 2));
      } else {
        if (updateInfo.hasUpdate) {
          console.log('✅ Updates available!\n');
          console.log(`Remote version: ${updateInfo.remoteVersion || 'unknown'}`);
          console.log(`Local version: ${updateInfo.localVersion || 'none'}\n`);

          if (updateInfo.added && updateInfo.added.length > 0) {
            console.log(`📥 New options (${updateInfo.added.length}):`);
            updateInfo.added.forEach(k => console.log(`  • ${k}`));
            console.log('');
          }

          if (updateInfo.modified && updateInfo.modified.length > 0) {
            console.log(`📝 Modified options (${updateInfo.modified.length}):`);
            updateInfo.modified.forEach(k => console.log(`  • ${k}`));
            console.log('');
          }

          if (updateInfo.removed && updateInfo.removed.length > 0) {
            console.log(`🗑️  Removed options (${updateInfo.removed.length}):`);
            updateInfo.removed.forEach(k => console.log(`  • ${k}`));
            console.log('');
          }

          console.log('💡 Run `pnpm cli fetch --force` to update.\n');
        } else {
          console.log('✨ Already up to date!\n');
        }
      }
    } catch (error) {
      console.error('❌ Error:', error);
      process.exit(1);
    }
  });

// Convert command - 转换数据
program
  .command('convert')
  .description('Convert options to Vario Schema')
  .option('-b, --base <path>', 'Base directory', 'data/base')
  .option('-o, --output <path>', 'Output directory', 'output')
  .option('-k, --keys <keys...>', 'Option keys to convert (default: all)')
  .option('-l, --locale <locale>', 'Locale for option details (zh-CN or en-US)', 'zh-CN')
  .option('--translate', 'Enable auto translation using DeepSeek API')
  .option('--api-key <key>', 'DeepSeek API key', 'sk-94cb9fae48e242a4a7fe4d83fa291767')
  .option('--output-mode <mode>', 'Output mode: folder (folder/index.mjs) or flat (flat filename.mjs)', 'folder')
  .option('--i18n', 'Generate i18n files', false)
  .option('--i18n-langs <langs...>', 'Languages for i18n (e.g., zh-CN en-US)', ['zh-CN', 'en-US'])
  .action(async (options) => {
    try {
      console.log('📦 Loading base data...');
      // 使用绝对路径（从项目根目录开始）
      const basePath = resolve(PROJECT_ROOT, options.base);
      const outputPath = resolve(PROJECT_ROOT, options.output);
      const dictPath = resolve(PROJECT_ROOT, 'data/translations.json');
      
      console.log(`📂 Base path: ${basePath}`);
      console.log(`📂 Output path: ${outputPath}\n`);
      
      const loader = new BaseLoader(basePath);
      const { option, type } = await loader.load();
      
      const keys = options.keys || loader.getOptionKeys(option);
      console.log(`📝 Converting ${keys.length} options...\n`);

      // 加载所有选项的详情数据（包含 desc）
      const optionDetails: Record<string, any> = {};
      // 使用 locale 参数确定语言目录
      const locale = options.locale || 'zh-CN';
      const optionsDir = resolve(basePath, 'options', locale);
      
      if (existsSync(optionsDir)) {
        console.log(`📚 Loading option details (desc) from ${locale}...`);
        for (const key of keys) {
          const detailPath = join(optionsDir, `${key}.mjs`);
          if (existsSync(detailPath)) {
            try {
              const module = await import(detailPath);
              optionDetails[key] = module.default;
            } catch (error) {
              console.warn(`⚠️  Failed to load details for ${key}:`, error);
            }
          }
        }
        console.log(`✅ Loaded ${Object.keys(optionDetails).length} option details\n`);
      } else {
        console.log(`⚠️  No option details found for ${locale}. Run \`pnpm cli fetch --locale ${locale} --all\` first to download descriptions.\n`);
      }

      // 初始化翻译器（只在中文 locale 时需要翻译英文字段名为中文）
      // desc 字段已经从对应 locale 的 options 文件中获取，不需要翻译
      let translator: FieldTranslator | null = null;
      const zhCNPath = resolve(PROJECT_ROOT, 'data/i18n/zh-CN.json');
      
      // 只有使用中文 locale 时才需要翻译字段名
      if (locale === 'zh-CN') {
        if (existsSync(zhCNPath)) {
          // 使用现有的中文翻译文件
          translator = new FieldTranslator(dictPath, options.apiKey);
          const zhCN = JSON.parse(readFileSync(zhCNPath, 'utf-8'));
          // 将翻译加载到 translator
          Object.assign(translator['dict'], zhCN);
        } else if (options.translate) {
          // 如果没有 zh-CN.json 但启用了 --translate，则使用 API 翻译
          translator = new FieldTranslator(dictPath, options.apiKey);
        }
      }

      const generator = new SchemaGenerator({ useSmartComponents: true });
      let completed = 0;

      // 第一遍：收集所有需要翻译的字段
      if (translator) {
        console.log('🔍 收集字段...');
        for (const key of keys) {
          const schema = generator.generate(key, type, option[key]?.desc);
          collectFieldsFromSchema(schema, translator);
        }
        
        // 调用 API 批量翻译
        await translator.translatePending();
        translator.saveDict();
      }

      // 第二遍：生成 Schema 并应用翻译
      console.log('🔄 生成 Schema...\n');
      for (const key of keys) {
        const schema = generator.generate(key, type, option[key]?.desc, optionDetails[key]);
        
        // 如果启用翻译，替换字段名
        if (translator) {
          translateSchema(schema, translator);
        }
        
        // 根据输出模式选择文件路径
        let schemaPath: string;
        if (options.outputMode === 'flat') {
          // 扁平模式: output/series-line.mjs
          schemaPath = join(outputPath, `${key}.mjs`);
        } else {
          // 文件夹模式: output/series/line/index.mjs
          schemaPath = join(outputPath, key.replace(/-/g, '/'), 'index.mjs');
        }
        
        mkdirSync(dirname(schemaPath), { recursive: true });
        
        const content = `export default ${JSON.stringify(schema, null, 2)};\n`;
        writeFileSync(schemaPath, content, 'utf-8');
        
        completed++;
        process.stdout.write(`\r✅ ${completed}/${keys.length} ${key}`);
      }

      console.log(`\n\n✨ Done! Output: ${outputPath}`);
      console.log(`📁 Output mode: ${options.outputMode}`);
      
      if (translator) {
        const stats = translator.getStats();
        console.log(`📚 词表: ${stats.total} 条翻译`);
        
        // 生成国际化文件
        if (options.i18n) {
          console.log(`\n🌍 生成国际化文件...`);
          const i18nDir = resolve(PROJECT_ROOT, 'data/i18n');
          mkdirSync(i18nDir, { recursive: true });
          
          const i18nLangs = options.i18nLangs || ['zh-CN', 'en-US'];
          for (const lang of i18nLangs) {
            const i18nPath = join(i18nDir, `${lang}.json`);
            const i18nData = translator.generateI18nFile(lang);
            writeFileSync(i18nPath, JSON.stringify(i18nData, null, 2), 'utf-8');
            console.log(`  ✅ ${lang}.json (${Object.keys(i18nData).length} 条)`);
          }
          console.log(`  📁 Output: ${i18nDir}`);
        }
        console.log();
      } else {
        console.log();
      }
    } catch (error) {
      console.error('❌ Error:', error);
      process.exit(1);
    }
  });

/**
 * 从 Schema 中收集字段名
 */
function collectFieldsFromSchema(schema: any, translator: FieldTranslator) {
  if (!schema) return;
  
  if (Array.isArray(schema)) {
    schema.forEach(node => collectFieldsFromSchema(node, translator));
    return;
  }
  
  // 收集 ElCollapseItem 的 title
  if (schema.type === 'ElCollapseItem' && schema.props?.title) {
    translator.collectField(schema.props.title);
  }
  
  // 收集 placeholder (字段名)
  if (schema.props?.placeholder) {
    translator.collectField(schema.props.placeholder);
  }
  
  // 递归处理子节点
  if (Array.isArray(schema.children)) {
    schema.children.forEach((child: any) => collectFieldsFromSchema(child, translator));
  }
}

/**
 * 翻译 Schema 中的字段名
 */
/**
 * 翻译 Schema 中的字段名和标签
 * 注意：_raw.desc 不需要翻译，因为已经从对应 locale 的 options 文件中获取
 */
function translateSchema(schema: any, translator: FieldTranslator) {
  if (!schema) return;
  
  if (Array.isArray(schema)) {
    schema.forEach(node => translateSchema(node, translator));
    return;
  }
  
  // 翻译 ElCollapseItem 的 title（字段名）
  if (schema.type === 'ElCollapseItem' && schema.props?.title) {
    schema.props.title = translator.translate(schema.props.title);
  }
  
  // 翻译 placeholder（字段名）
  if (schema.props?.placeholder) {
    schema.props.placeholder = translator.translate(schema.props.placeholder);
  }
  
  // 翻译 _raw.label（原始字段名）
  if (schema._raw?.label) {
    schema._raw.label = translator.translate(schema._raw.label);
  }
  
  // _raw.desc 不翻译，直接使用从 options/{locale}/ 获取的描述
  
  // 递归处理子节点
  if (Array.isArray(schema.children)) {
    schema.children.forEach((child: any) => translateSchema(child, translator));
  }
}

// List command - 列出可用选项
program
  .command('list')
  .description('List available option keys')
  .option('-b, --base <path>', 'Base directory', 'data/base')
  .option('--filter <filter>', 'Filter type (global/box/regular)')
  .option('--json', 'Output in JSON format')
  .action(async (options) => {
    try {
      const loader = new BaseLoader(options.base);
      const { option } = await loader.load();
      const keys = loader.getOptionKeys(option);

      if (options.json) {
        console.log(JSON.stringify(keys, null, 2));
      } else {
        console.log('\n📊 Available Options:\n');
        
        // 分类显示
        const globalKeys = keys.filter(k => ['options', 'animation', 'darkMode', 'color', 'backgroundColor'].includes(k));
        const boxKeys = keys.filter(k => k.startsWith('dataZoom-') || k.startsWith('visualMap-'));
        const regularKeys = keys.filter(k => !globalKeys.includes(k) && !boxKeys.includes(k));

        if (regularKeys.length > 0) {
          console.log(`📋 Regular Options (${regularKeys.length}):`);
          regularKeys.forEach(k => console.log(`  • ${k}`));
          console.log('');
        }

        if (boxKeys.length > 0) {
          console.log(`📦 Box Options (${boxKeys.length}):`);
          boxKeys.forEach(k => console.log(`  • ${k}`));
          console.log('');
        }

        if (globalKeys.length > 0 && !options.filter) {
          console.log(`🌍 Global Options (${globalKeys.length}):`);
          globalKeys.forEach(k => console.log(`  • ${k}`));
          console.log('');
        }

        console.log(`Total: ${keys.length}\n`);
      }
    } catch (error) {
      console.error('❌ Error:', error);
      process.exit(1);
    }
  });

// Clean command - 清理缓存
program
  .command('clean')
  .description('Clean cache and output directories')
  .option('--cache <path>', 'Cache directory', 'data/.cache')
  .option('--base <path>', 'Base directory', 'data/base')
  .option('--output <path>', 'Output directory', 'output')
  .option('--all', 'Clean all', false)
  .action(async (options) => {
    try {
      const { rm } = await import('fs/promises');
      
      console.log('🧹 Cleaning...\n');

      if (options.all || options.cache) {
        await rm(options.cache, { recursive: true, force: true });
        console.log(`✅ Cleaned cache: ${options.cache}`);
      }

      if (options.all || options.base) {
        await rm(options.base, { recursive: true, force: true });
        console.log(`✅ Cleaned base: ${options.base}`);
      }

      if (options.all || options.output) {
        await rm(options.output, { recursive: true, force: true });
        console.log(`✅ Cleaned output: ${options.output}`);
      }

      console.log('\n✨ Done!\n');
    } catch (error) {
      console.error('❌ Error:', error);
      process.exit(1);
    }
  });

program.parse();
