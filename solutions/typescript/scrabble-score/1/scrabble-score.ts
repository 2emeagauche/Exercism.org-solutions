export function score(word: string | undefined): number{

if(word === undefined || word === "") return 0

const values: string[] = word.toUpperCase()
              .replace(/([A,E,I,O,U,L,N,R,S,T])|([D,G])|([B,C,M,P])|([F,H,V,W,Y])|(K)|([J,X])|([Q,Z])/g,
              ((...match) =>
              match[1] ? "1," : match[2] ? "2," : match[3] ? "3," : match[4] ? "4," : match[5] ? "5," : match[6] ? "8," : match[7] ? "10," : "0")).split(",")

return values.reduce((acc, cur) => acc + Number(cur), 0)
}