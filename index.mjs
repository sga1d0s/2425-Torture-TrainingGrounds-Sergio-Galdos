import data from "./data/data.mjs";
import Character from "./Character.mjs";
import Weapon from "./Weapon.mjs";
import Day from "./Day.mjs";

createCharacters()

// crear characters
function createCharacters() {
  let characters = []
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    let char = new Character(element.name, element.occupation, element.gold, element.level, element.skills, element.weapons)
    characters.push(char)
  }
}