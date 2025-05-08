import data from "./data/data.mjs";
import Character from "./Character.mjs";
import Weapon from "./Weapon.mjs";
import Day from "./Day.mjs";

createCharacters()

createDay()



// create Characters
function createCharacters() {
  let characters = []
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    let char = new Character(element.name, element.occupation, element.gold, element.level, element.skills, element.weapons)
    characters.push(char)
  }
}

// create Day object
function createDay() {
  const day = new Day(3, "Tuesday")
}

