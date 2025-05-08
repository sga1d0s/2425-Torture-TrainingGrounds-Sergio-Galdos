export default class Character {
  constructor(name, occupation, gold, level, skills, weapon) {
    this.name = name
    this.occupation = occupation
    this.gold = gold
    this.level = level
    this.skills = skills
    this.weapon = weapon
    this.day = null
  }

  trainForADay(weaponName, day) {

    this.printData(day)

    this.performTraining(weaponName, day)

    this.printResult()

  }

  printData(day) {
    this.day = day

    console.log("")
    console.log(`Day ${this.day.number}, ${this.day.name}`)
    console.log("-------------------")
    console.log(`${this.name}, a ${this.occupation}, begins the training`)
    console.log(`Current gold: ${this.gold}`)
    console.log(`Level: ${this.level}`)
    console.log("Current skills:")
    console.log(`   -   brawl: ${this.skills.brawl}`)
    console.log(`   -   melee: ${this.skills.melee}`)
    console.log(`   -   missile: ${this.skills.missile}`)

    console.log("")

    console.log(this.weapon)
  }

  performTraining(weaponName, day) {
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
        // if (this.weapon.points >= this.weapon.pointsForNextSkill) {
        // }
        element.points = points
        this.weapon = element
      }
    }

    console.log(`${this.name} trains the ${this.weapon.type} skill by using ${this.weapon.name}`)

  }

  printResult() {
    //
  }

}