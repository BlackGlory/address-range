import { AddressRange } from '@src/address-range'

describe('AddressRange', () => {
  describe('includes(address: bigint): boolean', () => {
    it('returns boolean', () => {
      const range = new AddressRange(10n, 30n)

      expect(range.includes(0n)).toBe(false)
      expect(range.includes(10n)).toBe(true)
      expect(range.includes(20n)).toBe(true)
      expect(range.includes(30n)).toBe(true)
      expect(range.includes(40n)).toBe(false)
    })
  })

  describe('isSubSetOf(addressRange: AddressRange)', () => {
    it('returns boolean', () => {
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

  describe('hasIntersectionOf(addressRange: AddressRange): boolean', () => {
    it('returns boolean', () => {
      const result1 = new AddressRange(0n, 10n)
      const result2 = new AddressRange(10n, 20n)
      const result3 = new AddressRange(20n, 30n)

      expect(result1.hasIntersectionOf(result2)).toBe(true)
      expect(result1.hasIntersectionOf(result3)).toBe(false)
      expect(result2.hasIntersectionOf(result1)).toBe(true)
      expect(result2.hasIntersectionOf(result3)).toBe(true)
      expect(result3.hasIntersectionOf(result1)).toBe(false)
      expect(result3.hasIntersectionOf(result2)).toBe(true)
    })
  })

  describe('hasLeftIntersectionOf(addressRange: AddressRange): boolean', () => {
    it('returns boolean', () => {
      const result1 = new AddressRange(0n, 10n)
      const result2 = new AddressRange(10n, 20n)
      const result3 = new AddressRange(20n, 30n)

      expect(result1.hasLeftIntersectionOf(result2)).toBe(false)
      expect(result1.hasLeftIntersectionOf(result3)).toBe(false)
      expect(result2.hasLeftIntersectionOf(result1)).toBe(true)
      expect(result2.hasLeftIntersectionOf(result3)).toBe(false)
      expect(result3.hasLeftIntersectionOf(result1)).toBe(false)
      expect(result3.hasLeftIntersectionOf(result2)).toBe(true)
    })
  })

  describe('hasRightIntersectionOf(addressRange: AddressRange): boolean', () => {
    it('returns boolean', () => {
      const result1 = new AddressRange(0n, 10n)
      const result2 = new AddressRange(10n, 20n)
      const result3 = new AddressRange(20n, 30n)

      expect(result1.hasRightIntersectionOf(result2)).toBe(true)
      expect(result1.hasRightIntersectionOf(result3)).toBe(false)
      expect(result2.hasRightIntersectionOf(result1)).toBe(false)
      expect(result2.hasRightIntersectionOf(result3)).toBe(true)
      expect(result3.hasRightIntersectionOf(result1)).toBe(false)
      expect(result3.hasRightIntersectionOf(result2)).toBe(false)
    })
  })
})
