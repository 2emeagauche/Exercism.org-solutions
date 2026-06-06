  const Colors:string[] =[
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
]
  const getColorCodeAsString = (color:string):string => {
    return Colors.indexOf(color) + ""
  }

export function decodedValue(stringArr:string[]):number {
  return +(getColorCodeAsString(stringArr[0]) + getColorCodeAsString(stringArr[1]))
}
