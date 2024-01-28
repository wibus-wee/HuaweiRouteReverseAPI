export interface HomesecStealnet {
  StealNetModel:         number;
  AntiLeakageCapability: boolean;
  Info:                  Info;
}

interface Info {
  Cipher: Cipher;
}

interface Cipher {
  AbfaEnable: boolean;
}
