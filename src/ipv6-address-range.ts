import { Address6 } from 'ip-address'
import { AddressRange } from './address-range'
import { isString } from '@blackglory/types'

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

  toString(): string {
    const startAddress = shortenIPv6Address(
      convertIPv6AddressBigIntToString(this.startAddress)
    )
    const endAddress = shortenIPv6Address(
      convertIPv6AddressBigIntToString(this.endAddress)
    )
    return `${startAddress}-${endAddress}`
  }
}

function convertIPv6AddressStringToBigInt(address: string): bigint {
  const hex = new Address6(address).canonicalForm().split(':').join('')
  return BigInt(`0x${hex}`)
}

function convertIPv6AddressBigIntToString(address: bigint): string {
  const hex = address.toString(16).padStart(32, '0')
  const groups = []
  for (let i = 0; i < 8; i++) {
    groups.push(hex.slice(i * 4, (i + 1) * 4))
  }
  return groups.join(':')
}

function shortenIPv6Address(address: string): string {
  return new Address6(address).correctForm()
}
