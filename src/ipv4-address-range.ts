import * as ip from 'ip'
import { AddressRange } from './address-range'

export class IPv4AddressRange extends AddressRange {
  static create(startAddress: string, hosts: number): AddressRange {
    const endAddress = ip.fromLong(ip.toLong(startAddress) + hosts - 1)
    return new IPv4AddressRange(
      convertIPv4AddressStringToBigInt(startAddress)
    , convertIPv4AddressStringToBigInt(endAddress)
    )
  }

  toString(): string {
    const startAddress = convertIPv4AddressBigIntToString(this.startAddress)
    const endAddress = convertIPv4AddressBigIntToString(this.endAddress)
    return `${startAddress}-${endAddress}`
  }
}

export function convertIPv4AddressBigIntToString(address: bigint): string {
  return ip.fromLong(Number(address))
}

export function convertIPv4AddressStringToBigInt(address: string): bigint {
  return BigInt(ip.toLong(address))
}
