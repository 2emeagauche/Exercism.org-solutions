type MapDnaToRna = {
    [key: string] : string
}
const mapDnaToRna:MapDnaToRna = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U", 
}
const isValidDNA = (str:string):boolean => /^[ACTG]+$/.test(str)

export function toRna(dna:string):string {
    if(!isValidDNA(dna)){
        throw new Error('Invalid input DNA.')
    }
    const dnaArr = dna.split('')
    const rnaArr = dnaArr.map((N) => mapDnaToRna[N])
    return rnaArr.join('')
}
