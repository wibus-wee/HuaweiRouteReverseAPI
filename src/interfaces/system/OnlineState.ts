export interface OnlineState {
  CurrentUpgradeTime: Date;
  DeviceName:         string;
  custinfo:           Custinfo;
  CurrentChangeLog:   string;
  CurrentVersion:     string;
  URL:                string;
  UpgTimes:           number;
  SN:                 string;
  IpAddress:          string;
  Cookie:             string;
  Version:            string;
  UpgradeContent:     string;
  DownloadProcess:    number;
  UpdateState:        number;
  ImageSize:          number;
  DownloadSize:       number;
  IsMainDevice:       boolean;
  DevId:              string;
  IsSupportOnlineUpg: number;
  IsSupportGUI:       number;
  DeviceType:         string;
}

interface Custinfo {
  CustDeviceName:     string;
  CustDeviceType:     string;
  CustDeviceBand:     number;
  CustZHFriendlyName: string;
  CustENFriendlyName: string;
}
