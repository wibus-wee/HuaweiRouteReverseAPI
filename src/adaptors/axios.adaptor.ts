import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import type { RequestAdapter } from '../interfaces/adaptor'

const $http = /* #__PURE__ */ axios.create({})

export const axiosAdaptor: RequestAdapter<
  AxiosInstance,
  AxiosResponse<unknown>
> = Object.preventExtensions({
  get default() {
    return $http
  },
  responseWrapper: {} as any as AxiosResponse<unknown>,
  get(url: string, options: AxiosRequestConfig<any> | undefined) {
    return $http.get(url, options)
  },
  post(url: string, options: Record<string, never>) {
    const { data, ...config } = options || {}
    return $http.post(url, data, config)
  },
  put(url: string, options: Record<string, never>) {
    const { data, ...config } = options || {}
    return $http.put(url, data, config)
  },
  delete(url: string, options: Record<string, never>) {
    const { ...config } = options || {}
    return $http.delete(url, config)
  },
  patch(url: string, options: Record<string, never>) {
    const { data, ...config } = options || {}
    return $http.patch(url, data, config)
  },
})

export default axiosAdaptor
