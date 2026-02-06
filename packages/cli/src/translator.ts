/**
 * 字段翻译器 - 使用 DeepSeek API 生成中英文词表
 */

import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

interface Translation {
  en: string;
  zh: string;
}

interface TranslationDict {
  [key: string]: string;
}

export class FieldTranslator {
  private dict: TranslationDict = {};
  private dictPath: string;
  private apiKey: string;
  private pendingFields: Set<string> = new Set();

  constructor(dictPath: string, apiKey: string) {
    this.dictPath = dictPath;
    this.apiKey = apiKey;
    this.loadDict();
  }

  /**
   * 加载现有词表
   */
  private loadDict() {
    if (existsSync(this.dictPath)) {
      try {
        const content = readFileSync(this.dictPath, 'utf-8');
        this.dict = JSON.parse(content);
        console.log(`📚 加载词表: ${Object.keys(this.dict).length} 条`);
      } catch (error) {
        console.warn('⚠️  词表加载失败，将创建新词表');
        this.dict = {};
      }
    }
  }

  /**
   * 保存词表
   */
  saveDict() {
    try {
      const content = JSON.stringify(this.dict, null, 2);
      writeFileSync(this.dictPath, content, 'utf-8');
      console.log(`💾 词表已保存: ${this.dictPath}`);
      console.log(`📊 共 ${Object.keys(this.dict).length} 条翻译`);
      
      // 同时保存国际化文件
      this.saveI18nFiles();
    } catch (error) {
      console.error('❌ 词表保存失败:', error);
    }
  }

