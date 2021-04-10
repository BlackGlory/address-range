import { AddressRange } from '@src/address-range'

describe('AddressRange', () => {
  describe('isSubSetOf(addressRange: AddressRange)', () => {
    it('return boolean', () => {
      const range1 = new AddressRange(0n, 100n)
      const range2 = new AddressRange(0n, 50n)
      const range3 = new AddressRange(50n, 100n)

      const result1 = range1.isSubSetOf(range2)
      const result2 = range1.isSubSetOf(range3)
      const result3 = range2.isSubSetOf(range1)
      const result4 = range2.isSubSetOf(range3)
      const result5 = range3.isSubSetOf(range1)
      const result6 = range3.isSubSetOf(range2)

      expect(result1).toBe(false)
      expect(result2).toBe(false)
      expect(result3).toBe(true)
      expect(result4).toBe(false)
      expect(result5).toBe(true)
      expect(result6).toBe(false)
    })
  })
})
