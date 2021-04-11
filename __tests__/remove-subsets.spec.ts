import { AddressRange } from '@src/address-range'
import { removeSubsets } from '@src/remove-subsets'

describe('removeSubsets(ranges: AddressRange[]): AddressRange[]', () => {
  describe('[[0, 100], [0, 200], [0, 300]]', () => {
    it('return [[0, 300]]', () => {
      const ranges = [
        new AddressRange(0n, 100n)
      , new AddressRange(0n, 200n)
      , new AddressRange(0n, 300n)
      ]

      const result = removeSubsets(ranges)

      expect(result.length).toBe(1)
      expect(result[0]).toBeInstanceOf(AddressRange)
      expect(result[0].startAddress).toBe(0n)
      expect(result[0].endAddress).toBe(300n)
    })
  })
})
