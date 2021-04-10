import { IPv6AddressRange } from '@src/ipv6-address-range'

describe('IPv6AddressRange', () => {
  describe('create(startAddress: string, cidr: number)', () => {
    it('return { startAddress: BigInt, endAddress: BigInt }', () => {
      const startAddress = '2001:250::'
      const cidr = 35

      const result = IPv6AddressRange.create(startAddress, cidr)

      expect(result.startAddress).toBe(42540535065048051205038211803318845440n)
      expect(result.endAddress).toBe(42540535074951571519321254002511839231n)
    })
  })

  describe('toString()', () => {
    it('return "$startAddress-$endAddress"', () => {
      const startAddress = '2001:250::'
      const cidr = 35

      const range = IPv6AddressRange.create(startAddress, cidr)
      const result = range.toString()

      expect(result).toBe('2001:250::-2001:250:1fff:ffff:ffff:ffff:ffff:ffff')
    })
  })
})
