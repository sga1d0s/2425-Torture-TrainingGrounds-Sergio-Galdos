
export default class Character {
  constructor(name, occupation, gold, level, skills, weapon) {
    this.name = name
    this.occupation = occupation
    this.gold = gold
    this.level = level
    this.skills = skills
    this.weapon = weapon
  }

  static trainForADay(weaponName, day) {

    let points = 0

    // entrenamiento
    // calcular puntos de arma

    if (this.occupation === "thug") {
      points = 10
    }

    if (this.occupation === "priest") {
      points = 20
    }

    if (this.occupation === "peasant") {
      points = 30
    }

    // actualizar datos de personaje




    // actualizar datos de arma
    for (let i = 0; i < this.weapon.length; i++) {
      const element = this.weapon[i];
      if (element.name === weaponName) {
        this.weapon.points += points
        if (this.weapon.points >= this.weapon.pointsForNextSkill){
          
        }
      }

    }

  }
}