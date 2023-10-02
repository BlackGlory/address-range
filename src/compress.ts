import { AddressRange } from './address-range'
import { concat } from './concat'
import { merge } from './merge'
import { removeSubsets } from './remove-subsets'
import { pipe } from 'extra-utils'

/**
 * Lossless compression of address ranges.
 */
export function compress<T extends AddressRange>(
  ranges: T[]
, constructor: new (startAddress: bigint, endAddress: bigint) => T
): T[] {
  return pipe(
    ranges
  , xs => removeSubsets(xs)
  , xs => concat(xs, constructor)
  , xs => merge(xs, constructor)
  )
}
