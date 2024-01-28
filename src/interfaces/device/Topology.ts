export interface Topology {
  ConnectedDevices?: ConnectedDevice[]
  Active?: boolean
  HiLinkType?: string
  MACAddress: string
  UpdateState?: number
  routerSelf?: number
  IsSupportOnlineUpg?: number
}

interface ConnectedDevice {
  ConnectedDevices: any[]
  Active: boolean
  HiLinkType: string
  MACAddress: string
}
