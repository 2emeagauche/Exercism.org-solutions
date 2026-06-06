export function commands(handshake: number): string[]{
  const codemap: string[] = [
    "wink",
    "double blink",
    "close your eyes",
    "jump",
    "reverse"
  ]
  
  let sequence = []

  for(let i = 0; i < codemap.length; i++) {

    if(handshake & 1) {

      if(i < codemap.length - 1){
        sequence.push(codemap[i])
      }
      else if(sequence.length > 1) {
        sequence.reverse() 
      }
    }
    handshake = handshake >> 1
  }

  return sequence

}

console.log(commands(27))
