export interface SNTP {
  NTPServer1: string
  NTPServer2: string
  CurrentLocalTime: Date
  Status: string
  TimeZoneIdx: number
  SntpIsSynchronizedStatus: boolean
  LocalTimeZoneName: string
}
