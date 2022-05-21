/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../blog/v1beta1/params";
import { Comment } from "../../blog/v1beta1/comment";

export const protobufPackage = "blog.v1beta1";

/** GenesisState defines the blog module's genesis state. */
export interface GenesisState {
  $type: "blog.v1beta1.GenesisState";
  params: Params | undefined;
  commentList: Comment[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  commentCount: number;
}

function createBaseGenesisState(): GenesisState {
  return {
    $type: "blog.v1beta1.GenesisState",
    params: undefined,
    commentList: [],
    commentCount: 0,
  };
}

export const GenesisState = {
  $type: "blog.v1beta1.GenesisState" as const,

  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.commentList) {
      Comment.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.commentCount !== 0) {
      writer.uint32(24).uint64(message.commentCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.commentList.push(Comment.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commentCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      $type: GenesisState.$type,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      commentList: Array.isArray(object?.commentList)
        ? object.commentList.map((e: any) => Comment.fromJSON(e))
        : [],
      commentCount: isSet(object.commentCount)
        ? Number(object.commentCount)
        : 0,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.commentList) {
      obj.commentList = message.commentList.map((e) =>
        e ? Comment.toJSON(e) : undefined
      );
    } else {
      obj.commentList = [];
    }
    message.commentCount !== undefined &&
      (obj.commentCount = Math.round(message.commentCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.commentList =
      object.commentList?.map((e) => Comment.fromPartial(e)) || [];
    message.commentCount = object.commentCount ?? 0;
    return message;
  },
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
