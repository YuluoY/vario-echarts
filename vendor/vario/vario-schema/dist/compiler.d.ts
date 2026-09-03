export { E as EVENT_MODIFIERS, I as IterativeVisit, P as PrepareViewOptions, T as TraverseBudget, f as applyRegionClassification, e as assertSupportedModifiers, b as bindPreparedSources, a as buildPrepareIndex, c as classifyRegion, h as collectAffectedIds, g as getPreparedSources, d as groupMaximalRegions, l as listPreparedNodes, p as prepareView, r as recompileIncremental, i as reuseUnaffected, t as traverseIterative } from './index-DdPhlpvY.js';
import { SchemaNode, ExpressionPlan, Action, LoopPlan, SlotPlan } from '@variojs/types';
import '@variojs/core';

declare function collectNodeExpressionSources(node: SchemaNode): string[];
declare function compileExpressionSources(sources: Iterable<string>, into: Map<string, ExpressionPlan>, aliases?: readonly string[]): string[];

type PreparedActionMap = Readonly<Record<string, readonly Action[]>>;
declare function compileNodeActions(node: SchemaNode): PreparedActionMap;

declare function compileLoopPlan(node: SchemaNode, nodeId: string, templateIds: readonly string[], ancestorAliases?: readonly string[]): LoopPlan | null;

declare function compileSlotPlan(node: SchemaNode, nodeId: string, fallbackIds: readonly string[]): SlotPlan | null;

export { collectNodeExpressionSources, compileExpressionSources, compileLoopPlan, compileNodeActions, compileSlotPlan };
