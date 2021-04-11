import { IPv6AddressRange } from '@src/ipv6-address-range'

describe('IPv6AddressRange', () => {
  describe('from(startAddress: string, endAddress: string): IPv6AddressRange', () => {
    it('return IPv6AddressRange', () => {
      const startAddress = '2001:250::'
      const endAddress = '2001:251::'

      const result = IPv6AddressRange.from(startAddress, endAddress)

      expect(result).toBeInstanceOf(IPv6AddressRange)
      expect(result.startAddress).toBe(42540535065048051205038211803318845440n)
      expect(result.endAddress).toBe(42540535144276213719302549396862795776n)
    })
  })

  describe('from(startAddress: string, cidr: number): IPv6AddressRange', () => {
    it('return IPv6AddressRange', () => {
      const startAddress = '2001:250::'
      const cidr = 35

      const result = IPv6AddressRange.from(startAddress, cidr)

      expect(result).toBeInstanceOf(IPv6AddressRange)
      expect(result.startAddress).toBe(42540535065048051205038211803318845440n)
      expect(result.endAddress).toBe(42540535074951571519321254002511839231n)
    })
  })

  describe('toString()', () => {
    it('return "$startAddress-$endAddress"', () => {
      const startAddress = '2001:250::'
      const cidr = 35

      const range = IPv6AddressRange.from(startAddress, cidr)
      const result = range.toString()

      expect(result).toBe('2001:250::-2001:250:1fff:ffff:ffff:ffff:ffff:ffff')
    })
  })
})
