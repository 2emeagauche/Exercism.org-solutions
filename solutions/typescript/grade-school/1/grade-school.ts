export class GradeSchool {
  
  private expectedDB: Map<number, string[]> = new Map()
  private trackAllNames: string[] = []
  private studentsNamesByGrade: string[] = []
  private multipleSameName: number = 0
  
  roster(): Record<string, readonly string[]> {
    const copy = Object.fromEntries(
      [...this.expectedDB].map(([grade, students]) => [grade, Object.freeze([...students])])
    )
    return Object.freeze(copy)
  }

  add(name:string, grade:number):void {
    this.trackAllNames.push(name)
    this.multipleSameName = this.trackAllNames.filter(item => item === name).length
    if(this.multipleSameName > 1) {
      return
    }
    if(!this.expectedDB.has(grade)){
      this.expectedDB.set(grade, [name])  
    } else {
      const currentList = this.expectedDB.get(grade)
      const orderedList = [...currentList ?? [], name].sort()
      this.expectedDB.set(grade, orderedList)
    }
  }

  grade(key: number): readonly string[] {
    this.studentsNamesByGrade = this.expectedDB.get(key) || []
    if(this.multipleSameName > 1) return []
    return Object.freeze([...this.studentsNamesByGrade])
  }
}
