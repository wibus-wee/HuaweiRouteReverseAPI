export interface UserLoginNonceError {
  csrf_token: string
  csrf_param: string
  csrf: string
  errcode: number
}

export interface UserLoginNonceResponse {
  err: number
  csrf_param: string
  iterations: number
  servernonce: string
  isopen: number
  modeselected: number
  csrf_token: string
  salt: string
}

export interface UserLoginNonceRequest {
  data: UserLoginNonceData
  csrf: UserLoginNonceCsrf
}

export interface UserLoginNonceCsrf {
  csrf_param: string
  csrf_token: string
}

export interface UserLoginNonceData {
  username: string
  firstnonce: string
}
