import { AddressRange } from './address-range'
import { concat } from './concat'
import { merge } from './merge'
import { removeSubsets } from './remove-subsets'
import { Constructor } from 'hotypes'

/**
 * Lossless compression of address ranges.
 */
export function compress<T extends AddressRange>(
  ranges: T[]
, constructor: Constructor<T>
): T[] {
  return pipe(ranges, [
    xs => removeSubsets(xs)
  , xs => concat(xs, constructor)
  , xs => merge(xs, constructor)
  ])
}

function pipe<T>(x: T, operators: Array<(xs: T) => T>): T {
  let result = x
  for (const fn of operators) {
    result = fn(result)
  }
  return result
}
