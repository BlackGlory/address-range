import { AddressRange } from '@src/address-range'
import { removeSubsets } from '@src/remove-subsets'

describe('removeSubsets(ranges: AddressRange[]): AddressRange[]', () => {
  it('return ranges removed subsets', () => {
    const range1 = new AddressRange(0n, 100n)
    const range2 = new AddressRange(0n, 200n)
    const range3 = new AddressRange(0n, 300n)
    const iter = [range1, range2, range3]

    const result = removeSubsets(iter)

    expect(result.length).toBe(1)
    expect(result[0]).toBeInstanceOf(AddressRange)
    expect(result[0].startAddress).toBe(0n)
    expect(result[0].endAddress).toBe(300n)
  })
})
