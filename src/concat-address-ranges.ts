import { AddressRange } from './address-range'
import { Constructor } from 'hotypes'
import { toArray } from 'iterable-operator'

export function concatAddressRanges<T extends AddressRange>(
  ranges: T[]
, constructor: Constructor<T>
): T[] {
  const map = convertIterableToMap(ranges)

  while (true) {
    let operations = 0
    const keys = toArray(map.keys())
    for (const key of keys) {
      const start = key
      if (!map.has(key)) continue
      const end = map.get(key)!

      const target = end + 1n
      if (map.has(target)) {
        const newEnd = map.get(target)!
        map.delete(target)
        map.set(start, newEnd)
        operations++
      }
    }
    if (operations === 0) break
  }

  return convertMapToArray(map, constructor)
}

function convertIterableToMap<T extends AddressRange>(iterable: Iterable<T>): Map<bigint, bigint> {
  const collection = new Map<bigint, bigint>()
  for (const range of iterable) {
    collection.set(range.startAddress, range.endAddress)
  }
  return collection
}

function convertMapToArray<T extends AddressRange>(
  map: Map<bigint, bigint>
, constructor: Constructor<T>
): T[] {
  const result: T[] = []
  for (const [startAddress, endAddress] of map) {
    result.push(new constructor(startAddress, endAddress))
  }
  return result
}
