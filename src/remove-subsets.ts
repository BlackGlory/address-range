import { AddressRange } from './address-range'

export function removeSubsets<T extends AddressRange>(ranges: T[]): T[] {
  const subsets = new WeakSet<T>()
  for (const current of ranges) {
    if (findSuperSet(ranges, current)) {
      subsets.add(current)
    }
  }
  return ranges.filter(x => !subsets.has(x))
}

function findSuperSet<T extends AddressRange>(collection: T[], subject: T): boolean {
  for (const object of collection) {
    if (subject === object) continue
    if (subject.isSubSetOf(object)) return true
  }
  return false
}
