let plain = "abcdefghijklmnopqrstuvwxyz"
let cipher = "zyxwvutsrqponmlkjihgfedcba"


export function encode(plainText: string): string {
    let result = ''
    let purifiedText = plainText.toLowerCase().replace(/[^a-z0-9]/g, '')
    for(let i = 0, j = 4; i < purifiedText.length; i++){
        const char = purifiedText.charAt(i)
        const positionInPlain = plain.indexOf(char)
        result += positionInPlain !== -1 ? cipher[positionInPlain] : char
        if(i === j) {
            result += ' '
            j = j + 5
        }
    }
    return result.trim()
}

export function decode(cipherText: string): string {
    let result = ''
    let noSpace = cipherText.replace(/\s/g, '')
    for(let i = 0; i < noSpace.length; i++){
        const char = noSpace.charAt(i)
        const positionInCipher = cipher.indexOf(char)
        result += positionInCipher !== -1 ? plain[positionInCipher] : char
    }
    return result
}