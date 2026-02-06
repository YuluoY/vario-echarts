/**
 * 数据解析器
 * 解析从 ECharts 官网下载的 JavaScript 数据
 * 参考旧项目的解析逻辑
 */

export class DataParser {
  /**
   * 安全解析 JavaScript 数据
   * ECharts 返回的是 JavaScript 代码，需要安全地执行并提取数据
   * @param jsCode JavaScript 代码字符串
   * @returns 解析后的数据对象
   */
  static parse(jsCode: string): unknown {
    try {
      // 清理代码
      let cleanedCode = jsCode.trim();
      
      // 移除 BOM
      if (cleanedCode.charCodeAt(0) === 0xFEFF) {
        cleanedCode = cleanedCode.substring(1);
      }

      // 移除可能导致问题的样式代码引用
      cleanedCode = cleanedCode.replace(/\.<style_name>\./g, '.');

      // 使用 Function 构造器创建沙箱环境
      // 传入空对象作为 window，避免污染全局
      const fn = new Function('window', `
        ${cleanedCode}
        return window;
      `);

      const result = fn({});

      // ECharts 的数据通常挂载在 window 对象上
      // 或者作为全局变量
      if (result && typeof result === 'object') {
        // 移除内部属性
        const cleaned = this.cleanResult(result);
        return cleaned;
      }

      return result;
    } catch (error) {
      throw new Error(`Failed to parse data: ${error}`);
    }
  }

  /**
   * 解析选项大纲数据
   */
  static parseOptionOutline(jsCode: string): Record<string, unknown> {
    const result = this.parse(jsCode);
    
    if (typeof result !== 'object' || result === null) {
      throw new Error('Invalid option outline data');
    }

    // ECharts 数据存储在 __EC_DOC_option_outline 或 __EC_DOC 属性中
    const docKey = '__EC_DOC_option_outline';
    const docData = (result as Record<string, unknown>)[docKey];
    
    if (docData && typeof docData === 'object') {
      const docObj = docData as Record<string, unknown>;
      const children = docObj.children as unknown[] | undefined;
      
      if (children && Array.isArray(children)) {
        // 新结构：children 是选项数组，每个选项有 prop 属性
        const cleaned: Record<string, unknown> = {};
        
        for (const child of children) {
          if (child && typeof child === 'object') {
            const childObj = child as Record<string, unknown>;
            const prop = childObj.prop as string;
            if (prop && !prop.startsWith('_')) {
              cleaned[prop] = child;
            }
          }
        }

        return cleaned;
      }
      
      // 如果没有 children，直接返回
      return docObj;
    }

    // 如果没有找到 __EC_DOC 属性，返回原始结果
    return result as Record<string, unknown>;
  }

  /**
   * 解析类型定义数据
   */
  static parseTypeTree(jsCode: string): Record<string, unknown> {
    const result = this.parse(jsCode);

    if (typeof result !== 'object' || result === null) {
      throw new Error('Invalid type tree data');
    }

    // ECharts 类型数据存储在 __EC_DOC_option 属性中
    const docKey = '__EC_DOC_option';
    const docData = (result as Record<string, unknown>)[docKey];

    if (docData && typeof docData === 'object') {
      return docData as Record<string, unknown>;
    }

    // 如果没有找到 __EC_DOC 属性，返回原始结果
    return result as Record<string, unknown>;
  }

  /**
   * 解析单个选项详情
   */
  static parseOptionDetail(jsCode: string, key: string): Record<string, unknown> {
    const result = this.parse(jsCode);

    if (typeof result !== 'object' || result === null) {
      throw new Error(`Invalid option detail data for ${key}`);
    }

    // ECharts 详情数据存储在 __EC_DOC_option.{key} 属性中
    const docKey = `__EC_DOC_option.${key}`;
    const docData = (result as Record<string, unknown>)[docKey];

    let detail: Record<string, unknown>;
    if (docData && typeof docData === 'object') {
      detail = docData as Record<string, unknown>;
    } else {
      // 如果没有找到特定属性，返回原始结果
      detail = result as Record<string, unknown>;
    }

    // 添加元数据
    // 处理嵌套选项（如 dataZoom-slider）
    if (key.includes('-')) {
      const parts = key.split('-');
      detail.__ROOT__ = parts.join('.');
      detail.__UTILS__ = 3 + parts.length - 1;
    } else {
      detail.__ROOT__ = key;
      detail.__UTILS__ = 3;
    }

    return detail;
  }

  /**
   * 清理解析结果
   * 移除内部属性和循环引用
   */
  private static cleanResult(obj: unknown, seen = new WeakSet()): unknown {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    // 处理循环引用
    if (seen.has(obj)) {
      return '[Circular]';
    }
    seen.add(obj);

    if (Array.isArray(obj)) {
      return obj.map(item => this.cleanResult(item, seen));
    }

    const cleaned: Record<string, unknown> = {};
    
    for (const [key, value] of Object.entries(obj)) {
      // 递归清理
      cleaned[key] = this.cleanResult(value, seen);
    }

    return cleaned;
  }

  /**
   * 验证数据完整性
   */
  static validate(data: unknown, type: 'outline' | 'type' | 'detail'): boolean {
    if (data === null || typeof data !== 'object') {
      return false;
    }

    const obj = data as Record<string, unknown>;

    switch (type) {
      case 'outline':
        // 大纲应该包含多个选项
        return Object.keys(obj).length > 0;

      case 'type':
        // 类型树应该包含类型定义
        return Object.keys(obj).some(key => {
          const val = obj[key];
          return typeof val === 'object' && val !== null;
        });

      case 'detail':
        // 详情应该包含 __ROOT__
        return '__ROOT__' in obj;

      default:
        return false;
    }
  }
}
