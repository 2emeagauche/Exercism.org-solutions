type Nucleotides = {
    A: number
    C: number
    G: number
    T: number
}

export function nucleotideCounts(sequence: string): Nucleotides {
    
    if(/[^ACGT]/.test(sequence)) throw new Error("Invalid nucleotide in strand")

    return {
        A: sequence.match(/A/g) === null ? 0 : sequence.match(/A/g)!.length,
        C: sequence.match(/C/g) === null ? 0 : sequence.match(/C/g)!.length,
        G: sequence.match(/G/g) === null ? 0 : sequence.match(/G/g)!.length,
        T: sequence.match(/T/g) === null ? 0 : sequence.match(/T/g)!.length
    }
}
