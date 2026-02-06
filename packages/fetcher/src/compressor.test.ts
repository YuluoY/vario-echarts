import { describe, it, expect, beforeEach } from 'vitest';
import { DataCompressor } from './compressor.js';
import type { CompressMode } from './types.js';

describe('DataCompressor', () => {
  let compressor: DataCompressor;

  beforeEach(() => {
    compressor = new DataCompressor();
  });

  describe('constructor', () => {
    it('should default to none mode', () => {
      expect(compressor.getMode()).toBe('none');
    });

    it('should accept different modes', () => {
      const modes: CompressMode[] = ['none', 'zip', 'brotli', 'buffer'];
      for (const mode of modes) {
        const c = new DataCompressor(mode);
        expect(c.getMode()).toBe(mode);
      }
    });
  });

  describe('setMode', () => {
    it('should change compression mode', () => {
      compressor.setMode('zip');
      expect(compressor.getMode()).toBe('zip');

      compressor.setMode('brotli');
      expect(compressor.getMode()).toBe('brotli');
    });
  });

  describe('compress/decompress - none mode', () => {
    it('should handle simple objects', () => {
      const data = { name: 'test', value: 123 };
      const compressed = compressor.compress(data);
      const decompressed = compressor.decompress(compressed);
      expect(decompressed).toEqual(data);
    });

    it('should handle nested objects', () => {
      const data = {
        level1: {
          level2: {
            level3: 'deep value',
          },
        },
        array: [1, 2, 3],
      };
      const compressed = compressor.compress(data);
      const decompressed = compressor.decompress(compressed);
      expect(decompressed).toEqual(data);
    });

    it('should handle arrays', () => {
      const data = [1, 2, 3, { nested: true }];
      const compressed = compressor.compress(data);
      const decompressed = compressor.decompress(compressed);
      expect(decompressed).toEqual(data);
    });

    it('should handle special characters', () => {
      const data = {
        chinese: '中文测试',
        emoji: '🎉🎊',
        special: '!@#$%^&*()',
      };
      const compressed = compressor.compress(data);
      const decompressed = compressor.decompress(compressed);
      expect(decompressed).toEqual(data);
    });
  });

  describe('compress/decompress - zip mode', () => {
    beforeEach(() => {
      compressor.setMode('zip');
    });

    it('should compress and decompress data', () => {
      const data = { test: 'data', number: 42 };
      const compressed = compressor.compress(data);
      expect(compressed).toBeInstanceOf(Buffer);
      expect(compressed.length).toBeGreaterThan(0);

      const decompressed = compressor.decompress(compressed);
      expect(decompressed).toEqual(data);
    });

    it('should produce smaller output for repetitive data', () => {
      const data = { text: 'a'.repeat(1000) };
      const jsonSize = Buffer.from(JSON.stringify(data)).length;
      const compressed = compressor.compress(data);
      expect(compressed.length).toBeLessThan(jsonSize);
    });
  });

  describe('compress/decompress - brotli mode', () => {
    beforeEach(() => {
      compressor.setMode('brotli');
    });

    it('should compress and decompress data', () => {
      const data = { test: 'data', number: 42, nested: { array: [1, 2, 3] } };
      const compressed = compressor.compress(data);
      expect(compressed).toBeInstanceOf(Buffer);
      expect(compressed.length).toBeGreaterThan(0);

      const decompressed = compressor.decompress(compressed);
      expect(decompressed).toEqual(data);
    });
  });

  describe('compress/decompress - buffer mode', () => {
    beforeEach(() => {
      compressor.setMode('buffer');
    });

    it('should compress and decompress data', () => {
      const data = { test: 'data', number: 42, bool: true };
      const compressed = compressor.compress(data);
      expect(compressed).toBeInstanceOf(Buffer);
      expect(compressed.length).toBeGreaterThan(0);

      const decompressed = compressor.decompress(compressed);
      expect(decompressed).toEqual(data);
    });

    it('should handle complex nested structures', () => {
      const data = {
        users: [
          { id: 1, name: 'User 1', tags: ['admin', 'user'] },
          { id: 2, name: 'User 2', tags: ['user'] },
        ],
        settings: {
          theme: 'dark',
          notifications: true,
        },
      };
      const compressed = compressor.compress(data);
      const decompressed = compressor.decompress(compressed);
      expect(decompressed).toEqual(data);
    });
  });

  describe('getFileExtension', () => {
    it('should return correct extensions', () => {
      expect(new DataCompressor('none').getFileExtension()).toBe('mjs');
      expect(new DataCompressor('zip').getFileExtension()).toBe('zip');
      expect(new DataCompressor('brotli').getFileExtension()).toBe('br');
      expect(new DataCompressor('buffer').getFileExtension()).toBe('bin');
    });
  });

  describe('isCompressed', () => {
    it('should detect zip format', () => {
      const zipData = Buffer.from([0x50, 0x4B, 0x03, 0x04]);
      expect(DataCompressor.isCompressed(zipData, 'zip')).toBe(true);

      const notZipData = Buffer.from([0x00, 0x00]);
      expect(DataCompressor.isCompressed(notZipData, 'zip')).toBe(false);
    });

    it('should detect brotli format', () => {
      // Brotli compressed data typically starts with 0x0B (11 in decimal)
      const brotliData = Buffer.from([0x0B, 0x07, 0x80]);
      expect(DataCompressor.isCompressed(brotliData, 'brotli')).toBe(true);

      // JSON data should not be detected as brotli
      const jsonData = Buffer.from('{"test": true}');
      expect(DataCompressor.isCompressed(jsonData, 'brotli')).toBe(false);
    });

    it('should return false for empty buffer', () => {
      const emptyBuffer = Buffer.alloc(0);
      expect(DataCompressor.isCompressed(emptyBuffer, 'zip')).toBe(false);
      expect(DataCompressor.isCompressed(emptyBuffer, 'none')).toBe(false);
    });

    it('should return false for buffer with only one byte', () => {
      const singleByte = Buffer.from([0x50]);
      expect(DataCompressor.isCompressed(singleByte, 'zip')).toBe(false);
    });
  });
});
