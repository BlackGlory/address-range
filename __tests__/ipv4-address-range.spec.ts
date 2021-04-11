import { IPv4AddressRange } from '@src/ipv4-address-range'

describe('IPv4AddressRange', () => {
  describe('from(startAddress: string, endAddress: string): IPv4AddressRange', () => {
    it('return IPv4AddressRange', () => {
      const startAddress = '1.0.1.0'
      const endAddress = '1.0.2.0'

      const result = IPv4AddressRange.from(startAddress, endAddress)

      expect(result).toBeInstanceOf(IPv4AddressRange)
      expect(result.startAddress).toBe(16777472n)
      expect(result.endAddress).toBe(16777728n)
    })
  })

  describe('from(startAddress: string, hosts: number): IPv4AddressRange', () => {
    it('return IPv4AddressRange', () => {
      const startAddress = '1.0.1.0'
      const hosts = 256

      const result = IPv4AddressRange.from(startAddress, hosts)

      expect(result).toBeInstanceOf(IPv4AddressRange)
      expect(result.startAddress).toBe(16777472n)
      expect(result.endAddress).toBe(16777727n)
    })
  })

  describe('toString()', () => {
    it('return "$startAddress-$endAddress"', () => {
      const startAddress = '1.0.1.0'
      const hosts = 256

      const range = IPv4AddressRange.from(startAddress, hosts)
      const result = range.toString()

      expect(result).toBe('1.0.1.0-1.0.1.255')
    })
  })
})
