export const square = (index: number): bigint => {
  if(index === 0 || index > 64) throw new Error("")
  return BigInt(2**(index - 1))
}

export const total = () => {
  return BigInt(2**64) - 1n
}
