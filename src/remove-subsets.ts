import { AddressRange } from './address-range'

/**
 * If the address range is a subset of another address range,
 * remove the address range.
 */
export function removeSubsets<T extends AddressRange>(ranges: T[]): T[] {
  const subsets = new WeakSet<T>()
  for (const range of ranges) {
    if (hasSuperSetOf(ranges, range)) {
      subsets.add(range)
    }
  }
  return ranges.filter(x => !subsets.has(x))
}

function hasSuperSetOf<T extends AddressRange>(
  collection: T[]
, subject: T
): boolean {
  for (const object of collection) {
    if (subject === object) continue
    if (subject.isSubSetOf(object)) return true
  }
  return false
}
