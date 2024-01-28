import type { RequestAdapter } from '..'

class HTTPClient<
  T extends RequestAdapter = RequestAdapter,
  // eslint-disable-next-line unused-imports/no-unused-vars
  ResponseWrapper = unknown,
> {
  constructor(
    private readonly _endpoint: string,
    private _adaptor: T,
  ) {
    this._endpoint = _endpoint.replace(/\/$/, '')
  }

  get instance() {
    return this._adaptor
  }

  get endpoint() {
    return this._endpoint
  }
}

export function createClient<T extends RequestAdapter>(
  adaptor: T,
) {
  return <
    ResponseWrapper = T extends { responseWrapper: infer R }
      ? R extends undefined
        ? unknown
        : R
      : unknown,
  >(
    endpoint: string,
  ) => new HTTPClient<T, ResponseWrapper>(endpoint, adaptor)
}
