export class AddressRange {
  constructor(
    public readonly startAddress: bigint
  , public readonly endAddress: bigint
  ) {}

  isSubSetOf(addressRange: AddressRange): boolean {
    return this.startAddress >= addressRange.startAddress
        && this.endAddress <= addressRange.endAddress
  }

  hasIntersectionOf(addressRange: AddressRange): boolean {
    return this.hasRightIntersectionOf(addressRange)
        || this.hasLeftIntersectionOf(addressRange)
  }

  hasLeftIntersectionOf(addressRange: AddressRange): boolean {
    return this.startAddress <= addressRange.endAddress
        && this.endAddress >= addressRange.endAddress
  }

  hasRightIntersectionOf(addressRange: AddressRange): boolean {
    return this.startAddress <= addressRange.startAddress
        && this.endAddress >= addressRange.startAddress
  }

  toString(): string {
    return `${this.startAddress}-${this.endAddress}`
  }
}
