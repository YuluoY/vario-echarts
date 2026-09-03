import { SchemaNode, MaterialManifest, PreparedView, PreparedNode, RegionKind, PreparedRegion } from '@variojs/types';
import { DiagnosticSink } from '@variojs/core';

type IterativeVisit = {
    node: SchemaNode;
    path: string;
    depth: number;
    parent: SchemaNode | null;
};
type TraverseBudget = {
    maxDepth?: number;
    maxNodes?: number;
};
declare function traverseIterative(root: SchemaNode, visit: (item: IterativeVisit) => boolean | void, budget?: TraverseBudget): {
    nodeCount: number;
    maxDepth: number;
};

type PrepareViewOptions = {
    maxDepth?: number;
    maxNodes?: number;
    revision?: number;
    materials?: ReadonlyMap<string, MaterialManifest>;
    materialMode?: 'legacy' | 'strict' | 'untrusted';
    diagnosticSink?: DiagnosticSink;
};
declare function getPreparedSources(view: PreparedView): ReadonlyMap<string, SchemaNode> | undefined;
declare function bindPreparedSources(view: PreparedView, sources: Map<string, SchemaNode>): void;
declare function listPreparedNodes(view: PreparedView): readonly PreparedNode[];
declare function prepareView(root: SchemaNode, options?: PrepareViewOptions): PreparedView;

type PrepareIndex = {
    nodes: PreparedNode[];
    idMap: Map<string, string>;
    childIdBuf: WeakMap<SchemaNode, string[]>;
    sourceById: Map<string, SchemaNode>;
    writes: number;
    nodeCount: number;
    maxDepth: number;
};
declare function buildPrepareIndex(root: SchemaNode, budget?: TraverseBudget): PrepareIndex;

declare function classifyRegion(node: SchemaNode): RegionKind;
declare function applyRegionClassification(nodes: PreparedNode[], sources?: ReadonlyMap<string, SchemaNode>): PreparedNode[];
declare function groupMaximalRegions(nodes: readonly PreparedNode[]): PreparedRegion[];

declare const EVENT_MODIFIERS: {
    event: readonly ["stop", "prevent", "self", "once", "capture", "passive", "native"];
    key: readonly ["enter", "tab", "delete", "esc", "space", "up", "down", "left", "right"];
    system: readonly ["ctrl", "alt", "shift", "meta", "exact"];
    mouse: readonly ["left", "right", "middle"];
};
declare function assertSupportedModifiers(eventKey: string, path: string): void;

declare function collectAffectedIds(view: PreparedView, path: string): string[];
declare function reuseUnaffected(previous: PreparedView, next: PreparedView, affected: ReadonlySet<string>): PreparedView;
declare function recompileIncremental(root: SchemaNode, previous: PreparedView, path: string, revision: number): {
    view: PreparedView;
    affectedIds: string[];
};

export { EVENT_MODIFIERS as E, type IterativeVisit as I, type PrepareViewOptions as P, type TraverseBudget as T, buildPrepareIndex as a, bindPreparedSources as b, classifyRegion as c, groupMaximalRegions as d, assertSupportedModifiers as e, applyRegionClassification as f, getPreparedSources as g, collectAffectedIds as h, reuseUnaffected as i, listPreparedNodes as l, prepareView as p, recompileIncremental as r, traverseIterative as t };
