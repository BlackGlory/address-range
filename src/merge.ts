import { HashSet } from '@blackglory/structures'
import { AddressRange } from '@src/address-range'
import { Constructor } from 'justypes'
import { toArray } from 'iterable-operator'

/**
 * If the address ranges have intersections, merge the address ranges.
 */
export function merge<T extends AddressRange>(
  ranges: T[]
, constructor: Constructor<T>
): T[] {
  const removed = new WeakSet<T>()
  const news = new HashSet<T>(range => range.toString())
  for (const range of ranges) {
    if (removed.has(range)) continue
    const right = findRightIntersection(ranges, range)
    if (right) {
      removed.add(range)
      removed.add(right)
      news.add(new constructor(range.startAddress, right.endAddress))
    }
  }

  if (news.size === 0) {
    return ranges
  } else {
    return merge(
      ranges
        .filter(x => !removed.has(x))
        .concat(toArray(news))
    , constructor
    )
  }
}

function findRightIntersection<T extends AddressRange>(
  collection: T[]
, subject: T
): T | null {
  for (const object of collection) {
    if (subject === object) continue
    if (subject.hasRightIntersectionOf(object)) return object
  }
  return null
}
