export interface WLANGuideBasic {
  wifiCompat: string
  DbhoEnable: boolean
  wifiCompatEnable: boolean
  SyncWifiPwd: number
  WifiConfig: WifiConfig[]
  setWifiCompat: boolean
}

interface WifiConfig {
  WifiSsidEnable: boolean
  X_RTSThreshold: number
  X_FragThreshold: number
  WifiSsid: string
  X_BeaconPeriod: number
  PwdScore: number
  Channel: number
  TransmitPower: number
  WMMEnable: boolean
  TWTEnable: boolean
  WepKey: { [key: string]: string }
  FrequencyBand: string
  WifiEnable: boolean
  RegulatoryDomain: string
  WlanStandard: string
  MaxBitRate: string
  X_Wlan11NHtMcs: string
  BasicAuthMode: string
  X_Wlan11NBWControl: string
  BeaconType: string
  X_Wlan11NGIControl: string
  X_Wlan11NTxRxStream: number
  WifiSsidIndex: number
  WepKeyLen: number
  WepKeyIndex: number
  WpaEncryptionMode: string
  WifiSsidFactory: string
  IsWiFiRestoreCfg: number
  WpaPreSharedKey: string
  Dot11REnable: boolean
  X_WlanIsolateControl: boolean
  X_DtimPeriod: number
  BasicEncryptionMode: string
  IEEEiEncryptionMode: string
  MixedEncryptionModes: string
  WifiHideBroadcast: boolean
  ID: string
  X_AssociateDeviceNum: number
}
