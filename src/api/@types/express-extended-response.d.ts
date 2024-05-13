declare namespace Express {
  export interface Response {
    success(body?: object | string | null, statusCode?: number, headers?: object | null, cache?: number);
  }
}