export function commands(code: number): string[]{
  const codemap: string[] = [
    "wink",
    "double blink",
    "close your eyes",
    "jump",
    "reverse"
  ]
  
  let sequence = []

  for(let i = 0; i < codemap.length; i++) {

    if(code % 2) {

      if(i < codemap.length - 1){
        sequence.push(codemap[i])
      }
      else if(sequence.length > 1) {
        sequence.reverse() 
      }
    }
    code = code >> 1
  }

  return sequence

}

console.log(commands(27))
