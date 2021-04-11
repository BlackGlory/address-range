import { Address6 } from 'ip-address'

export function convertIPv6AddressStringToBigInt(address: string): bigint {
  const hex = new Address6(address).canonicalForm().split(':').join('')
  return BigInt(`0x${hex}`)
}
