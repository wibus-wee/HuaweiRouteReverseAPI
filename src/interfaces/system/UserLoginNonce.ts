export interface UserLoginNonceError {
  csrf_token: string;
  csrf_param: string;
  csrf:       string;
  errcode:    number;
}

export interface UserLoginNonceResponse {
  err:          number;
  csrf_param:   string;
  iterations:   number;
  servernonce:  string;
  isopen:       number;
  modeselected: number;
  csrf_token:   string;
  salt:         string;
}

export interface UserLoginNonceRequest {
  data: Data;
  csrf: Csrf;
}

export interface Csrf {
  csrf_param: string;
  csrf_token: string;
}

export interface Data {
  username:   string;
  firstnonce: string;
}
