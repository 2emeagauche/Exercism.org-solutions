export function steps(n: number): number{
  if(Number.isInteger(n) && n > 0){
    let step = 0;
    
    while(n > 1){
      if(n & 1) {
        n = n * 3 +1
      } else {
        n = n / 2
      }
      step++
    }
    return step
  }
  else throw new Error('Only positive integers are allowed')
}