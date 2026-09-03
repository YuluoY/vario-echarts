import { VarioDiagnostic } from '@variojs/types';

type DiagnosticEvent = {
    readonly name: string;
    readonly sessionId?: string;
    readonly nodeId?: string;
    readonly planId?: string;
    readonly executionId?: string;
    readonly durationMs?: number;
    readonly count?: number;
    readonly engineId?: string;
    readonly pageId?: string;
    readonly schemaId?: string;
    readonly revision?: number;
    readonly actionId?: string;
    readonly expressionId?: string;
    readonly diagnostic?: VarioDiagnostic;
};
type DiagnosticSink = {
    emit: (event: DiagnosticEvent) => void;
};
type SinkOptions = {
    sampleRate?: number;
    maxQueue?: number;
};
declare function createDiagnosticSink(inner?: DiagnosticSink, options?: SinkOptions): DiagnosticSink;
declare const noopDiagnosticSink: DiagnosticSink;

export { type DiagnosticSink as D, type DiagnosticEvent as a, createDiagnosticSink as c, noopDiagnosticSink as n };
