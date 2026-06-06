export function find(haystack: (number | never)[], needle: number): number | never {
  
  let haystackLength = haystack.length
  
  if(!haystackLength) throw new Error("Value not in array")

  haystack.sort((a,b) => a - b)

  let position = 0

  while(haystackLength > 0) {

    if(haystackLength === 1 && haystack[0] !== needle) throw new Error("Value not in array")

    const middleIndex = Math.floor(haystackLength / 2)

    if(haystack[0] === needle) {
      break
    }

    if(haystack[haystackLength - 1] === needle) {
      position += haystackLength - 1
      break
    }

    if(haystack[middleIndex] === needle) {
      position += middleIndex
      break
    }

    if(haystack[middleIndex] > needle) {
      haystack = haystack.slice(0, middleIndex)
    }
    if(haystack[middleIndex] < needle) {
      haystack = haystack.slice(middleIndex + 1)
      position += middleIndex + 1
    }
    
    haystackLength = haystack.length

  }

  return position
}