import { HashSet } from '@blackglory/structures'
import { AddressRange } from '@src/address-range'

export function removeIntersections<T extends AddressRange>(
  ranges: T[]
, constructor: new (startAddress: bigint, endAddress: bigint) => T
): T[] {
  const intersections = new WeakSet<T>()
  const news = new HashSet<T>(range => range.toString())
  for (const current of ranges) {
    if (intersections.has(current)) continue
    const right = findRightIntersection(ranges, current)
    if (right) {
      intersections.add(current)
      intersections.add(right)
      news.add(new constructor(current.startAddress, right.endAddress))
    }
  }

  if (news.size === 0) {
    return ranges
  } else {
    return removeIntersections(
      ranges
        .filter(x => !intersections.has(x))
        .concat(Array.from(news))
    , constructor
    )
  }

  function findRightIntersection(collection: T[], subject: T): T | null {
    for (const object of collection) {
      if (subject === object) continue
      if (subject.hasRightIntersectionOf(object)) return object
    }
    return null
  }
}
