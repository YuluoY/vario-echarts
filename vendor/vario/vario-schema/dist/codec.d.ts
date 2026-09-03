import { SchemaNode, SchemaDocument } from '@variojs/types';
export { SchemaDocument } from '@variojs/types';
import { DiagnosticSink } from '@variojs/core';

declare function getHostOnlyExtensions(node: object): Record<string, unknown> | undefined;
declare function toJsonSafe(value: unknown, host?: Record<string, unknown>, path?: string): unknown;
declare function serializeSchema(node: SchemaNode): string;
declare function parseSchema(raw: string, options?: {
    diagnosticSink?: DiagnosticSink;
}): SchemaDocument;

export { getHostOnlyExtensions, parseSchema, serializeSchema, toJsonSafe };
