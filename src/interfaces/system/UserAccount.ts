export interface _UserAccount {
  username:          string;
  ID:                string;
  LoginWifiSsidSame: boolean;
  enableprompt:      boolean;
  promptinfo:        string;
  DBenableprompt:    boolean;
  DBpromptinfo:      string;
  SyncWifiPwd:       number;
  IsWifiOpen:        boolean;
  FirstLogin:        number;
  userlevel:         number;
}

export type UserAccount = _UserAccount[]