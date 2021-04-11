import { AddressRange } from '@src/address-range'

describe('AddressRange', () => {
  describe('isSubSetOf(addressRange: AddressRange)', () => {
    it('return boolean', () => {
      const range1 = new AddressRange(0n, 50n)
      const range2 = new AddressRange(0n, 100n)
      const range3 = new AddressRange(50n, 100n)

      expect(range1.isSubSetOf(range2)).toBe(true)
      expect(range1.isSubSetOf(range3)).toBe(false)
      expect(range2.isSubSetOf(range1)).toBe(false)
      expect(range2.isSubSetOf(range3)).toBe(false)
      expect(range3.isSubSetOf(range2)).toBe(true)
      expect(range3.isSubSetOf(range1)).toBe(false)
    })
  })
})
