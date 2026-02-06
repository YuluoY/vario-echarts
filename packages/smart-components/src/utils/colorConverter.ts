/**
 * 颜色格式转换工具
 * 用于在 CSS 渐变和 ECharts 渐变对象之间转换
 */

export interface EChartsLinearGradient {
  type: 'linear';
  x: number;
  y: number;
  x2: number;
  y2: number;
  colorStops: Array<{ offset: number; color: string }>;
  global?: boolean;
}

export interface EChartsRadialGradient {
  type: 'radial';
  x: number;
  y: number;
  r: number;
  colorStops: Array<{ offset: number; color: string }>;
  global?: boolean;
}

export type EChartsGradient = EChartsLinearGradient | EChartsRadialGradient;

// 正则表达式
const angleRegex = /(\d+)deg/;
const colorStopRegex = /(rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+(?:\s*,\s*\d*\.?\d+)?\s*\)|#[0-9a-fA-F]{3,8})\s*(\d+)%/g;
const hexColorRegex = /#[0-9a-fA-F]{3,8}/g;

/**
 * 提取渐变色详细信息（参考用户提供的实现）
 * @param gradient CSS 渐变色字符串
 * @returns 渐变色信息或原字符串（如果不是渐变）
 */
export function extractGradientDetails(gradient: string): { angle: string | null; colorStops: Array<{ color: string; offset: number }> } | string {
  // 字符串长度小于30说明不是渐变色
  if (gradient.length < 30) return gradient;

  // 匹配角度
  const angleMatch = gradient.match(angleRegex);
  const angle = angleMatch ? angleMatch[0] : null;

  // 匹配 rgba 或 rgb 颜色值以及其对应的百分比
  const colorStops: Array<{ color: string; offset: number }> = [];
  let match;

  // 重置正则的 lastIndex
  colorStopRegex.lastIndex = 0;

  while ((match = colorStopRegex.exec(gradient)) !== null) {
    const color = match[1];
    const percentage = match[2];
    // 将百分比转换为小数
    const offset = parseFloat(percentage) / 100;

    colorStops.push({ color, offset });
  }

  // 如果没有匹配到 rgba/rgb 格式，尝试匹配 hex 颜色
  if (colorStops.length === 0) {
    const hexColors = gradient.match(hexColorRegex) || [];
    const percentRegex = /(\d+)%/g;
    const percents: string[] = [];
    let pMatch;
    while ((pMatch = percentRegex.exec(gradient)) !== null) {
      percents.push(pMatch[1]);
    }

    for (let i = 0; i < Math.min(hexColors.length, percents.length); i++) {
      colorStops.push({
        color: hexColors[i],
        offset: parseFloat(percents[i]) / 100
      });
    }
  }

  return { angle, colorStops };
}

/**
 * 将 CSS linear-gradient 转换为 ECharts 渐变对象
 * @param cssGradient CSS 渐变字符串，如 'linear-gradient(90deg, #ff0000 0%, #0000ff 100%)'
 * @returns ECharts 渐变对象
 */
export function cssLinearGradientToECharts(cssGradient: string): EChartsLinearGradient | null {
  // 使用 extractGradientDetails 提取信息
  const details = extractGradientDetails(cssGradient);

  // 如果返回的是字符串，说明不是有效的渐变
  if (typeof details === 'string') return null;

  // 解析角度，默认 180deg（从上到下）
  let angle = 180;
  if (details.angle) {
    angle = parseInt(details.angle, 10);
  } else {
    // 尝试匹配方向关键词如 'to right', 'to bottom'
    const directionMatch = cssGradient.match(/to\s+(top|right|bottom|left|top right|right top|bottom right|right bottom|bottom left|left bottom|top left|left top)/);
    if (directionMatch) {
      const direction = directionMatch[1];
      const directionMap: Record<string, number> = {
        'top': 0,
        'right': 90,
        'bottom': 180,
        'left': 270,
        'top right': 45,
        'right top': 45,
        'bottom right': 135,
        'right bottom': 135,
        'bottom left': 225,
        'left bottom': 225,
        'top left': 315,
        'left top': 315
      };
      angle = directionMap[direction] ?? 180;
    }
  }

  // 转换角度为 ECharts 坐标
  // ECharts: (x,y) -> (x2,y2) 表示渐变方向
  // 0度=向上, 90度=向右, 180度=向下, 270度=向左
  const rad = ((angle - 90) * Math.PI) / 180;
  let x = 0, y = 0, x2 = 0, y2 = 0;

  if (angle === 0) {
    x = 0; y = 1; x2 = 0; y2 = 0;
  } else if (angle === 90) {
    x = 0; y = 0; x2 = 1; y2 = 0;
  } else if (angle === 180) {
    x = 0; y = 0; x2 = 0; y2 = 1;
  } else if (angle === 270) {
    x = 1; y = 0; x2 = 0; y2 = 0;
  } else {
    x = 0.5 - Math.cos(rad) * 0.5;
    y = 0.5 - Math.sin(rad) * 0.5;
    x2 = 0.5 + Math.cos(rad) * 0.5;
    y2 = 0.5 + Math.sin(rad) * 0.5;
  }

  // 如果没有解析到颜色停止点，返回 null
  if (details.colorStops.length === 0) {
    return null;
  }

  return {
    type: 'linear',
    x,
    y,
    x2,
    y2,
    colorStops: details.colorStops,
    global: false
  };
}

