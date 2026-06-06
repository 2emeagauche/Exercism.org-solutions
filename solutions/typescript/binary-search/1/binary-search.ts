export function find(haystack: (number | never)[], needle: number): number | never {
  
  let haystackLength = haystack.length
  
  if(!haystackLength) throw new Error("Value not in array")

  haystack.sort((a,b) => a - b)

  let position = 0

  while(haystackLength > 0) {
    console.log('length : '+haystackLength + '\nposition : ' + position)

    const middleIndex = haystackLength % 2 ? Math.floor(haystackLength / 2) : (haystackLength / 2)

    if(haystackLength === 1 && haystack[0] !== needle) throw new Error("Value not in array")

    if(haystack[0] === needle) {
      console.log("first element")
      break
    }

    if(haystack[haystackLength - 1] === needle) {
      console.log("last element")
      position += haystackLength - 1
      break
    }

    if(haystack[middleIndex] === needle) {
      console.log("middle element")
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
    console.log(haystack)
    haystackLength = haystack.length

  }

  return position
}