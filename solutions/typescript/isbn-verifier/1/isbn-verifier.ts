export function isValid(isbn: string): boolean {
    const checkingChar = isbn.slice(-1)

    const isbnMinusLast = isbn.slice(0,-1)

    if(!/[X\d]/.test(checkingChar) || /[^X-\d]/.test(isbnMinusLast)) return false

    const numbersString = isbnMinusLast.replace(/[^X\d]/g, "")

    if(numbersString.length !== 9) return false

    const checkingValue: number = checkingChar === "X" ? 10 : Number(checkingChar)

    const candidate: number[] = numbersString.split("").map(item => Number(item))

    candidate.push(checkingValue)

    const compute: number = candidate.reduceRight((acc, item, index, arr) => {
        return acc + item * (arr.length - index)
    }, 0)

    return compute % 11 == 0
}