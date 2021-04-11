import { AddressRange } from '@src/address-range'
import { concatAddressRanges } from '@src/concat-address-ranges'

describe(`
  concatAddressRanges(
    ranges: AddressRange[]
  , constructor: new (startAddress: BigInt, endAddress: BigInt) => AddressRange
  ): AddressRange[]
`, () => {
  describe('concatable address ranges', () => {
    it('return concated AddressRange collection', () => {
      const ranges = [
        new AddressRange(0n, 100n)
      , new AddressRange(101n, 200n)
      , new AddressRange(201n, 300n)
      ]

      const result = concatAddressRanges(ranges, AddressRange)

      expect(result.length).toBe(1)
      expect(result[0]).toBeInstanceOf(AddressRange)
      expect(result[0].startAddress).toBe(0n)
      expect(result[0].endAddress).toBe(300n)
    })
  })

  describe('not concatable address ranges', () => {
    it('return AddressRange[]', () => {
      const ranges = [
        new AddressRange(0n, 100n)
      , new AddressRange(200n, 300n)
      ]

      const result = concatAddressRanges(ranges, AddressRange)

      expect(result.length).toBe(2)
      expect(result[0]).toBeInstanceOf(AddressRange)
      expect(result[0].startAddress).toBe(0n)
      expect(result[0].endAddress).toBe(100n)
      expect(result[1]).toBeInstanceOf(AddressRange)
      expect(result[1].startAddress).toBe(200n)
      expect(result[1].endAddress).toBe(300n)
    })
  })
})
