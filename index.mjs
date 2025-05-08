import data from "./data/data.mjs";
import Character from "./Character.mjs";
import Weapon from "./Weapon.mjs";
import Day from "./Day.mjs";

let characters = []

createCharacters()

createDay()

// create Characters
function createCharacters() {
  
  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    let weapons = []

    for (let j = 0; j < element.weapons.length; j++) {
      const weapon = element.weapons[j];
      let weap = new Weapon(weapon.name, weapon.type, weapon.points_for_next_skill, 0)
      weapons.push(weap)
    }

    let char = new Character(element.name, element.occupation, element.gold, element.level, element.skills, weapons)

    characters.push(char)
  }
}

// create Day object
function createDay() {
  const day = new Day(3, "Tuesday")
  return day
}

characters[0].trainForADay("Fist", createDay())
