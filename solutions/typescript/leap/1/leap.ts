export function isLeap(year:number):boolean {
  if(isEvenlyDivisibleBy(year, 4)){
    if(isEvenlyDivisibleBy(year, 100) && !isEvenlyDivisibleBy(year, 400)){
      return false
    }
    return true
  }
  return false
}

function isEvenlyDivisibleBy(dividend:number, divisor:number):boolean{
  return !(dividend%divisor)
}