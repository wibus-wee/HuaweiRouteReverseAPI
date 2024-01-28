export interface WLANFilterEnhance {
  WMACAddresses:            WMACAddress[];
  ID:                       string;
  MACAddressControlEnabled: boolean;
  MacFilterPolicy:          number;
  FrequencyBand:            string;
  BMACAddresses:            any[];
}

interface WMACAddress {
  HostName:   string;
  MACAddress: string;
}
