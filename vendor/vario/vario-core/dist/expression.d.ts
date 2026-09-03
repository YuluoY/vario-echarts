export { R as ResultMemo, c as clearCache, q as compileExpressionPlan, t as compileExpressionPlanUncached, a as evaluate, e as evaluateExpression, y as evaluateExpressionPlan, b as extractDependencies, k as extractExpression, o as extractExpressionsRecursively, d as getCacheStats, g as getCachedExpression, u as getCachedExpressionPlan, h as getCapability, x as getPlanCacheStats, f as getPolicyFingerprint, i as invalidateCache, m as isExpressionFormat, j as listCapabilities, l as lookupCachedExpression, n as normalizeExpression, p as parseExpression, r as registerCapability, s as setCachedExpression, w as sharedPlanCache, v as validateAST } from './plan-evaluator-9u6bUK0o.js';
import * as ESTree from '@babel/types';
import { RuntimeContext } from '@variojs/types';
import './diagnostic-sink-DeR_n259.js';

/**
 * 表达式编译器
 *
 * 功能：
 * - 将简单表达式编译为直接访问函数
 * - 提升简单表达式的执行性能
 * - 复杂表达式回退到解释执行
 */

/**
 * 编译后的表达式函数类型
 */
type CompiledExpression = (ctx: RuntimeContext) => unknown;
/**
 * 编译简单表达式为直接访问函数
 *
 * @param ast AST 节点
 * @returns 编译后的函数，如果无法编译则返回 null
 */
declare function compileSimpleExpression(ast: ESTree.Node): CompiledExpression | null;
/**
 * 获取或编译表达式
 *
 * @param expr 表达式字符串
 * @param ast AST 节点（已解析）
 * @returns 编译后的函数，如果无法编译则返回 null
 */
declare function getCompiledExpression(expr: string, ast: ESTree.Node): CompiledExpression | null;
/**
 * 清除编译缓存
 */
declare function clearCompiledCache(): void;

export { type CompiledExpression, clearCompiledCache, compileSimpleExpression, getCompiledExpression };
