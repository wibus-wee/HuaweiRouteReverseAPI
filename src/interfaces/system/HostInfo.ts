export interface HostInfo {
  ID:                    string;
  MACAddress:            string;
  IsSetupSlave:          boolean;
  HiLinkDevice:          boolean;
  IsSupportNoManage:     number;
  HiLinkDevHide:         boolean;
  IPAddress:             string;
  Active:                boolean;
  Active46:              boolean;
  WlanActive:            boolean;
  IsSlave:               boolean;
  SerialNumber:          SerialNumber;
  ShowDeviceRealRate:    number;
  UpRate:                number;
  DownRate:              number;
  AccessRecord:          string;
  TxKBytes:              string;
  RxKBytes:              string;
  IPv6Address:           string;
  V6Active:              boolean;
  IconType:              string;
  ActualName:            string;
  domain:                string;
  HostName:              string;
  InterfaceType:         InterfaceType;
  Layer2Interface:       string;
  AddressSource:         AddressSource;
  LeaseTime:             string;
  VendorClassID:         string;
  hwtypeoptionnew:       boolean;
  DevBrands:             string;
  Frequency:             Frequency;
  IsGuest:               boolean;
  MacFilterID:           string;
  ParentControlEnable:   boolean;
  ParentControl:         boolean;
  DeviceDownRateEnable:  boolean;
  QosclassID:            string;
  PolicerID:             string;
  ClassQueue:            number;
  ActualManu:            string;
  ActualType:            string;
  ProdId:                ProdId;
  Feature:               number;
  rate:                  number;
  rssi:                  number;
  DeviceMaxUpLoadRate:   number;
  DeviceMaxDownLoadRate: number;
}

export enum AddressSource {
  DHCP = "DHCP",
}

export enum Frequency {
  Empty = "",
  The24GHz = "2.4GHz",
  The5GHz = "5GHz",
}

export enum InterfaceType {
  LAN = "LAN",
  PLC = "PLC",
  The24GHz = "2.4GHz",
  The5GHz = "5GHz",
}

export enum ProdId {
  Empty = "",
}

export enum SerialNumber {
  Empty = "",
}
