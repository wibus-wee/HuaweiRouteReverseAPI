export interface AccessAuth {
  manualAuthedDevList: ManualAuthedDevList[];
  allowNum:            number;
  forbiddenNum:        number;
  enable:              boolean;
  authedDevList:       AuthedDevList[];
}

interface AuthedDevList {
  macAddress: string;
  accessName: string;
}

interface ManualAuthedDevList {
  vendorName: string;
  accessName: string;
  prodId:     string;
  accessTime: string;
  macAddress: string;
  iconType:   string;
}
