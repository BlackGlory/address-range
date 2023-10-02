import { AddressRange } from '@src/address-range'
import { compress } from '@src/compress'

describe('compress', () => {
  describe('[[0, 50], [25, 75], [76, 100], [50, 100]]', () => {
    it('return [[0, 100]]', () => {
      const range = [
        new AddressRange(0n, 50n)
      , new AddressRange(25n, 75n)
      , new AddressRange(76n, 100n)
      , new AddressRange(50n, 100n)
      ]

      const result = compress(range, AddressRange)

      expect(result.length).toBe(1)
      expect(result[0]).toBeInstanceOf(AddressRange)
      expect(result[0].startAddress).toBe(0n)
      expect(result[0].endAddress).toBe(100n)
    })
  })
})
