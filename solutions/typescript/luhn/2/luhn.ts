export function valid(digitString: string = ""): boolean {
  digitString = digitString.replace(/\s/g, "")
  if(/\D/g.test(digitString) || digitString.length < 2) return false
  const digitStringArray = digitString.split("").reverse()
  const digitArray = digitStringArray.map((digit, i) => {
    if(i%2) {
      const double = Number(digit) * 2
      return double > 9 ? double - 9 : double
    }
    return Number(digit)
  })
  const sum = digitArray.reduce((acc, curr) => acc + curr, 0)
  return !((sum) % 10)
}
