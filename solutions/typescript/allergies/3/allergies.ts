interface AllergensMap {
  "eggs": 1,
  "peanuts": 2,
  "shellfish": 4,
  "strawberries": 8,
  "tomatoes": 16,
  "chocolate": 32,
  "pollen": 64,
  "cats": 128,
}

type Allergens = keyof AllergensMap

export class Allergies {

  constructor(
    private readonly _allergenIndex: number,
    private readonly _allergensMap: AllergensMap = {
      eggs: 1,
      peanuts: 2,
      shellfish: 4,
      strawberries: 8,
      tomatoes: 16,
      chocolate: 32,
      pollen: 64,
      cats: 128,
    }
  ) { }
  
  public list(): Allergens[] {
    return (Object.entries(this._allergensMap) as [Allergens, number][])
      .filter((item) => item[1] & this._allergenIndex)
      .map(item => item[0])
  }

  public allergicTo(allergen: Allergens): boolean {

    return this.list().includes(allergen)
  }
}