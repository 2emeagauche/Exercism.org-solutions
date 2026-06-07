const versesStart = "I know an old lady who swallowed a"

const variations = [
    {
        animal: "fly",
    },
    {
        animal: "spider",
        secondPhrase: "It wriggled and jiggled and tickled inside her.\n"
    },
    {
        animal: "bird",
        secondPhrase: "How absurd to swallow a bird!\n"
    },
    {
        animal: "cat",
        secondPhrase: "Imagine that, to swallow a cat!\n"
    },
    {
        animal: "dog",
        secondPhrase: "What a hog, to swallow a dog!\n"
    },
    {
        animal: "goat",
        secondPhrase: "Just opened her throat and swallowed a goat!\n"
    },
    {
        animal: "cow",
        secondPhrase: "I don't know how she swallowed a cow!\n"
    },
    {
        animal: "horse",
        secondPhrase: "She's dead, of course!\n"
    },
]

const lastVersePhrase = "I don't know why she swallowed the fly. Perhaps she'll die.\n"

export function verse(index: number) {
    index = index - 1
    const lastVariationIndex = variations.length - 1

    let start = `${versesStart} ${variations[index].animal}.\n`
    
    let secondPhrase = variations[index].secondPhrase ?? ""

    const isFinal = index === lastVariationIndex

    if(isFinal) {
        return start + secondPhrase
    }

    let between = ''

    for(let i = index; i > 0 && index !== lastVariationIndex; i--){
        between += `She swallowed the ${variations[i].animal} to catch the ${variations[i-1].animal}${variations[i].animal === "bird" ? " that wriggled and jiggled and tickled inside her" : ""}.\n`
    }

    return start + secondPhrase + between + lastVersePhrase
}

export function verses(start: number, end: number) {
    let output = ''
    for(let i = start; i <= end; i++){
        output += ((i - start) ? '\n' : '') + verse(i)
    }
    return output
}
