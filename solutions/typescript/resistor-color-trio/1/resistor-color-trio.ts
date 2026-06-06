export type ThreeStringTuple = [string, string, string]
export type ThreeNumberTuple = [number, number, number]
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
const metricPrefix = ((n:number):(string|undefined) => {
    switch(n){
        case 0:
            return ' '
        case 1:
            return '0 '
        case 2:
            return '00 '
        case 3:
            return ' kilo'
        case 4:
            return '0 kilo'
        case 5:
            return '00 kilo'
        case 6:
            return ' mega'
        case 7:
            return '0 mega'
        case 8:
            return '00 mega'
        case 9:
            return ' giga'
        default:
            return undefined
    }
})

function isColorsNotInList(colorTuple: ThreeStringTuple):boolean {
    let check = true
    colorTuple.forEach((color) => {
        check = check && Colors.includes(color)
    })
    return !check
}

export function decodedResistorValue(colorTuple: ThreeStringTuple):string {
    if(colorTuple.length>3) {
      console.error(`Expected exactly 3 string of colors. Only the three first were computed.`);
    }
    if (isColorsNotInList(colorTuple)) {
        throw new Error(`Expected only valid colors`);
    }
    const nameToIndex:ThreeNumberTuple = [0,0,0]
    colorTuple.forEach((color,i):void => {
        nameToIndex[i] = Colors.indexOf(color)
    })
    const firstColor:(number|string) = nameToIndex[0]
    let secondColor:(number|string) = nameToIndex[1]
    let numberOfZeroe:(number|string) = nameToIndex[2]
    if(secondColor === 0){
        secondColor = ''
        numberOfZeroe++
    }
    const numeric = +(firstColor + '' + secondColor) * Math.pow(10,numberOfZeroe)
    let stringFromNumeric = numeric + ''
    const regexp = new RegExp(/0+$/)
    const zeroes = stringFromNumeric.match(regexp)
    if(zeroes !== null){
        stringFromNumeric = stringFromNumeric.replace(regexp,"") + metricPrefix(zeroes[0].length)
    } else {
        stringFromNumeric += ' '
    }
    return  stringFromNumeric + 'ohms'
}
