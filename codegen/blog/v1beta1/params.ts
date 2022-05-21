/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "blog.v1beta1";

/** Params defines the parameters for the module. */
export interface Params {
  $type: "blog.v1beta1.Params";
}

function createBaseParams(): Params {
  return { $type: "blog.v1beta1.Params" };
}

export const Params = {
  $type: "blog.v1beta1.Params" as const,

  encode(_: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): Params {
    return {
      $type: Params.$type,
    };
  },

  toJSON(_: Params): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(_: I): Params {
    const message = createBaseParams();
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | "$type">,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
