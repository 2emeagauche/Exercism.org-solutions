export function format(name: string, number:number):string{
  const stringNumber = ""+number
  const lg = stringNumber.length
  const lastDigit = stringNumber[lg-1]
  const lastDecade = stringNumber.slice(-2,lg)
  let postfix = ""
  switch(lastDigit){
    case "1":
      postfix = "st"
      break
    case "2":
      postfix = "nd"
      break
    case "3":
      postfix = "rd"
      break
    default:
      postfix = "th"
  }
  if(lastDecade==="11"||lastDecade==="12"||lastDecade==="13"){
    postfix = "th"
  }
  return `${name}, you are the ${stringNumber+postfix} customer we serve today. Thank you!`
}
