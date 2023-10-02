import { AddressRange } from '@src/address-range'
import { concat } from '@src/concat'

describe('concat', () => {
  describe('[[0, 100], [101, 200], [201, 300]]', () => {
    it('return [[0, 300]]', () => {
      const ranges = [
        new AddressRange(0n, 100n)
      , new AddressRange(101n, 200n)
      , new AddressRange(201n, 300n)
      ]

      const result = concat(ranges, AddressRange)

      expect(result.length).toBe(1)
      expect(result[0]).toBeInstanceOf(AddressRange)
      expect(result[0].startAddress).toBe(0n)
      expect(result[0].endAddress).toBe(300n)
    })
  })

  describe('[[0, 100], [100, 200], [200, 300]]', () => {
    it('return same as input', () => {
      const ranges = [
        new AddressRange(0n, 100n)
      , new AddressRange(100n, 200n)
      , new AddressRange(200n, 300n)
      ]

      const result = concat(ranges, AddressRange)

      expect(result.length).toBe(3)
      expect(result[0]).toBeInstanceOf(AddressRange)
      expect(result[0].startAddress).toBe(0n)
      expect(result[0].endAddress).toBe(100n)
      expect(result[1]).toBeInstanceOf(AddressRange)
      expect(result[1].startAddress).toBe(100n)
      expect(result[1].endAddress).toBe(200n)
      expect(result[2]).toBeInstanceOf(AddressRange)
      expect(result[2].startAddress).toBe(200n)
      expect(result[2].endAddress).toBe(300n)
    })
  })
})
