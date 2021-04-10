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
  static create(startAddress: string, hosts: number): AddressRange
  toString(): string
}
```

### IPv6AddressRange

```ts
class IPv6AddressRange extends AddressRange {
  static create(startAddress: string, cidr: number): AddressRange
  toString(): string
}
```

### concatAddressRanges

```ts
function concatAddressRanges<T extends AddressRange>(
  ranges: T[]
, constructor: new (startAddress: bigint, endAddress: bigint) => T
): T[]
```

### removeSubsets

```ts
function removeSubsets<T extends AddressRange>(ranges: T[]): T[]
```

### removeIntersections

```ts
function removeIntersections<T extends AddressRange>(
  ranges: T[]
, constructor: new (startAddress: bigint, endAddress: bigint) => T
): T[]
```
