export class DnDCharacter {
  
  public static generateAbilityScore():number {
    const draws = [];
    for(let i = 0; i<4; i++){
      draws.push(Math.ceil(Math.random() * 6));
    }
    draws.sort( (a, b) => a - b );
    draws.shift();
    return draws.reduce((prev,curr)=>prev+curr);
  }

  public static getModifierFor(abilityValue:number) {
    return Math.floor((abilityValue - 10) / 2);
  }
  
  public strength;
  public dexterity;
  public constitution;
  public intelligence;
  public wisdom;
  public charisma;
  public hitpoints;
  
  constructor(){
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }
}

const character = new DnDCharacter();

for(const [property, value] of Object.entries(character)){
  console.log(`${property} is ${value}`);
}