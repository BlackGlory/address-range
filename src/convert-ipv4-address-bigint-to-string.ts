import * as ip from 'ip'

export function convertIPv4AddressBigIntToString(address: bigint): string {
  return ip.fromLong(Number(address))
}
