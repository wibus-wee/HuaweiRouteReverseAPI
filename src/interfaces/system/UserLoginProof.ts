export interface UserLoginProofResponse {
  err:                number;
  csrf_param:         string;
  level:              number;
  rsan:               string;
  rsae:               string;
  serversignature:    string;
  rsapubkeysignature: string;
  csrf_token:         string;
  ishilink:           number;
}

export interface UserLoginProofRequest {
  data: Data;
  csrf: Csrf;
}

export interface Csrf {
  csrf_param: string;
  csrf_token: string;
}

export interface Data {
  clientproof: string;
  finalnonce:  string;
}
