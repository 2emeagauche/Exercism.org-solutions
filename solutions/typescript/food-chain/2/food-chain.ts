const versesStart = "I know an old lady who swallowed a"

const variations = [
    {
        animal: "fly",
        secondPhrase: "I don't know why she swallowed the fly. Perhaps she'll die."
    },
    {
        animal: "spider",
        secondPhrase: "It wriggled and jiggled and tickled inside her."
    },
    {
        animal: "bird",
        secondPhrase: "How absurd to swallow a bird!"
    },
    {
        animal: "cat",
        secondPhrase: "Imagine that, to swallow a cat!"
    },
    {
        animal: "dog",
        secondPhrase: "What a hog, to swallow a dog!"
    },
    {
        animal: "goat",
        secondPhrase: "Just opened her throat and swallowed a goat!"
    },
    {
        animal: "cow",
        secondPhrase: "I don't know how she swallowed a cow!"
    },
    {
        animal: "horse",
        secondPhrase: "She's dead, of course!"
    },
]

export function verse(index: number) {
    index = index - 1
    const lastVariation = variations.length - 1
    let start = `${versesStart} ${variations[index].animal}.\n`

    let afterStart = (index !== 0 && index < lastVariation) ? `${variations[index].secondPhrase}\n` : ''

    let between = ''

    for(let i = index; i > 0 && index !== lastVariation; i--){
        between += `She swallowed the ${variations[i].animal} to catch the ${variations[i-1].animal}${variations[i].animal === "bird" ? " that wriggled and jiggled and tickled inside her" : ""}.\n`
    }

    let end = index < lastVariation ? `${variations[0].secondPhrase}\n` : `${variations[lastVariation].secondPhrase}\n`

    return start + afterStart + between + end
}

export function verses(start: number, end: number) {
    let output = ''
    for(let i = start; i <= end; i++){
        output += ((i - start) ? '\n' : '') + verse(i)
    }
    return output
}
