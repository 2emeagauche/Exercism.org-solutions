let plainString = "abcdefghijklmnopqrstuvwxyz"
let cipherString = "zyxwvutsrqponmlkjihgfedcba"


export function encode(text: string): string {
    let result = ''
    let purifiedText = text.toLowerCase().replace(/\W/g, '')
    for(let i = 0, j = 4; i < purifiedText.length; i++){
        const char = purifiedText.charAt(i)
        const positionInPlain = plainString.indexOf(char)
        result += positionInPlain !== -1 ? cipherString[positionInPlain] : char
        if(i === j) {
            result += ' '
            j = j + 5
        }
    }
    return result.trim()
}

export function decode(text: string): string {
    let result = ''
    let noSpace = text.replace(/\s/g, '')
    for(let i = 0; i < noSpace.length; i++){
        const char = noSpace.charAt(i)
        const positionInCipher = cipherString.indexOf(char)
        result += positionInCipher !== -1 ? plainString[positionInCipher] : char
    }
    return result
}