import * as ESTree from '@babel/types';

/**
 * 表达式解析器
 *
 * 使用 @babel/parser 解析 JavaScript 表达式为 AST
 * 移除 models. 前缀支持
 */

/**
 * 解析表达式为 AST
 *
 * @param expr 表达式字符串（如 "user.name + 1"）
 * @returns ESTree.Node AST 节点
 */
declare function parseExpression(expr: string): ESTree.Node;

export { parseExpression };
