function dartDistance(x:number,y:number):number{
  return Math.sqrt((Math.abs(x*x) + Math.abs(y*y)))
}
type Target= {
  [key: string]:number
}
const targetRadius: Target = {
  inner: 1,
  middle: 5,
  outer: 10,
}
const targetPoint: Target = {
  inner: 10,
  middle: 5,
  outer: 1,
}
export function score(x: number, y: number): number {
  const distance = dartDistance(x,y)
  if(distance <= targetRadius.inner){
      return targetPoint.inner
  }
  if(distance <= targetRadius.middle){
      return targetPoint.middle
  }
  if(distance <= targetRadius.outer){
      return targetPoint.outer
  }
  return 0
}
