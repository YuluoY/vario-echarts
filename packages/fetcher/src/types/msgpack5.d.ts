/**
 * Type declarations for msgpack5
 */

declare module 'msgpack5' {
  interface MsgPack {
    encode(obj: unknown): Buffer;
    decode(buffer: Buffer): unknown;
  }

  function msgpack5(): MsgPack;
  export = msgpack5;
}
