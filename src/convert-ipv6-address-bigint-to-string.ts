import { Address6 } from 'ip-address'

export function convertIPv6AddressBigIntToString(address: bigint): string {
  const hex = address.toString(16).padStart(32, '0')
  const groups = []
  for (let i = 0; i < 8; i++) {
    groups.push(hex.slice(i * 4, (i + 1) * 4))
  }
  return formatIPv6Address(groups.join(':'))
}

function formatIPv6Address(address: string): string {
  return new Address6(address).correctForm()
}
