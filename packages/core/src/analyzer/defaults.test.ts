import { describe, it, expect } from 'vitest';
import {
  isSpecialKeyword,
  parseDefaultValue,
  checkSpecialKeywords,
  LINE_STYLE_KEYWORDS,
  POSITION_KEYWORDS,
  FONT_WEIGHT_KEYWORDS,
  FONT_STYLE_KEYWORDS,
} from './defaults.js';

describe('defaults', () => {
  describe('LINE_STYLE_KEYWORDS', () => {
    it('should contain line style keywords', () => {
      expect(LINE_STYLE_KEYWORDS).toContain('solid');
      expect(LINE_STYLE_KEYWORDS).toContain('dashed');
      expect(LINE_STYLE_KEYWORDS).toContain('dotted');
    });
  });

  describe('POSITION_KEYWORDS', () => {
    it('should contain position keywords', () => {
      expect(POSITION_KEYWORDS).toContain('left');
      expect(POSITION_KEYWORDS).toContain('right');
      expect(POSITION_KEYWORDS).toContain('center');
      expect(POSITION_KEYWORDS).toContain('top');
      expect(POSITION_KEYWORDS).toContain('bottom');
      expect(POSITION_KEYWORDS).toContain('middle');
      expect(POSITION_KEYWORDS).toContain('auto');
    });
  });

  describe('FONT_WEIGHT_KEYWORDS', () => {
    it('should contain font weight keywords', () => {
      expect(FONT_WEIGHT_KEYWORDS).toContain('normal');
      expect(FONT_WEIGHT_KEYWORDS).toContain('bold');
      expect(FONT_WEIGHT_KEYWORDS).toContain('bolder');
      expect(FONT_WEIGHT_KEYWORDS).toContain('lighter');
    });
  });

  describe('FONT_STYLE_KEYWORDS', () => {
    it('should contain font style keywords', () => {
      expect(FONT_STYLE_KEYWORDS).toContain('normal');
      expect(FONT_STYLE_KEYWORDS).toContain('italic');
      expect(FONT_STYLE_KEYWORDS).toContain('oblique');
    });
  });

  describe('isSpecialKeyword', () => {
    it('should return true for special keywords', () => {
      expect(isSpecialKeyword('solid')).toBe(true);
      expect(isSpecialKeyword('dashed')).toBe(true);
      expect(isSpecialKeyword('left')).toBe(true);
      expect(isSpecialKeyword('center')).toBe(true);
      expect(isSpecialKeyword('bold')).toBe(true);
      expect(isSpecialKeyword('italic')).toBe(true);
      expect(isSpecialKeyword('auto')).toBe(true);
      expect(isSpecialKeyword('none')).toBe(true);
      expect(isSpecialKeyword('transparent')).toBe(true);
    });

    it('should return true for quoted keywords', () => {
      expect(isSpecialKeyword('"solid"')).toBe(true);
      expect(isSpecialKeyword("'left'")).toBe(true);
    });

    it('should be case insensitive', () => {
      expect(isSpecialKeyword('SOLID')).toBe(true);
      expect(isSpecialKeyword('Left')).toBe(true);
      expect(isSpecialKeyword('BOLD')).toBe(true);
    });

    it('should return false for non-string values', () => {
      expect(isSpecialKeyword(123)).toBe(false);
      expect(isSpecialKeyword(null)).toBe(false);
      expect(isSpecialKeyword(undefined)).toBe(false);
      expect(isSpecialKeyword({})).toBe(false);
      expect(isSpecialKeyword([])).toBe(false);
    });

    it('should return false for non-special strings', () => {
      expect(isSpecialKeyword('hello')).toBe(false);
      expect(isSpecialKeyword('world')).toBe(false);
      expect(isSpecialKeyword('123')).toBe(false);
    });
  });

  describe('parseDefaultValue', () => {
    it('should return the value as is for boolean', () => {
      expect(parseDefaultValue(true)).toBe(true);
      expect(parseDefaultValue(false)).toBe(false);
    });

    it('should return the value as is for number', () => {
      expect(parseDefaultValue(42)).toBe(42);
      expect(parseDefaultValue(3.14)).toBe(3.14);
      expect(parseDefaultValue(0)).toBe(0);
    });

    it('should return the value as is for null/undefined', () => {
      expect(parseDefaultValue(null)).toBe(null);
      expect(parseDefaultValue(undefined)).toBe(undefined);
    });

    it('should parse numeric strings to numbers', () => {
      expect(parseDefaultValue('42')).toBe(42);
      expect(parseDefaultValue('3.14')).toBe(3.14);
      expect(parseDefaultValue('0')).toBe(0);
      expect(parseDefaultValue('-10')).toBe(-10);
    });

    it('should parse boolean strings', () => {
      expect(parseDefaultValue('true')).toBe(true);
      expect(parseDefaultValue('false')).toBe(false);
    });

    it('should preserve special keywords as strings', () => {
      expect(parseDefaultValue('solid')).toBe('solid');
      expect(parseDefaultValue('left')).toBe('left');
      expect(parseDefaultValue('bold')).toBe('bold');
    });

    it('should handle quoted strings', () => {
      expect(parseDefaultValue('"hello"')).toBe('hello');
      expect(parseDefaultValue("'world'")).toBe('world');
    });

    it('should trim whitespace', () => {
      expect(parseDefaultValue('  42  ')).toBe(42);
      expect(parseDefaultValue('  true  ')).toBe(true);
    });

    it('should handle arrays and objects as is', () => {
      const arr = [1, 2, 3];
      const obj = { a: 1 };
      expect(parseDefaultValue(arr)).toBe(arr);
      expect(parseDefaultValue(obj)).toBe(obj);
    });
  });

  describe('checkSpecialKeywords', () => {
    it('should return array with keyword when found', () => {
      expect(checkSpecialKeywords('solid')).toEqual(['solid']);
      expect(checkSpecialKeywords('left')).toEqual(['left']);
      expect(checkSpecialKeywords('bold')).toEqual(['bold']);
    });

    it('should handle quoted keywords', () => {
      expect(checkSpecialKeywords('"solid"')).toEqual(['solid']);
      expect(checkSpecialKeywords("'left'")).toEqual(['left']);
    });

    it('should return empty array for non-special strings', () => {
      expect(checkSpecialKeywords('hello')).toEqual([]);
      expect(checkSpecialKeywords('world')).toEqual([]);
    });

    it('should return empty array for non-string values', () => {
      expect(checkSpecialKeywords(123)).toEqual([]);
      expect(checkSpecialKeywords(null)).toEqual([]);
      expect(checkSpecialKeywords(undefined)).toEqual([]);
    });
  });
});