  /**
   * 保存国际化文件（中英文）
   */
  private saveI18nFiles() {
    try {
      const basePath = dirname(this.dictPath);
      const i18nDir = join(basePath, 'i18n');
      
      // 创建 i18n 目录
      if (!existsSync(i18nDir)) {
        mkdirSync(i18nDir, { recursive: true });
      }
      
      // 生成中文国际化文件
      const zhCN: Record<string, string> = {};
      Object.entries(this.dict).forEach(([en, zh]) => {
        zhCN[en] = zh;
      });
      const zhPath = join(i18nDir, 'zh-CN.json');
      writeFileSync(zhPath, JSON.stringify(zhCN, null, 2), 'utf-8');
      
      // 生成英文国际化文件（保持原始字段名）
      const enUS: Record<string, string> = {};
      Object.keys(this.dict).forEach(en => {
        // 驼峰转空格分隔
        const readable = en
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, str => str.toUpperCase())
          .trim();
        enUS[en] = readable;
      });
      const enPath = join(i18nDir, 'en-US.json');
      writeFileSync(enPath, JSON.stringify(enUS, null, 2), 'utf-8');
      
      console.log(`🌐 国际化文件已生成:`);
      console.log(`   - ${zhPath}`);
      console.log(`   - ${enPath}`);
    } catch (error) {
      console.error('❌ 国际化文件保存失败:', error);
    }
  }

  /**
   * 收集需要翻译的字段
   */
  collectField(field: string) {
    if (!field || this.dict[field]) return;
    this.pendingFields.add(field);
  }

  /**
   * 翻译单个字段（驼峰命名转中文）
   */
  translate(field: string): string {
    if (!field) return '';
    
    // 如果词表中已有，直接返回
    if (this.dict[field]) {
      return this.dict[field];
    }

    // 驼峰命名转空格分隔作为 fallback
    const readable = field
      .replace(/([A-Z])/g, ' $1')
      .trim();
    
    return readable;
  }

  /**
   * 获取统计信息
   */
  getStats() {
    return {
      total: Object.keys(this.dict).length,
      pending: this.pendingFields.size
    };
  }

  /**
   * 批量翻译待处理字段（调用 DeepSeek API）
   */
  async translatePending() {
    if (this.pendingFields.size === 0) {
      console.log('✅ 无需翻译新字段');
      return;
    }

    const fields = Array.from(this.pendingFields);
    console.log(`\n🌐 准备翻译 ${fields.length} 个新字段...`);

    try {
      // 分批翻译（每批50个）
      const batchSize = 50;
      for (let i = 0; i < fields.length; i += batchSize) {
        const batch = fields.slice(i, i + batchSize);
        await this.translateBatch(batch);
        
        // 进度显示
        const progress = Math.min(i + batchSize, fields.length);
        console.log(`  翻译进度: ${progress}/${fields.length}`);
      }

      console.log('✅ 翻译完成\n');
      this.pendingFields.clear();
    } catch (error) {
      console.error('❌ 翻译失败:', error);
      throw error;
    }
  }

  /**
   * 翻译一批字段
   */
  private async translateBatch(fields: string[]) {
    const prompt = this.buildTranslationPrompt(fields);

    try {
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: '你是一个专业的 ECharts 配置项翻译助手。这些字段用于 ECharts 图表配置，需要准确反映其在 ECharts 中的实际用途和使用场景。'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.3,
          max_tokens: 2000
        })
      });

      if (!response.ok) {
        throw new Error(`API 请求失败: ${response.status} ${response.statusText}`);
      }

      const data: any = await response.json();
      const content = data.choices[0]?.message?.content;
      
      if (!content) {
        throw new Error('API 返回内容为空');
      }

      this.parseTranslationResult(content);
    } catch (error) {
      console.error('批量翻译出错:', error);
      // 失败时使用驼峰转换作为降级方案
      fields.forEach(field => {
        if (!this.dict[field]) {
          this.dict[field] = field
            .replace(/([A-Z])/g, ' $1')
            .trim();
        }
      });
    }
  }

  /**
   * 构建翻译提示词
   */
  private buildTranslationPrompt(fields: string[]): string {
    return `请将以下 ECharts 配置字段名翻译成中文。

【重要说明】
- 这些字段用于 ECharts 图表配置
- 翻译需要准确反映字段在 ECharts 中的实际用途和使用场景
- 参考 ECharts 官方文档的标准术语

【翻译要求】
1. 准确性：符合 ECharts 配置项的实际含义
2. 简洁性：一般 2-4 个汉字
3. 一致性：相同后缀用相同翻译（Color→颜色，Width→宽度）
4. 专业性：使用图表领域术语

【示例】
visualMap: 视觉映射
dataZoom: 数据区域缩放
textBorderColor: 文本边框颜色
shadowBlur: 阴影模糊度
coordinateSystem: 坐标系

【字段列表】
${fields.join('\n')}

【输出格式】
请返回 JSON 对象，格式：{"英文字段": "中文翻译"}
不要添加任何说明文字，直接输出 JSON。`;
  }

  /**
   * 解析翻译结果
   */
  private parseTranslationResult(content: string) {
    try {
      // 提取 JSON 部分
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('未找到 JSON 格式的翻译结果');
      }

      const translations = JSON.parse(jsonMatch[0]);
      
      // 合并到词表
      Object.entries(translations).forEach(([en, zh]) => {
        if (en && zh && typeof zh === 'string') {
          this.dict[en] = zh;
        }
      });
    } catch (error) {
      console.error('解析翻译结果失败:', error);
      console.log('原始内容:', content);
    }
  }

  /**
   * 生成指定语言的国际化文件
   * @param lang 语言代码 (zh-CN, en-US, ja-JP 等)
   */
  generateI18nFile(lang: string): Record<string, string> {
    const result: Record<string, string> = {};
    
    switch (lang) {
      case 'zh-CN':
        // 中文：使用翻译结果
        Object.entries(this.dict).forEach(([en, zh]) => {
          result[en] = zh;
        });
        break;
        
      case 'en-US':
        // 英文：驼峰转空格
        Object.keys(this.dict).forEach(en => {
          const readable = en
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .trim();
          result[en] = readable;
        });
        break;
        
      case 'ja-JP':
        // 日文：使用英文（未来可扩展）
        Object.keys(this.dict).forEach(en => {
          result[en] = en; // TODO: 添加日文翻译
        });
        break;
        
      case 'ko-KR':
        // 韩文：使用英文（未来可扩展）
        Object.keys(this.dict).forEach(en => {
          result[en] = en; // TODO: 添加韩文翻译
        });
        break;
        
      default:
        // 其他语言：使用英文
        Object.keys(this.dict).forEach(en => {
          result[en] = en;
        });
        break;
    }
    
    return result;
  }
}