/**
 * 将 CSS radial-gradient 转换为 ECharts 渐变对象
 * @param cssGradient CSS 径向渐变字符串
 * @returns ECharts 径向渐变对象
 */
export function cssRadialGradientToECharts(cssGradient: string): EChartsRadialGradient | null {
  const match = cssGradient.match(/radial-gradient\(([^)]+)\)/);
  if (!match) return null;

  const content = match[1];
  
  // 默认值
  let x = 0.5, y = 0.5, r = 0.5;
  let colorStopsStart = 0;

  // 智能分割：不分割 rgba() 或 rgb() 内部的逗号
  const parts: string[] = [];
  let current = '';
  let depth = 0;
  
  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    if (char === '(') depth++;
    if (char === ')') depth--;
    
    if (char === ',' && depth === 0) {
      parts.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  if (current.trim()) {
    parts.push(current.trim());
  }

  // 检查第一个部分是否是形状/位置信息
  const firstPart = parts[0];
  
  // vue3-colorpicker 格式：radial-gradient(circle, color1 stop1%, color2 stop2%)
  // 标准格式：radial-gradient(circle 50% at 50% 50%, ...)
  if (firstPart && (firstPart.includes('circle') || firstPart.includes('ellipse') || firstPart.includes('at') || firstPart.includes('%'))) {
    colorStopsStart = 1;
    
    // 解析位置：例如 "circle 50% at 50% 50%" 或 "circle at 30% 40%"
    const atMatch = firstPart.match(/at\s+(\d+(?:\.\d+)?%)\s+(\d+(?:\.\d+)?%)/);
    if (atMatch) {
      x = parseFloat(atMatch[1]) / 100;
      y = parseFloat(atMatch[2]) / 100;
    }
    
    // 解析半径：例如 "circle 50%"
    const sizeMatch = firstPart.match(/circle\s+(\d+(?:\.\d+)?%)/);
    if (sizeMatch) {
      r = parseFloat(sizeMatch[1]) / 100;
    }
  } else {
    // vue3-colorpicker 直接输出颜色，第一部分就是颜色
    colorStopsStart = 0;
  }

  // 解析颜色停止点
  const colorStops: Array<{ offset: number; color: string }> = [];
  for (let i = colorStopsStart; i < parts.length; i++) {
    const stop = parts[i].trim();
    
    // 更灵活的匹配：支持多种格式
    // 格式1: "rgba(r,g,b,a) 50%" 或 "#hex 50%"
    let colorMatch = stop.match(/^((?:rgba?\([^)]+\)|#[0-9a-fA-F]+|[a-z]+))\s+(\d+(?:\.\d+)?%?)$/);
    
    // 格式2: 如果没有百分比，尝试只匹配颜色（默认均匀分布）
    if (!colorMatch) {
      colorMatch = stop.match(/^(rgba?\([^)]+\)|#[0-9a-fA-F]+)$/);
      if (colorMatch) {
        const color = colorMatch[1];
        // 自动计算均匀分布的位置
        const offset = i === colorStopsStart ? 0 : (i === parts.length - 1 ? 1 : (i - colorStopsStart) / (parts.length - colorStopsStart - 1));
        colorStops.push({ offset, color });
        continue;
      }
    }
    
    if (colorMatch) {
      const color = colorMatch[1];
      const position = colorMatch[2] || '0';
      const offset = position.endsWith('%') ? parseFloat(position) / 100 : parseFloat(position);
      colorStops.push({ offset, color });
    }
  }

  // 如果仍然解析失败，尝试使用 extractGradientDetails 作为后备方案
  if (colorStops.length === 0) {
    const details = extractGradientDetails(cssGradient);
    if (typeof details !== 'string' && details.colorStops.length > 0) {
      colorStops.push(...details.colorStops);
    }
  }

  if (colorStops.length === 0) {
    console.warn('⚠️ cssRadialGradientToECharts: 无法解析颜色停止点', cssGradient);
    return null;
  }

  return {
    type: 'radial',
    x,
    y,
    r,
    colorStops,
    global: false
  };
}

/**
 * 自动检测并转换 CSS 渐变为 ECharts 格式
 * @param cssGradient CSS 渐变字符串
 * @returns ECharts 渐变对象，如果不是渐变则返回 null
 */
export function cssGradientToECharts(cssGradient: string): EChartsGradient | null {
  if (!cssGradient) return null;
  
  if (cssGradient.startsWith('linear-gradient')) {
    return cssLinearGradientToECharts(cssGradient);
  } else if (cssGradient.startsWith('radial-gradient')) {
    return cssRadialGradientToECharts(cssGradient);
  }
  
  return null;
}

/**
 * 将 ECharts 渐变对象转换为 CSS 字符串（用于预览）
 * @param gradient ECharts 渐变对象
 * @returns CSS 渐变字符串
 */
export function echartsGradientToCSS(gradient: EChartsGradient): string {
  if (gradient.type === 'linear') {
    const { x, y, x2, y2, colorStops } = gradient;
    
    // 计算角度
    const dx = x2 - x;
    const dy = y2 - y;
    let angle = Math.atan2(dy, dx) * 180 / Math.PI + 90;
    if (angle < 0) angle += 360;
    
    const stops = colorStops
      .map(stop => `${stop.color} ${Math.round(stop.offset * 100)}%`)
      .join(', ');
    
    return `linear-gradient(${Math.round(angle)}deg, ${stops})`;
  } else if (gradient.type === 'radial') {
    // 径向渐变
    const { x, y, colorStops } = gradient;
    
    // 转换 ECharts 坐标（0-1）为 CSS 百分比
    const centerX = Math.round(x * 100);
    const centerY = Math.round(y * 100);
    // 注意：CSS radial-gradient 中 circle 形状不支持百分比半径，只能是长度或关键字
    // 为了保证 CSS 合法性及颜色选择器组件的兼容性，这里省略半径大小，使用默认 sizing (farthest-corner)
    // 格式：radial-gradient(circle at center, ...)
    
    const stops = colorStops
      .map(stop => `${stop.color} ${Math.round(stop.offset * 100)}%`)
      .join(', ');
    
    // 生成标准 CSS：radial-gradient(circle at x% y%, ...)
    return `radial-gradient(circle at ${centerX}% ${centerY}%, ${stops})`;
  }
  
  return '';
}

/**
 * 智能转换颜色值：如果是渐变则转为 ECharts 格式，否则原样返回
 * @param color 颜色值（可能是纯色或 CSS 渐变）
 * @returns ECharts 可用的颜色值
 */
export function toEChartsColor(color: string | undefined): string | EChartsGradient | undefined {
  if (!color) return undefined;
  
  // 尝试转换渐变
  const gradient = cssGradientToECharts(color);
  if (gradient) {
    console.log('✅ toEChartsColor 转换成功:', color, '→', gradient);
    return gradient;
  }
  
  // 纯色直接返回
  return color;
}

/**
 * 批量转换对象中的所有颜色属性
 * @param obj 包含颜色属性的对象
 * @param colorKeys 需要转换的颜色属性名数组
 * @returns 转换后的新对象
 */
export function convertColorsInObject<T extends Record<string, any>>(
  obj: T,
  colorKeys: string[] = ['color', 'backgroundColor', 'borderColor', 'textStyle.color']
): T {
  const result = { ...obj };
  
  for (const key of colorKeys) {
    // 支持嵌套属性，如 'textStyle.color'
    const keys = key.split('.');
    let current: any = result;
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (current[keys[i]] === undefined) break;
      current = current[keys[i]];
    }
    
    const lastKey = keys[keys.length - 1];
    if (current && typeof current[lastKey] === 'string') {
      const converted = toEChartsColor(current[lastKey]);
      if (converted !== undefined) {
        current[lastKey] = converted;
      }
    }
  }
  
  return result;
}
