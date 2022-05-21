/* eslint-disable */
import { messageTypeRegistry } from "../../typeRegistry";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../blog/v1beta1/params";
import {
  PageRequest,
  PageResponse,
} from "../../cosmos/base/query/v1beta1/pagination";
import { Post } from "../../blog/v1beta1/post";
import { Comment } from "../../blog/v1beta1/comment";

export const protobufPackage = "blog.v1beta1";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface ParamsRequest {
  $type: "blog.v1beta1.ParamsRequest";
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface ParamsResponse {
  $type: "blog.v1beta1.ParamsResponse";
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface PostsRequest {
  $type: "blog.v1beta1.PostsRequest";
  pagination: PageRequest | undefined;
}

export interface PostsResponse {
  $type: "blog.v1beta1.PostsResponse";
  post: Post[];
  pagination: PageResponse | undefined;
}

export interface CommentRequest {
  $type: "blog.v1beta1.CommentRequest";
  id: number;
}

export interface CommentResponse {
  $type: "blog.v1beta1.CommentResponse";
  comment: Comment | undefined;
}

export interface CommentAllRequest {
  $type: "blog.v1beta1.CommentAllRequest";
  pagination: PageRequest | undefined;
}

export interface CommentAllResponse {
  $type: "blog.v1beta1.CommentAllResponse";
  comment: Comment[];
  pagination: PageResponse | undefined;
}

export interface CommentsRequest {
  $type: "blog.v1beta1.CommentsRequest";
  id: number;
  pagination: PageRequest | undefined;
}

export interface CommentsResponse {
  $type: "blog.v1beta1.CommentsResponse";
  post: Post | undefined;
  comment: Comment[];
  pagination: PageResponse | undefined;
}

function createBaseParamsRequest(): ParamsRequest {
  return { $type: "blog.v1beta1.ParamsRequest" };
}

export const ParamsRequest = {
  $type: "blog.v1beta1.ParamsRequest" as const,

  encode(
    _: ParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
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

  fromJSON(_: any): ParamsRequest {
    return {
      $type: ParamsRequest.$type,
    };
  },

  toJSON(_: ParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(
    _: I
  ): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
};

messageTypeRegistry.set(ParamsRequest.$type, ParamsRequest);

function createBaseParamsResponse(): ParamsResponse {
  return { $type: "blog.v1beta1.ParamsResponse", params: undefined };
}

export const ParamsResponse = {
  $type: "blog.v1beta1.ParamsResponse" as const,

  encode(
    message: ParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParamsResponse {
    return {
      $type: ParamsResponse.$type,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: ParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(
    object: I
  ): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(ParamsResponse.$type, ParamsResponse);

function createBasePostsRequest(): PostsRequest {
  return { $type: "blog.v1beta1.PostsRequest", pagination: undefined };
}

export const PostsRequest = {
  $type: "blog.v1beta1.PostsRequest" as const,

  encode(
    message: PostsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostsRequest {
    return {
      $type: PostsRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: PostsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostsRequest>, I>>(
    object: I
  ): PostsRequest {
    const message = createBasePostsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(PostsRequest.$type, PostsRequest);

function createBasePostsResponse(): PostsResponse {
  return {
    $type: "blog.v1beta1.PostsResponse",
    post: [],
    pagination: undefined,
  };
}

export const PostsResponse = {
  $type: "blog.v1beta1.PostsResponse" as const,

  encode(
    message: PostsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.post) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostsResponse {
    return {
      $type: PostsResponse.$type,
      post: Array.isArray(object?.post)
        ? object.post.map((e: any) => Post.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: PostsResponse): unknown {
    const obj: any = {};
    if (message.post) {
      obj.post = message.post.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.post = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostsResponse>, I>>(
    object: I
  ): PostsResponse {
    const message = createBasePostsResponse();
    message.post = object.post?.map((e) => Post.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(PostsResponse.$type, PostsResponse);

function createBaseCommentRequest(): CommentRequest {
  return { $type: "blog.v1beta1.CommentRequest", id: 0 };
}

export const CommentRequest = {
  $type: "blog.v1beta1.CommentRequest" as const,

  encode(
    message: CommentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommentRequest();
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

  fromJSON(object: any): CommentRequest {
    return {
      $type: CommentRequest.$type,
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: CommentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommentRequest>, I>>(
    object: I
  ): CommentRequest {
    const message = createBaseCommentRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

messageTypeRegistry.set(CommentRequest.$type, CommentRequest);

function createBaseCommentResponse(): CommentResponse {
  return { $type: "blog.v1beta1.CommentResponse", comment: undefined };
}

export const CommentResponse = {
  $type: "blog.v1beta1.CommentResponse" as const,

  encode(
    message: CommentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.comment !== undefined) {
      Comment.encode(message.comment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.comment = Comment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommentResponse {
    return {
      $type: CommentResponse.$type,
      comment: isSet(object.comment)
        ? Comment.fromJSON(object.comment)
        : undefined,
    };
  },

  toJSON(message: CommentResponse): unknown {
    const obj: any = {};
    message.comment !== undefined &&
      (obj.comment = message.comment
        ? Comment.toJSON(message.comment)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommentResponse>, I>>(
    object: I
  ): CommentResponse {
    const message = createBaseCommentResponse();
    message.comment =
      object.comment !== undefined && object.comment !== null
        ? Comment.fromPartial(object.comment)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CommentResponse.$type, CommentResponse);

function createBaseCommentAllRequest(): CommentAllRequest {
  return { $type: "blog.v1beta1.CommentAllRequest", pagination: undefined };
}

export const CommentAllRequest = {
  $type: "blog.v1beta1.CommentAllRequest" as const,

  encode(
    message: CommentAllRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommentAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommentAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommentAllRequest {
    return {
      $type: CommentAllRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: CommentAllRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommentAllRequest>, I>>(
    object: I
  ): CommentAllRequest {
    const message = createBaseCommentAllRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CommentAllRequest.$type, CommentAllRequest);

function createBaseCommentAllResponse(): CommentAllResponse {
  return {
    $type: "blog.v1beta1.CommentAllResponse",
    comment: [],
    pagination: undefined,
  };
}

export const CommentAllResponse = {
  $type: "blog.v1beta1.CommentAllResponse" as const,

  encode(
    message: CommentAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.comment) {
      Comment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommentAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommentAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.comment.push(Comment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommentAllResponse {
    return {
      $type: CommentAllResponse.$type,
      comment: Array.isArray(object?.comment)
        ? object.comment.map((e: any) => Comment.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: CommentAllResponse): unknown {
    const obj: any = {};
    if (message.comment) {
      obj.comment = message.comment.map((e) =>
        e ? Comment.toJSON(e) : undefined
      );
    } else {
      obj.comment = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommentAllResponse>, I>>(
    object: I
  ): CommentAllResponse {
    const message = createBaseCommentAllResponse();
    message.comment = object.comment?.map((e) => Comment.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CommentAllResponse.$type, CommentAllResponse);

function createBaseCommentsRequest(): CommentsRequest {
  return {
    $type: "blog.v1beta1.CommentsRequest",
    id: 0,
    pagination: undefined,
  };
}

export const CommentsRequest = {
  $type: "blog.v1beta1.CommentsRequest" as const,

  encode(
    message: CommentsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommentsRequest {
    return {
      $type: CommentsRequest.$type,
      id: isSet(object.id) ? Number(object.id) : 0,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: CommentsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommentsRequest>, I>>(
    object: I
  ): CommentsRequest {
    const message = createBaseCommentsRequest();
    message.id = object.id ?? 0;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CommentsRequest.$type, CommentsRequest);

function createBaseCommentsResponse(): CommentsResponse {
  return {
    $type: "blog.v1beta1.CommentsResponse",
    post: undefined,
    comment: [],
    pagination: undefined,
  };
}

export const CommentsResponse = {
  $type: "blog.v1beta1.CommentsResponse" as const,

  encode(
    message: CommentsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.post !== undefined) {
      Post.encode(message.post, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.comment) {
      Comment.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.post = Post.decode(reader, reader.uint32());
          break;
        case 2:
          message.comment.push(Comment.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommentsResponse {
    return {
      $type: CommentsResponse.$type,
      post: isSet(object.post) ? Post.fromJSON(object.post) : undefined,
      comment: Array.isArray(object?.comment)
        ? object.comment.map((e: any) => Comment.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: CommentsResponse): unknown {
    const obj: any = {};
    message.post !== undefined &&
      (obj.post = message.post ? Post.toJSON(message.post) : undefined);
    if (message.comment) {
      obj.comment = message.comment.map((e) =>
        e ? Comment.toJSON(e) : undefined
      );
    } else {
      obj.comment = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommentsResponse>, I>>(
    object: I
  ): CommentsResponse {
    const message = createBaseCommentsResponse();
    message.post =
      object.post !== undefined && object.post !== null
        ? Post.fromPartial(object.post)
        : undefined;
    message.comment = object.comment?.map((e) => Comment.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(CommentsResponse.$type, CommentsResponse);

/** Query defines the gRPC querier service. */
export interface QueryService {
  /** Parameters queries the parameters of the module. */
  Params(request: ParamsRequest): Promise<ParamsResponse>;
  /** Queries a list of Posts items. */
  Posts(request: PostsRequest): Promise<PostsResponse>;
  /** Queries a Comment by id. */
  Comment(request: CommentRequest): Promise<CommentResponse>;
  /** Queries a list of Comment items. */
  CommentAll(request: CommentAllRequest): Promise<CommentAllResponse>;
  /** Queries a list of Comments items. */
  Comments(request: CommentsRequest): Promise<CommentsResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Posts = this.Posts.bind(this);
    this.Comment = this.Comment.bind(this);
    this.CommentAll = this.CommentAll.bind(this);
    this.Comments = this.Comments.bind(this);
  }
  Params(request: ParamsRequest): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blog.v1beta1.QueryService",
      "Params",
      data
    );
    return promise.then((data) => ParamsResponse.decode(new _m0.Reader(data)));
  }

  Posts(request: PostsRequest): Promise<PostsResponse> {
    const data = PostsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blog.v1beta1.QueryService",
      "Posts",
      data
    );
    return promise.then((data) => PostsResponse.decode(new _m0.Reader(data)));
  }

  Comment(request: CommentRequest): Promise<CommentResponse> {
    const data = CommentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blog.v1beta1.QueryService",
      "Comment",
      data
    );
    return promise.then((data) => CommentResponse.decode(new _m0.Reader(data)));
  }

  CommentAll(request: CommentAllRequest): Promise<CommentAllResponse> {
    const data = CommentAllRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blog.v1beta1.QueryService",
      "CommentAll",
      data
    );
    return promise.then((data) =>
      CommentAllResponse.decode(new _m0.Reader(data))
    );
  }

  Comments(request: CommentsRequest): Promise<CommentsResponse> {
    const data = CommentsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "blog.v1beta1.QueryService",
      "Comments",
      data
    );
    return promise.then((data) =>
      CommentsResponse.decode(new _m0.Reader(data))
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
