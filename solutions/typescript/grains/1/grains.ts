export const square = (index: number): bigint => {
  if(index === 0 || index > 64) throw new Error("")
  return BigInt(2**(index - 1))
}

export const total = () => {
  let binary = "0b"

  for(let i = 0; i < 64; i++){
    binary += "1"
  }

  return BigInt(binary)
}
