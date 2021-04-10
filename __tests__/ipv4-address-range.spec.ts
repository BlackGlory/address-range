import { IPv4AddressRange } from '@src/ipv4-address-range'

describe('IPv4AddressRange', () => {
  describe('create(startAddress: string, hosts: number)', () => {
    it('return { startAddress: BigInt, endAddress: BigInt }', () => {
      const startAddress = '1.0.1.0'
      const hosts = 256

      const result = IPv4AddressRange.create(startAddress, hosts)

      expect(result.startAddress).toBe(16777472n)
      expect(result.endAddress).toBe(16777727n)
    })
  })

  describe('toString()', () => {
    it('return "$startAddress-$endAddress"', () => {
      const startAddress = '1.0.1.0'
      const hosts = 256

      const range = IPv4AddressRange.create(startAddress, hosts)
      const result = range.toString()

      expect(result).toBe('1.0.1.0-1.0.1.255')
    })
  })
})
