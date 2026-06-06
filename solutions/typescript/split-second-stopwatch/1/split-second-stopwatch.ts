type stateType = "ready" | "running" | "stopped"

export class SplitSecondStopwatch {

  private _state: stateType = "ready"
  private _currentLap = 0
  private _previousLaps:number[] = []

  constructor() {}

  private timeFormat(time:number):string {
    const hours = Math.floor(time / 3600000)
    const minutes = Math.floor(time / 60000) % 60
    const seconds = Math.floor(time / 1000) % 60
    return `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
  }

  get state(): stateType {
    return this._state
  }

  get currentLap(): string {
    return this.timeFormat(this._currentLap)
  }

  get previousLaps(): string[] {
    return this._previousLaps.map(lap => this.timeFormat(lap)) 
  }

  get total(): string {
    const lapsSum = this._previousLaps.length ? this._previousLaps.reduce((acc, next) => acc + next) : 0
    return this.timeFormat(this._currentLap + lapsSum)
  }

  start(): void {
    switch(this._state){
      case "ready":
      case "stopped":
        this._state = "running"
        break
      case "running":
        throw new Error("cannot start an already running stopwatch")
      default:
        throw new Error("no such action")
    }
  }

  stop(): void {
    switch(this._state){
      case "ready":
      case "stopped":
        throw new Error("cannot stop a stopwatch that is not running")
      case "running":
        this._state = "stopped"
        break
      default:
        throw new Error("no such action")
    }
  }

  lap(): void {
    switch(this.state){
      case "ready":
      case "stopped":
        throw new Error("cannot lap a stopwatch that is not running")
      case "running":
        this._previousLaps.push(this._currentLap)
        this._currentLap = 0
        break
      default:
        throw new Error("no such action")
    }
  }

  reset(): void {
    switch(this.state){
      case "ready":
      case "running":
        throw new Error("cannot reset a stopwatch that is not stopped")
      case "stopped":
        this._state = "ready"
        this._previousLaps = []
        this._currentLap = 0
        break
      default:
        throw new Error("no such action")
    }
  }

  advanceTime(duration:string): void {
    this._currentLap += this.state === "running" ? Date.parse(`1970-01-01T${duration}Z`) : 0
  }
}