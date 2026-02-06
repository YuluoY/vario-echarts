/**
 * 缓存管理器
 * 管理本地缓存数据的读写
 * 参考旧项目 DataFetcher.js 的本地缓存逻辑
 */

import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import type { CompressMode, VersionInfo, Metadata, CacheEntry } from './types.js';
import { DataCompressor } from './compressor.js';

export interface CacheManagerOptions {
  cacheDir: string;
  compress: CompressMode;
}

export class CacheManager {
  private cacheDir: string;
  private compressor: DataCompressor;

  constructor(options: CacheManagerOptions) {
    this.cacheDir = options.cacheDir;
    this.compressor = new DataCompressor(options.compress);
  }

  /**
   * 初始化缓存目录
   */
  async init(): Promise<void> {
    try {
      await fs.mkdir(this.cacheDir, { recursive: true });
      await fs.mkdir(join(this.cacheDir, 'options'), { recursive: true });
    } catch (error) {
      throw new Error(`Failed to initialize cache directory: ${error}`);
    }
  }

  /**
   * 获取版本信息
   */
  async getVersion(): Promise<VersionInfo | null> {
    try {
      const versionPath = join(this.cacheDir, 'version.json');
      const content = await fs.readFile(versionPath, 'utf-8');
      return JSON.parse(content);
    } catch {
      return null;
    }
  }

  /**
   * 设置版本信息
   */
  async setVersion(version: VersionInfo): Promise<void> {
    const versionPath = join(this.cacheDir, 'version.json');
    await fs.writeFile(versionPath, JSON.stringify(version, null, 2), 'utf-8');
  }

  /**
   * 获取元数据
   */
  async getMetadata(): Promise<Metadata | null> {
    try {
      const metadataPath = join(this.cacheDir, 'metadata.json');
      const content = await fs.readFile(metadataPath, 'utf-8');
      return JSON.parse(content);
    } catch {
      return null;
    }
  }

  /**
   * 设置元数据
   */
  async setMetadata(metadata: Metadata): Promise<void> {
    const metadataPath = join(this.cacheDir, 'metadata.json');
    await fs.writeFile(metadataPath, JSON.stringify(metadata, null, 2), 'utf-8');
  }

  /**
   * 读取缓存数据
   * @param key 缓存键（'option', 'type' 或 'options/{key}'）
   */
  async get(key: string): Promise<unknown | null> {
    try {
      const filePath = this.getFilePath(key);
      const buffer = await fs.readFile(filePath);
      
      // 根据文件扩展名判断压缩模式
      const ext = filePath.split('.').pop();
      const mode = this.extToMode(ext);
      
      // 创建临时 compressor 解压
      const tempCompressor = new DataCompressor(mode);
      return tempCompressor.decompress(buffer);
    } catch {
      return null;
    }
  }

  /**
   * 写入缓存数据
   * @param key 缓存键
   * @param data 要缓存的数据
   */
  async set(key: string, data: unknown): Promise<void> {
    const filePath = this.getFilePath(key);
    const buffer = this.compressor.compress(data);
    
    // 确保目录存在
    const dir = dirname(filePath);
    if (dir !== this.cacheDir) {
      await fs.mkdir(dir, { recursive: true });
    }
    
    await fs.writeFile(filePath, buffer);
  }

  /**
   * 检查缓存是否存在
   */
  async has(key: string): Promise<boolean> {
    try {
      const filePath = this.getFilePath(key);
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 删除缓存
   */
  async delete(key: string): Promise<void> {
    try {
      const filePath = this.getFilePath(key);
      await fs.unlink(filePath);
    } catch {
      // 忽略不存在的错误
    }
  }

  /**
   * 清空所有缓存
   */
  async clear(): Promise<void> {
    try {
      const entries = await fs.readdir(this.cacheDir);
      
      for (const entry of entries) {
        const entryPath = join(this.cacheDir, entry);
        const stat = await fs.stat(entryPath);
        
        if (stat.isDirectory()) {
          // 递归删除子目录
          await this.removeDir(entryPath);
        } else {
          await fs.unlink(entryPath);
        }
      }
    } catch (error) {
      throw new Error(`Failed to clear cache: ${error}`);
    }
  }

  /**
   * 获取所有已缓存的选项 keys
   */
  async getCachedOptionKeys(): Promise<string[]> {
    try {
      const optionsDir = join(this.cacheDir, 'options');
      const entries = await fs.readdir(optionsDir);
      
      // 提取选项名（去掉扩展名）
      return entries.map(entry => {
        const parts = entry.split('.');
        parts.pop(); // 去掉扩展名
        return parts.join('.');
      });
    } catch {
      return [];
    }
  }

  /**
   * 获取缓存大小（字节）
   */
  async getCacheSize(): Promise<number> {
    try {
      let totalSize = 0;
      const entries = await fs.readdir(this.cacheDir, { withFileTypes: true });
      
      for (const entry of entries) {
        const entryPath = join(this.cacheDir, entry.name);
        
        if (entry.isDirectory()) {
          totalSize += await this.getDirSize(entryPath);
        } else {
          const stat = await fs.stat(entryPath);
          totalSize += stat.size;
        }
      }
      
      return totalSize;
    } catch {
      return 0;
    }
  }

  /**
   * 获取缓存文件路径
   */
  private getFilePath(key: string): string {
    const ext = this.compressor.getFileExtension();
    
    if (key === 'option' || key === 'type') {
      return join(this.cacheDir, `${key}.${ext}`);
    }
    
    // 单个选项缓存
    return join(this.cacheDir, 'options', `${key}.${ext}`);
  }

  /**
   * 扩展名转压缩模式
   */
  private extToMode(ext: string | undefined): CompressMode {
    switch (ext) {
      case 'zip':
        return 'zip';
      case 'br':
        return 'brotli';
      case 'bin':
        return 'buffer';
      case 'mjs':
      case 'cjs':
      case 'json':
      default:
        return 'none';
    }
  }

  /**
   * 递归删除目录
   */
  private async removeDir(dir: string): Promise<void> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const entryPath = join(dir, entry.name);
      
      if (entry.isDirectory()) {
        await this.removeDir(entryPath);
      } else {
        await fs.unlink(entryPath);
      }
    }
    
    await fs.rmdir(dir);
  }

  /**
   * 递归计算目录大小
   */
  private async getDirSize(dir: string): Promise<number> {
    let totalSize = 0;
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const entryPath = join(dir, entry.name);
      
      if (entry.isDirectory()) {
        totalSize += await this.getDirSize(entryPath);
      } else {
        const stat = await fs.stat(entryPath);
        totalSize += stat.size;
      }
    }
    
    return totalSize;
  }
}
