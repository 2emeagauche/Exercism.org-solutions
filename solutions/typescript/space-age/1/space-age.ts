type OrbitalRatiosType = {
    [key: string]: number
}
const orbitalRatios: OrbitalRatiosType = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}

const earthYearInSeconds:number = 31557600

export function age(planet:string, seconds:number):number {
  const localeAge:string = (seconds / (earthYearInSeconds * orbitalRatios[planet])).toFixed(2)
  return parseFloat(localeAge)
}