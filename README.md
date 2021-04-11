# address-range

## Install

```sh
npm install --save address-range
# or
yarn add address-range
```

## API

### AddressRange

```ts
class AddressRange {
  readonly startAddress: bigint
  readonly endAddress: bigint

  constructor(startAddress: bigint, endAddress: bigint)

  includes(address: bigint): boolean
  isSubSetOf(addressRange: AddressRange): boolean
  hasIntersectionOf(addressRange: AddressRange): boolean
  hasLeftIntersectionOf(addressRange: AddressRange): boolean
  hasRightIntersectionOf(addressRange: AddressRange): boolean
  toString(): string
}
```

### IPv4AddressRange

```ts
class IPv4AddressRange extends AddressRange {
  static from(startAddress: string, endAddress: string): IPv4AddressRange
  static from(startAddress: string, hosts: number): IPv4AddressRange

  includes(address: string): boolean
  includes(address: bigint): boolean
  toString(): string
}
```

### IPv6AddressRange

```ts
class IPv6AddressRange extends AddressRange {
  static from(startAddress: string, endAddress: string): IPv6AddressRange
  static from(startAddress: string, hosts: number): IPv6AddressRange

  includes(address: string): boolean
  includes(address: bigint): boolean
  toString(): string
}
```

### concat

```ts
function concat<T extends AddressRange>(
  ranges: T[]
, constructor: Constructor<T>
): T[]
```

If the address ranges are concatenated at the beginning and end,
concat the address ranges.

### merge

```ts
function merge<T extends AddressRange>(
  ranges: T[]
, constructor: Constructor<T>
): T[]
```

If the address ranges have intersections, merge the address ranges.

### removeSubsets

```ts
function removeSubsets<T extends AddressRange>(ranges: T[]): T[]
```

If the address range is a subset of another address range,
remove the address range.

### compress

```ts
function compress<T extends AddressRange>(
  ranges: T[]
, constructor: Constructor<T>
): T[]
```

Lossless compression of address ranges.

### convertIPv4AddressBigIntToString

```ts
function convertIPv4AddressBigIntToString(address: bigint): string
```

### convertIPv4AddressStringToBigInt

```ts
function convertIPv4AddressStringToBigInt(address: string): bigint
```

### convertIPv6AddressBigIntToString

```ts
function convertIPv6AddressBigIntToString(address: bigint): string
```

### convertIPv6AddressStringToBigInt

```ts
function convertIPv6AddressStringToBigInt(address: string): bigint
```
