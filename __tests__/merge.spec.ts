import { AddressRange } from '@src/address-range'
import { merge } from '@src/merge'

describe(`
  merge<T extends AddressRange>(
    ranges: AddressRange[]
  , constructor: Constructor<T>
  ): T[]
`, () => {
  describe('[[0, 50], [50, 150], [150, 200]]', () => {
    it('return [[0, 200]]', () => {
      const ranges = [
        new AddressRange(0n, 50n)
      , new AddressRange(50n, 150n)
      , new AddressRange(150n, 200n)
      ]

      const result = merge(ranges, AddressRange)

      expect(result.length).toBe(1)
      expect(result[0]).toBeInstanceOf(AddressRange)
      expect(result[0].startAddress).toBe(0n)
      expect(result[0].endAddress).toBe(200n)
    })
  })

  describe('[[0, 100], [50, 150], [100, 200]]', () => {
    it('return [[0, 200]]', () => {
      const ranges = [
        new AddressRange(0n, 100n)
      , new AddressRange(50n, 150n)
      , new AddressRange(100n, 200n)
      ]

      const result = merge(ranges, AddressRange)

      expect(result.length).toBe(1)
      expect(result[0]).toBeInstanceOf(AddressRange)
      expect(result[0].startAddress).toBe(0n)
      expect(result[0].endAddress).toBe(200n)
    })
  })
})
