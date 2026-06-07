export class SimpleCipher {

    alphabet = 'abcdefghijklmnopqrstuvwxyz'

    constructor(public key: string = ""){
        this.key = key !== undefined && /^[a-zA-Z]+$/.test(key) ? key.toLowerCase() : this.randomKey()
    }

    randomKey(): string{
        let randomString: string = ''
        for(let i = 0; i < 100; i++){
            const rdIdx = Math.floor(Math.random() * 25)
            randomString += this.alphabet.charAt(rdIdx)
        }
        return randomString
    }

    transcode(inputText: string, isEncoding: boolean) {
        let outputText = ''
        for(let i = 0; i < inputText.length; i++){
            let k = inputText.length > this.key.length ? i % this.key.length : i
            const shift = this.key[k].charCodeAt(0) - 'a'.charCodeAt(0)
            let newCharPos = this.alphabet.indexOf(inputText[i]) + (isEncoding ? shift : (0 - shift))
            if(newCharPos > 25) newCharPos = (newCharPos % 25) - 1
            if(newCharPos < 0) newCharPos = newCharPos + 26
            outputText += this.alphabet.charAt(newCharPos)
        }
        return outputText
    }

    encode(plainText: string) {
        return this.transcode(plainText, true)
    }

    decode(cipherText: string) {
        return this.transcode(cipherText, false)
    }
}