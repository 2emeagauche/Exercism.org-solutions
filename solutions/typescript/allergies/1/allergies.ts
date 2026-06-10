type Allergens = Map<number, string>

const allergensMap: Allergens = new Map([
  [1, "eggs"],
  [2, "peanuts"],
  [4, "shellfish"],
  [8, "strawberries"],
  [16, "tomatoes"],
  [32, "chocolate"],
  [64, "pollen"],
  [128, "cats"]
])

export class Allergies {

  constructor(public allergenIndex: number) {
    this.allergenIndex = allergenIndex
  }

  public list(): (string | number)[] {

    const list: (string | number)[] = []

    for(let [key, val] of allergensMap){
      const logicalAnd = key & this.allergenIndex
      if(logicalAnd !== 0) list.push((key & this.allergenIndex) && val)
    }

    return list
  }

  public allergicTo(allergen: string): boolean {

    return this.list().includes(allergen)
  }
}