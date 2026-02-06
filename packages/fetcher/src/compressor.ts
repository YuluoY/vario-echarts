/**
 * 数据压缩器
 * 支持多种压缩算法：none, zip, brotli, buffer
 * 参考旧项目 StorageManager.js 的压缩实现
 */

import { compressSync, decompressSync, strToU8, strFromU8 } from 'fflate';
import { brotliCompressSync, brotliDecompressSync } from 'zlib';
import msgpack5 from 'msgpack5';
import type { CompressMode } from './types.js';

const msgpack = msgpack5();

export class DataCompressor {
  private mode: CompressMode;

  constructor(mode: CompressMode = 'none') {
    this.mode = mode;
  }

  /**
   * 设置压缩模式
   */
  setMode(mode: CompressMode): void {
    this.mode = mode;
  }

  /**
   * 获取当前压缩模式
   */
  getMode(): CompressMode {
    return this.mode;
  }

  /**
   * 压缩数据
   * @param data 要压缩的数据（对象）
   * @returns 压缩后的 Buffer
   */
  compress(data: unknown): Buffer {
    const jsonStr = JSON.stringify(data, null, 2);
    
    switch (this.mode) {
      case 'none':
        return Buffer.from(jsonStr, 'utf-8');
        
      case 'zip':
        // 使用 fflate 的 zip 压缩
        const compressed = compressSync(strToU8(jsonStr), {
          level: 9,
          mem: 8,
        });
        return Buffer.from(compressed);
        
      case 'brotli':
        // 使用 Node.js zlib 的 brotli 压缩
        return brotliCompressSync(Buffer.from(jsonStr, 'utf-8'), {
          params: {
            [1]: 11,  // BROTLI_PARAM_QUALITY = 1
          },
        });
        
      case 'buffer':
        // 使用 msgpack5 进行二进制序列化
        return msgpack.encode(data);
        
      default:
        return Buffer.from(jsonStr, 'utf-8');
    }
  }

  /**
   * 解压数据
   * @param buffer 压缩后的 Buffer
   * @returns 解压后的原始数据
   */
  decompress(buffer: Buffer): unknown {
    switch (this.mode) {
      case 'none':
        return JSON.parse(buffer.toString('utf-8'));
        
      case 'zip': {
        // 使用 fflate 解压
        const decompressed = decompressSync(buffer);
        return JSON.parse(strFromU8(decompressed));
      }
        
      case 'brotli': {
        // 使用 Node.js zlib 解压
        const decompressed = brotliDecompressSync(buffer);
        return JSON.parse(decompressed.toString('utf-8'));
      }
        
      case 'buffer':
        // 使用 msgpack5 解码
        return msgpack.decode(buffer);
        
      default:
        return JSON.parse(buffer.toString('utf-8'));
    }
  }

  /**
   * 获取文件扩展名
   */
  getFileExtension(): string {
    switch (this.mode) {
      case 'zip':
        return 'zip';
      case 'brotli':
        return 'br';
      case 'buffer':
        return 'bin';
      case 'none':
      default:
        return 'mjs';
    }
  }

  /**
   * 检查数据是否已压缩
   * （通过检查 Buffer 的 magic bytes）
   */
  static isCompressed(buffer: Buffer, mode: CompressMode): boolean {
    if (buffer.length < 2) return false;
    
    switch (mode) {
      case 'zip':
        // ZIP 文件的 magic number: 50 4B 03 04
        return buffer[0] === 0x50 && buffer[1] === 0x4B;
        
      case 'brotli':
        // Brotli 压缩数据通常以 0x0B 或 0x1B 开头
        return buffer[0] === 0x0B || buffer[0] === 0x1B;
        
      case 'buffer':
        // MessagePack 格式检查
        // 通常以 0x81-0x9F（fixmap）、0xDA-0xDB（str）等开头
        const firstByte = buffer[0];
        return (firstByte >= 0x00 && firstByte <= 0xDF) || 
               (firstByte >= 0xE0 && firstByte <= 0xFF);
        
      case 'none':
      default:
        // 尝试解析 JSON
        try {
          JSON.parse(buffer.toString('utf-8'));
          return false;
        } catch {
          return true;
        }
    }
  }
}
