export function answer(question: string): number | Error {
  let result: number = 0

  if (!/^What/.test(question)) throw new Error("Unknown operation")

  let toEvaluate: string = question.replace('What is ', '').replace(/\?$/, '')

  if (/^-?\d+\s+(?!(?:plus|minus|by)$)\w+$/.test(toEvaluate)) throw new Error("Unknown operation")
  
  const operations: string[] | null = toEvaluate.match(/^-?\d+(\s+(plus|minus|multiplied by|divided by)\s+-?\d+)*$/g)

  if (!operations) throw new Error("Syntax error")

  toEvaluate = operations[0]
        .replace(/(^.)/, "($1")
        .replace(/plus/g, "+")
        .replace(/minus/g, "-")
        .replace(/multiplied by/g, ")*(")
        .replace(/divided by/g, ")/(")
        .replace(/(.$)/, "$1)")

console.log(toEvaluate)
  return Math.round(eval(toEvaluate))
}