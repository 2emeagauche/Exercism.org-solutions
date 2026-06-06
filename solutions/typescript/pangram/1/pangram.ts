const alphabet = "abcdefghijklmnopqrstuvwxyz"

export function isPangram(phrase:string):boolean {
  phrase = phrase.replace(/[\s\d\._\-!\?\|"'`,;\+\*=\{\}\[\]\(\)\$\^]/g,"").toLocaleLowerCase()
  const phraseSet = new Set(phrase)
  return phraseSet.size === alphabet.length
}