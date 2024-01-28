export interface DeviceInfo {
  HardwareVersion: string
  centralCap: string
  ManufacturerOUI: string
  UpgradeTime: number
  UpTime: number
  backupflag: number
  other: Other
  NtwkCapScore: number
  EmuiVersion: string
  ManufacturerId: string
  DeviceIconType: string
  WeeklyReportUrl: string
  SerialNumber: string
  devcap: Devcap
  SoftwareVersion: string
  SmartDevInfo: SmartDevInfo
  modcap: { [key: string]: number }
  custinfo: Custinfo
  RouterType: string
  FriendlyName: string
  MacFilterCapacity: number
  DeviceName: string
  SNHashType: number
  SkuType: number
  csrf_param: string
  csrf_token: string
  uuid: string
}

interface SmartDevInfo {
  DevId: string
  HilinkVersion: string
  prodId: string
  hwAccount: string
}

interface Custinfo {
  CustZHFriendlyName: string
  CustENFriendlyName: string
  CustDeviceName: string
  CustDeviceSoftShutDown: number
  CustDeviceBand: number
  CustDeviceType: string
}

interface Devcap {
  SoftwareCapability: { [key: string]: number }
  WifiAreaCode: string
  RebootTime: number
  Vendor: string
  Area: number
  Version: string
  WIFI: number
  GuestNetwork: number
  USB: number
  PowerSave: number
  SupportAPP: boolean
  HardwareCapability: { [key: string]: number }
}

interface Other {
  IsNeedSalt: boolean
  guide: boolean
  MpsGuide: boolean
  pkg_mst_mac: string
  FirstLogin: number
  pkg_slv_mac_list: PkgSlvmacList[]
}

interface PkgSlvmacList {
  base_mac: string
  mac: string
}
