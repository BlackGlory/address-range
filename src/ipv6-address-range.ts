import { Address6 } from 'ip-address'
import { AddressRange } from './address-range'

export class IPv6AddressRange extends AddressRange {
  static create(startAddress: string, cidr: number): AddressRange {
    const endAddress = new Address6(`${startAddress}/${cidr}`).endAddress().address
    return new IPv6AddressRange(
      convertIPv6AddressStringToBigInt(startAddress)
    , convertIPv6AddressStringToBigInt(endAddress)
    )
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
