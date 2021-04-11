import * as ip from 'ip'

export function convertIPv4AddressStringToBigInt(address: string): bigint {
  return BigInt(ip.toLong(address))
}
