export class Clock {
  hour: number
  minute: number
  constructor(hour: number = 0, minute = 0) {
    this.hour = hour
    this.minute = minute
    this.format()
    return this
  }

  private format(): void {
    let hourFromMinute: number = Math.floor(this.minute / 60)
    this.hour = (((this.hour + hourFromMinute) % 24) + 24) % 24
    this.minute = ((this.minute % 60) + 60) % 60
  }

  public toString(): string {
    return `${this.hour < 10 ? '0' : ''}${this.hour}:${this.minute < 10 ? '0' : ''}${this.minute}`
  }

  public plus(minutes = 0): Clock {
    this.minute += minutes
    this.format()
    return this
  }

  public minus(minutes = 0): Clock {
    this.minute -= minutes
    this.format()
    return this
  }

  equals(other: Clock): boolean {
    return this.hour === other.hour && this.minute === other.minute
  }
}
