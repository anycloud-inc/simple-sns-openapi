/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/auth": {
    post: operations["signIn"];
    delete: operations["signOut"];
  };
  "/account": {
    get: operations["getAccount"];
    post: operations["createAccount"];
  };
  "/account/icon_image": {
    patch: operations["updateIconImage"];
  };
  "/account/profile": {
    patch: operations["updateProfile"];
  };
  "/posts": {
    get: operations["findPostList"];
    post: operations["createPost"];
  };
  "/posts/{id}": {
    get: operations["findPost"];
    delete: operations["deletePost"];
    parameters: {
      path: {
        id: number;
      };
    };
  };
  "/rooms": {
    get: operations["findRoomList"];
    post: operations["findOrCreateRoom"];
  };
  "/rooms/{id}": {
    get: operations["findRoom"];
    parameters: {
      path: {
        id: string;
      };
    };
  };
  "/rooms/{id}/read": {
    patch: operations["updateReadAt"];
    parameters: {
      path: {
        id: string;
      };
    };
  };
  "/messages": {
    get: operations["listMessages"];
    post: operations["createMessage"];
  };
  "/messages/via_post": {
    post: operations["createMessageViaPost"];
  };
}

export interface components {
  schemas: {
    /** EntityMessage */
    EntityMessage: {
      id: number;
      content: string;
      userId?: number;
      roomId: string;
      postId?: number;
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
      user?: components["schemas"]["EntityUser"];
      post?: components["schemas"]["EntityPost"];
    };
    EntityAccount: {
      /** Format: int32 */
      id: number;
      name: string;
      email: string;
      iconImageUrl?: string;
    };
    EntityPost: {
      id: number;
      body: string;
      userId: number;
      /** Format: date-time */
      createdAt: string;
      user?: components["schemas"]["EntityUser"];
    };
    EntityUser: {
      /** Format: int32 */
      id: number;
      name: string;
      iconImageUrl?: string;
    };
    /** EntityRoom */
    EntityRoom: {
      id: string;
      messages: components["schemas"]["EntityMessage"][];
      roomUsers: components["schemas"]["EntityRoomUser"][];
    };
    /** EntityRoomUser */
    EntityRoomUser: {
      roomId: string;
      userId: number;
      /** Format: date-time */
      readAt?: string;
      user?: components["schemas"]["EntityUser"];
    };
    RequestPagination: {
      cursor?: number;
      /** @default true */
      isNext?: boolean;
      /** @default 50 */
      size?: number;
      /**
       * @default DESC
       * @enum {string}
       */
      order?: "ASC" | "DESC";
    };
  };
  responses: {
    /** OK */
    ResponseSuccess: {
      content: {
        "application/json": {
          success: boolean;
        };
      };
    };
    /** Bad Request */
    ResponseBadRequest: {
      content: {
        "application/json": {
          message?: string;
        };
      };
    };
    /** OK */
    ResponseNullableAccount: {
      content: {
        "application/json": {
          user?: components["schemas"]["EntityAccount"];
        };
      };
    };
    /** OK */
    ResponseAccount: {
      content: {
        "application/json": {
          user: components["schemas"]["EntityAccount"];
        };
      };
    };
    /** OK */
    ResponseRoomList: {
      content: {
        "application/json": {
          rooms: components["schemas"]["EntityRoom"][];
        };
      };
    };
    /** OK */
    ResponseRoom: {
      content: {
        "application/json": {
          room: components["schemas"]["EntityRoom"];
        };
      };
    };
    /** OK */
    ResponseSignIn: {
      content: {
        "application/json": {
          user: components["schemas"]["EntityAccount"];
          /** @description このtokenをヘッダーに入れるて認証する */
          token: string;
        };
      };
    };
    /** OK */
    ResponsePost: {
      content: {
        "application/json": {
          post: components["schemas"]["EntityPost"];
        };
      };
    };
    /** OK */
    ResponsePostList: {
      content: {
        "application/json": {
          posts: components["schemas"]["EntityPost"][];
        };
      };
    };
    /** OK */
    ResponseMessageList: {
      content: {
        "application/json": {
          messages: components["schemas"]["EntityMessage"][];
        };
      };
    };
    /** OK */
    ResponseMessage: {
      content: {
        "application/json": {
          message: components["schemas"]["EntityMessage"];
        };
      };
    };
  };
}

export interface operations {
  signIn: {
    responses: {
      200: components["responses"]["ResponseSignIn"];
      400: components["responses"]["ResponseBadRequest"];
    };
    requestBody: {
      content: {
        "application/json": {
          email: string;
          password: string;
        };
      };
    };
  };
  signOut: {
    responses: {
      200: components["responses"]["ResponseSuccess"];
    };
    requestBody: {
      content: {
        "application/json": {
          deviceId: string;
        };
      };
    };
  };
  getAccount: {
    responses: {
      200: components["responses"]["ResponseNullableAccount"];
    };
  };
  createAccount: {
    responses: {
      200: components["responses"]["ResponseSignIn"];
    };
    requestBody: {
      content: {
        "application/json": {
          name: string;
          email: string;
          password: string;
        };
      };
    };
  };
  updateIconImage: {
    responses: {
      200: components["responses"]["ResponseAccount"];
    };
    requestBody: {
      content: {
        "multipart/form-data": {
          /** Format: binary */
          file: string;
        };
      };
    };
  };
  updateProfile: {
    responses: {
      200: components["responses"]["ResponseAccount"];
    };
    requestBody: {
      content: {
        "application/json": {
          name: string;
          email: string;
        };
      };
    };
  };
  findPostList: {
    parameters: {
      query: {
        pagination?: components["schemas"]["RequestPagination"];
        filter?: {
          userId: number;
        };
      };
    };
    responses: {
      200: components["responses"]["ResponsePostList"];
    };
  };
  createPost: {
    responses: {
      200: components["responses"]["ResponsePost"];
    };
    requestBody: {
      content: {
        "application/json": {
          post: {
            body: string;
          };
        };
      };
    };
  };
  findPost: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: components["responses"]["ResponsePost"];
    };
  };
  deletePost: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: components["responses"]["ResponseSuccess"];
    };
  };
  findRoomList: {
    responses: {
      200: components["responses"]["ResponseRoomList"];
    };
  };
  findOrCreateRoom: {
    responses: {
      200: components["responses"]["ResponseRoom"];
    };
    requestBody: {
      content: {
        "application/json": {
          userIds: number[];
        };
      };
    };
  };
  findRoom: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: components["responses"]["ResponseRoom"];
    };
  };
  updateReadAt: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: components["responses"]["ResponseRoom"];
    };
  };
  listMessages: {
    parameters: {
      query: {
        pagination?: components["schemas"]["RequestPagination"];
        roomId: string;
      };
    };
    responses: {
      200: components["responses"]["ResponseMessageList"];
    };
  };
  createMessage: {
    responses: {
      200: components["responses"]["ResponseMessage"];
    };
    requestBody: {
      content: {
        "application/json": {
          content: string;
          roomId: string;
        };
      };
    };
  };
  createMessageViaPost: {
    responses: {
      200: components["responses"]["ResponseMessage"];
    };
    requestBody: {
      content: {
        "application/json": {
          content: string;
          postId: number;
        };
      };
    };
  };
}

export interface external {}
