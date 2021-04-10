import { AddressRange } from '@src/address-range'
import { concatAddressRanges } from '@src/concat-address-ranges'

describe(`
  concatAddressRanges(
    ranges: AddressRange[]
  , constructor: new (startAddress: BigInt, endAddress: BigInt) => AddressRange
  ): AddressRange[]
`, () => {
  it('return concated AddressRange collection', () => {
    const range1 = new AddressRange(0n, 100n)
    const range2 = new AddressRange(101n, 200n)
    const range3 = new AddressRange(201n, 300n)
    const iter = [range1, range2, range3]

    const result = concatAddressRanges(iter, AddressRange)

    expect(result.length).toBe(1)
    expect(result[0]).toBeInstanceOf(AddressRange)
    expect(result[0].startAddress).toBe(0n)
    expect(result[0].endAddress).toBe(300n)
  })
})
