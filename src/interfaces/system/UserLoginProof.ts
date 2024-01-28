export interface UserLoginProofResponse {
  err: number
  csrf_param: string
  level: number
  rsan: string
  rsae: string
  serversignature: string
  rsapubkeysignature: string
  csrf_token: string
  ishilink: number
}

export interface UserLoginProofRequest {
  data: UserLoginProofData
  csrf: UserLoginProofCsrf
}

export interface UserLoginProofCsrf {
  csrf_param: string
  csrf_token: string
}

export interface UserLoginProofData {
  clientproof: string
  finalnonce: string
}
