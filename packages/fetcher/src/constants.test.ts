import { describe, it, expect } from 'vitest';
import {
  ECHARTS_API,
  DEFAULT_DATA_SOURCE,
  GLOBAL_OPTION_KEYS,
  BOX_OPTION_KEYS,
  DEFAULT_CONFIG,
  EXTENSION_MAP,
} from './constants.js';

describe('constants', () => {
  describe('ECHARTS_API', () => {
    it('should have OPTION_OUTLINE endpoint', () => {
      expect(ECHARTS_API.OPTION_OUTLINE).toBe(
        'https://echarts.apache.org/zh/documents/option-parts/option-outline.js'
      );
    });

    it('should have OPTION_TYPES endpoint', () => {
      expect(ECHARTS_API.OPTION_TYPES).toBe(
        'https://echarts.apache.org/zh/documents/option-parts/option.js'
      );
    });

    it('should have OPTION_DETAIL function', () => {
      expect(typeof ECHARTS_API.OPTION_DETAIL).toBe('function');
      expect(ECHARTS_API.OPTION_DETAIL('title')).toBe(
        'https://echarts.apache.org/zh/documents/option-parts/option.title.js'
      );
      expect(ECHARTS_API.OPTION_DETAIL('legend')).toBe(
        'https://echarts.apache.org/zh/documents/option-parts/option.legend.js'
      );
    });
  });

  describe('DEFAULT_DATA_SOURCE', () => {
    it('should have correct name', () => {
      expect(DEFAULT_DATA_SOURCE.name).toBe('official');
    });

    it('should have correct baseUrl', () => {
      expect(DEFAULT_DATA_SOURCE.baseUrl).toBe('https://echarts.apache.org/zh');
    });

    it('should have correct paths', () => {
      expect(DEFAULT_DATA_SOURCE.optionOutlinePath).toBe('/documents/option-parts/option-outline.js');
      expect(DEFAULT_DATA_SOURCE.optionTypesPath).toBe('/documents/option-parts/option.js');
    });

    it('should have working optionDetailPath function', () => {
      expect(typeof DEFAULT_DATA_SOURCE.optionDetailPath).toBe('function');
      expect(DEFAULT_DATA_SOURCE.optionDetailPath('title')).toBe('/documents/option-parts/option.title.js');
    });
  });

  describe('GLOBAL_OPTION_KEYS', () => {
    it('should be an array', () => {
      expect(Array.isArray(GLOBAL_OPTION_KEYS)).toBe(true);
    });

    it('should contain expected global options', () => {
      const expectedKeys = [
        'options',
        'animation',
        'darkMode',
        'color',
        'backgroundColor',
        'textStyle',
        'media',
      ];

      for (const key of expectedKeys) {
        expect(GLOBAL_OPTION_KEYS).toContain(key);
      }
    });

    it('should contain animation related options', () => {
      expect(GLOBAL_OPTION_KEYS).toContain('animationDelay');
      expect(GLOBAL_OPTION_KEYS).toContain('animationDuration');
      expect(GLOBAL_OPTION_KEYS).toContain('animationEasing');
      expect(GLOBAL_OPTION_KEYS).toContain('animationThreshold');
    });
  });

  describe('BOX_OPTION_KEYS', () => {
    it('should be an array', () => {
      expect(Array.isArray(BOX_OPTION_KEYS)).toBe(true);
    });

    it('should contain dataZoom', () => {
      expect(BOX_OPTION_KEYS).toContain('dataZoom');
    });

    it('should contain visualMap', () => {
      expect(BOX_OPTION_KEYS).toContain('visualMap');
    });
  });

  describe('DEFAULT_CONFIG', () => {
    it('should have correct cache settings', () => {
      expect(DEFAULT_CONFIG.cacheDir).toBe('data/.cache');
      expect(DEFAULT_CONFIG.cacheEnabled).toBe(true);
    });

    it('should have correct concurrency settings', () => {
      expect(DEFAULT_CONFIG.concurrency).toBe(6);
      expect(DEFAULT_CONFIG.retries).toBe(3);
      expect(DEFAULT_CONFIG.retryDelay).toBe(1000);
      expect(DEFAULT_CONFIG.timeout).toBe(30000);
    });

    it('should have correct compression setting', () => {
      expect(DEFAULT_CONFIG.compress).toBe('none');
    });

    it('should have correct format setting', () => {
      expect(DEFAULT_CONFIG.format).toBe('mjs');
    });
  });

  describe('EXTENSION_MAP', () => {
    it('should map none to mjs', () => {
      expect(EXTENSION_MAP.none).toBe('mjs');
    });

    it('should map zip to zip', () => {
      expect(EXTENSION_MAP.zip).toBe('zip');
    });

    it('should map brotli to br', () => {
      expect(EXTENSION_MAP.brotli).toBe('br');
    });

    it('should map buffer to bin', () => {
      expect(EXTENSION_MAP.buffer).toBe('bin');
    });

    it('should map default to mjs', () => {
      expect(EXTENSION_MAP.default).toBe('mjs');
    });
  });
});
