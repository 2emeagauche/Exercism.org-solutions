export class Robot {
  constructor(private _name: string | undefined = undefined){}
  static listNames: Set<string> = new Set()
  static letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  static digits = "0123456789"

  static randomInt(max: number): number{
    return Math.floor(Math.random() * max)
  }

  static makeRandomName(): string{
    let newName = ""
    for(let i = 0; i < 2; i++) {
      newName += Robot.letters[Robot.randomInt(26)]
    }
    for(let i = 0; i < 3; i++) {
      newName += Robot.digits[Robot.randomInt(10)]
    }
    return newName
  }

  get name(){
    if(this._name === undefined) {
      let tempName: string
      do{
        tempName = Robot.makeRandomName()
      } while (Robot.listNames.has(tempName))
      this._name = tempName
      Robot.listNames.add(this._name)
    }
    return this._name
  }

  resetName(){
    this._name = undefined
  }

  static releaseNames(){
    Robot.listNames.clear()
  }
}
