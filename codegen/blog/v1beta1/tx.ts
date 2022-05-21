/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "blog.v1beta1";

export interface CreatePostRequest {
  $type: "blog.v1beta1.CreatePostRequest";
  creator: string;
  title: string;
  body: string;
  id: number;
}

export interface CreatePostResponse {
  $type: "blog.v1beta1.CreatePostResponse";
  id: number;
}

export interface CreateCommentRequest {
  $type: "blog.v1beta1.CreateCommentRequest";
  creator: string;
  postId: number;
  title: string;
  body: string;
  id: number;
}

export interface CreateCommentResponse {
  $type: "blog.v1beta1.CreateCommentResponse";
  id: number;
}

export interface DeleteCommentRequest {
  $type: "blog.v1beta1.DeleteCommentRequest";
  creator: string;
  commentId: number;
  postId: number;
  id: number;
}

export interface DeleteCommentResponse {
  $type: "blog.v1beta1.DeleteCommentResponse";
  id: number;
}

function createBaseCreatePostRequest(): CreatePostRequest {
  return {
    $type: "blog.v1beta1.CreatePostRequest",
    creator: "",
    title: "",
    body: "",
    id: 0,
  };
}

export const CreatePostRequest = {
  $type: "blog.v1beta1.CreatePostRequest" as const,

  encode(
    message: CreatePostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    if (message.id !== 0) {
      writer.uint32(32).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.body = reader.string();
          break;
        case 4:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePostRequest {
    return {
      $type: CreatePostRequest.$type,
      creator: isSet(object.creator) ? String(object.creator) : "",
      title: isSet(object.title) ? String(object.title) : "",
      body: isSet(object.body) ? String(object.body) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: CreatePostRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePostRequest>, I>>(
    object: I
  ): CreatePostRequest {
    const message = createBaseCreatePostRequest();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreatePostRequest.$type, CreatePostRequest);

function createBaseCreatePostResponse(): CreatePostResponse {
  return { $type: "blog.v1beta1.CreatePostResponse", id: 0 };
}

export const CreatePostResponse = {
  $type: "blog.v1beta1.CreatePostResponse" as const,

  encode(
    message: CreatePostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePostResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePostResponse {
    return {
      $type: CreatePostResponse.$type,
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: CreatePostResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePostResponse>, I>>(
    object: I
  ): CreatePostResponse {
    const message = createBaseCreatePostResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreatePostResponse.$type, CreatePostResponse);

function createBaseCreateCommentRequest(): CreateCommentRequest {
  return {
    $type: "blog.v1beta1.CreateCommentRequest",
    creator: "",
    postId: 0,
    title: "",
    body: "",
    id: 0,
  };
}

export const CreateCommentRequest = {
  $type: "blog.v1beta1.CreateCommentRequest" as const,

  encode(
    message: CreateCommentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== 0) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(34).string(message.body);
    }
    if (message.id !== 0) {
      writer.uint32(40).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateCommentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCommentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.postId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateCommentRequest {
    return {
      $type: CreateCommentRequest.$type,
      creator: isSet(object.creator) ? String(object.creator) : "",
      postId: isSet(object.postId) ? Number(object.postId) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      body: isSet(object.body) ? String(object.body) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: CreateCommentRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.postId !== undefined && (obj.postId = Math.round(message.postId));
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateCommentRequest>, I>>(
    object: I
  ): CreateCommentRequest {
    const message = createBaseCreateCommentRequest();
    message.creator = object.creator ?? "";
    message.postId = object.postId ?? 0;
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreateCommentRequest.$type, CreateCommentRequest);

function createBaseCreateCommentResponse(): CreateCommentResponse {
  return { $type: "blog.v1beta1.CreateCommentResponse", id: 0 };
}

export const CreateCommentResponse = {
  $type: "blog.v1beta1.CreateCommentResponse" as const,

  encode(
    message: CreateCommentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateCommentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCommentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateCommentResponse {
    return {
      $type: CreateCommentResponse.$type,
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: CreateCommentResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateCommentResponse>, I>>(
    object: I
  ): CreateCommentResponse {
    const message = createBaseCreateCommentResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CreateCommentResponse.$type, CreateCommentResponse);

function createBaseDeleteCommentRequest(): DeleteCommentRequest {
  return {
    $type: "blog.v1beta1.DeleteCommentRequest",
    creator: "",
    commentId: 0,
    postId: 0,
    id: 0,
  };
}

export const DeleteCommentRequest = {
  $type: "blog.v1beta1.DeleteCommentRequest" as const,

  encode(
    message: DeleteCommentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.commentId !== 0) {
      writer.uint32(16).uint64(message.commentId);
    }
    if (message.postId !== 0) {
      writer.uint32(24).uint64(message.postId);
    }
    if (message.id !== 0) {
      writer.uint32(32).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteCommentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteCommentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.commentId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.postId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteCommentRequest {
    return {
      $type: DeleteCommentRequest.$type,
      creator: isSet(object.creator) ? String(object.creator) : "",
      commentId: isSet(object.commentId) ? Number(object.commentId) : 0,
      postId: isSet(object.postId) ? Number(object.postId) : 0,
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: DeleteCommentRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.commentId !== undefined &&
      (obj.commentId = Math.round(message.commentId));
    message.postId !== undefined && (obj.postId = Math.round(message.postId));
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteCommentRequest>, I>>(
    object: I
  ): DeleteCommentRequest {
    const message = createBaseDeleteCommentRequest();
    message.creator = object.creator ?? "";
    message.commentId = object.commentId ?? 0;
    message.postId = object.postId ?? 0;
    message.id = object.id ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DeleteCommentRequest.$type, DeleteCommentRequest);

function createBaseDeleteCommentResponse(): DeleteCommentResponse {
  return { $type: "blog.v1beta1.DeleteCommentResponse", id: 0 };
}

export const DeleteCommentResponse = {
  $type: "blog.v1beta1.DeleteCommentResponse" as const,

  encode(
    message: DeleteCommentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteCommentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteCommentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteCommentResponse {
    return {
      $type: DeleteCommentResponse.$type,
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: DeleteCommentResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteCommentResponse>, I>>(
    object: I
  ): DeleteCommentResponse {
    const message = createBaseDeleteCommentResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

messageTypeRegistry.set(DeleteCommentResponse.$type, DeleteCommentResponse);

/** Msg defines the Msg service. */
export interface MsgService {
  CreatePost(request: CreatePostRequest): Promise<CreatePostResponse>;
  CreateComment(request: CreateCommentRequest): Promise<CreateCommentResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteComment(request: DeleteCommentRequest): Promise<DeleteCommentResponse>;
}

export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePost = this.CreatePost.bind(this);
    this.CreateComment = this.CreateComment.bind(this);
    this.DeleteComment = this.DeleteComment.bind(this);
  }
  CreatePost(request: CreatePostRequest): Promise<CreatePostResponse> {
    const data = CreatePostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blog.v1beta1.MsgService",
      "CreatePost",
      data
    );
    return promise.then((data) =>
      CreatePostResponse.decode(new _m0.Reader(data))
    );
  }

  CreateComment(request: CreateCommentRequest): Promise<CreateCommentResponse> {
    const data = CreateCommentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blog.v1beta1.MsgService",
      "CreateComment",
      data
    );
    return promise.then((data) =>
      CreateCommentResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteComment(request: DeleteCommentRequest): Promise<DeleteCommentResponse> {
    const data = DeleteCommentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blog.v1beta1.MsgService",
      "DeleteComment",
      data
    );
    return promise.then((data) =>
      DeleteCommentResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
