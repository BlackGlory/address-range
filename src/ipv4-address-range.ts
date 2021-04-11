import * as ip from 'ip'
import { AddressRange } from './address-range'
import { isString } from '@blackglory/types'

export class IPv4AddressRange extends AddressRange {
  static from(startAddress: string, endAddress: string): IPv4AddressRange
  static from(startAddress: string, hosts: number): IPv4AddressRange
  static from(...args:
  | [startAddress: string, endAddress: string]
  | [startAddress: string, hosts: number]
  ): AddressRange {
    if (isString(args[1])) {
      const [startAddress, endAddress] = args

      return new IPv4AddressRange(
        convertIPv4AddressStringToBigInt(startAddress)
      , convertIPv4AddressStringToBigInt(endAddress)
      )
    } else {
      const [startAddress, hosts] = args

      const endAddress = ip.fromLong(ip.toLong(startAddress) + hosts - 1)

      return IPv4AddressRange.from(startAddress, endAddress)
    }
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
