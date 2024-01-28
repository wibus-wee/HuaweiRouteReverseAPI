import type { RequestOptions } from './request'

export type AdaptorRequestResponseType<P> = Promise<
  Record<string, any> & { data: P }
>

export type RequestAdapter<T = any, Response = undefined> = Readonly<
  (Response extends undefined ? Record<string, any> : { responseWrapper: Response }) & {
    default: T

    get<P = unknown>(
      url: string,
      options?: Omit<RequestOptions, 'data'>,
    ): AdaptorRequestResponseType<P>

    post<P = unknown>(
      url: string,
      options: Partial<RequestOptions>,
    ): AdaptorRequestResponseType<P>

    patch<P = unknown>(
      url: string,
      options: Partial<RequestOptions>,
    ): AdaptorRequestResponseType<P>

    delete<P = unknown>(
      url: string,
      options?: Omit<RequestOptions, 'data'>,
    ): AdaptorRequestResponseType<P>

    put<P = unknown>(
      url: string,
      options: Partial<RequestOptions>,
    ): AdaptorRequestResponseType<P>
  }
>
