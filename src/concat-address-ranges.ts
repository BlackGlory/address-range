import { AddressRange } from './address-range'

export function concatAddressRanges<T extends AddressRange>(
  ranges: T[]
, constructor: new (startAddress: bigint, endAddress: bigint) => T
): T[] {
  const map = convertIterableToMap(ranges)

  let count = 0
  while (true) {
    const lastRoundCount = count
    for (const [start, end] of map) {
      const target = end + 1n
      if (map.has(target)) {
        const newEnd = map.get(target)!
        map.delete(target)
        map.set(start, newEnd)
        count++
      }
    }
    if (lastRoundCount === count) break
  }

  return convertMapToArray(map)

  function convertIterableToMap(iterable: Iterable<T>): Map<bigint, bigint> {
    const collection = new Map<bigint, bigint>()
    for (const range of iterable) {
      collection.set(range.startAddress, range.endAddress)
    }
    return collection
  }

  function convertMapToArray(map: Map<bigint, bigint>): T[] {
    const result: T[] = []
    for (const [startAddress, endAddress] of map) {
      result.push(new constructor(startAddress, endAddress))
    }
    return result
  }
}
