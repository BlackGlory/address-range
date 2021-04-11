import { Address6 } from 'ip-address'
import { AddressRange } from './address-range'
import { isString } from '@blackglory/types'
import { convertIPv6AddressBigIntToString } from './convert-ipv6-address-bigint-to-string'
import { convertIPv6AddressStringToBigInt } from './convert-ipv6-address-string-to-bigint'

export class IPv6AddressRange extends AddressRange {
  static from(startAddress: string, endAddress: string): IPv6AddressRange
  static from(startAddress: string, cidr: number): IPv6AddressRange
  static from(...args:
  | [startAddress: string, endAddress: string]
  | [startAddress: string, cidr: number]
  ): AddressRange {
    if (isString(args[1])) {
      const [startAddress, endAddress] = args

      return new IPv6AddressRange(
        convertIPv6AddressStringToBigInt(startAddress)
      , convertIPv6AddressStringToBigInt(endAddress)
      )
    } else {
      const [startAddress, cidr] = args

      const endAddress = new Address6(`${startAddress}/${cidr}`).endAddress().address

      return IPv6AddressRange.from(startAddress, endAddress)
    }
  }

  includes(address: string): boolean
  includes(address: bigint): boolean
  includes(address: string | bigint): boolean {
    if (isString(address)) {
      return super.includes(convertIPv6AddressStringToBigInt(address))
    } else {
      return super.includes(address)
    }
  }

  toString(): string {
    const startAddress = convertIPv6AddressBigIntToString(this.startAddress)
    const endAddress = convertIPv6AddressBigIntToString(this.endAddress)
    return `${startAddress}-${endAddress}`
  }
}
