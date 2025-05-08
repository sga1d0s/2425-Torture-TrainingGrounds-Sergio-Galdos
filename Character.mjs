import Weapon from "./Weapon.mjs"

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

    const weapon = new Weapon(
      this.weapon.weaponName,
      this.weapon.type,
      this.weapon.pointsForNextSkill, points)

      

    // actualizar datos de personaje
    // actualizar datos de arma

  }
}