/**
 * Base 物料加载器
 * 加载 base/option.mjs 和 base/type.mjs
 */

import { pathToFileURL } from 'url';
import { join } from 'path';
import type { BaseOptionOutline, BaseTypeTree } from '../types/base.js';

export interface BaseData {
  option: BaseOptionOutline;
  type: BaseTypeTree;
}

export class BaseLoader {
  private basePath: string;

  constructor(basePath: string = 'base') {
    this.basePath = basePath;
  }

  /**
   * 加载 base 数据
   */
  async load(): Promise<BaseData> {
    const optionUrl = pathToFileURL(join(this.basePath, 'option.mjs')).href;
    const typeUrl = pathToFileURL(join(this.basePath, 'type.mjs')).href;

    try {
      const [optionMod, typeMod] = await Promise.all([
        import(optionUrl) as Promise<{ default: BaseOptionOutline }>,
        import(typeUrl) as Promise<{ default: BaseTypeTree }>,
      ]);

      const option = optionMod?.default;
      const type = typeMod?.default;

      if (!option || !type) {
        throw new Error('Failed to load base data: missing option or type');
      }

      return { option, type };
    } catch (error) {
      throw new Error(`Failed to load base data from ${this.basePath}: ${error}`);
    }
  }

  /**
   * 获取所有可用的 option keys
   */
  getOptionKeys(option: BaseOptionOutline): string[] {
    return Object.keys(option).filter((k) => 
      !k.startsWith('_') && 
      !['options', 'animation', 'darkMode', 'color', 'backgroundColor'].includes(k)
    );
  }
}

export const baseLoader = new BaseLoader();
