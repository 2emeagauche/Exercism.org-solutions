export class Matrix {
  private rowsArray:number[][]
  private colsArray:number[][]
  constructor(public matrixString:string) {
    this.matrixString = matrixString.trim()
    this.rowsArray = []
    this.colsArray = []
  }

  private dealMatrix(){
    this.rowsArray = []
    this.colsArray = []
    this.rowsArray =
    this.matrixString.split('\n')
    .map(item => 
      item.split(' ')
      .map(item => parseInt(item))
    )
    let maxRowLength = 0
    this.rowsArray.forEach((val,idx, arr) => {
      if(maxRowLength< val.length) maxRowLength = val.length
    })
    for(let i = 0; i<maxRowLength; i++){
      this.colsArray.push([])
    }
    this.colsArray.forEach((c,idx, arr) => {
      for(let i = 0; i< this.rowsArray.length; i++){
        c.push(this.rowsArray[i][idx])
      }
    })
  }

  get rows(): number[][] {
    this.dealMatrix()
    return this.rowsArray
  }

  get columns(): number[][] {
    this.dealMatrix()
    return this.colsArray
  }
}