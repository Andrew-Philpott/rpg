import { Level } from "./level";
import { Type } from "./type";
import { Item } from "./item";

export class Character {
  constructor(vitality, intelligence, strength, typeofChar) {
    this.type = typeofChar;
    //this.skills = this.type.skills;
    this.vitality = vitality;
    this.intelligence = intelligence;
    this.strength = strength;
    this.level = new Level(1, 100);
    this.currentExperience = 0;
    this.item;
  }

  setCurrentExperience(currentExperience) {
    this.currentExperience = currentExperience;
    this.checkLevel();
  }

  checkLevel() {
    if(this.currentExperience >= this.level.experience) {
      this.setLevel();
      this.checkLevel();
    }
  }
  setLevel() {
    this.level = this.level.changeLevel();
    this.increaseAttributes();
  }

  increaseAttributes() {
    this.vitality += this.type.getVitality();
    this.strength += this.type.getStrength();
    this.intelligence += this.type.getIntelligence();
  }

  setWeapon(weapon) {
    this.item = weapon;
    this.strength += this.item.getStrength();
    this.intelligence += this.item.getIntelligence();
  }

  removeWeapons() {
    this.item = new Item(0,0);
  }

  ableToUseWeapon(weapon) {
    let requiredStr = weapon.getStrengthRequirement();
    let requiredInt = weapon.getIntelligenceRequirement();
    if((this.strength >= requiredStr) && (this.intelligence >= requiredInt)) {

    } else {

    }
  }
}

//Another class that is type. type is going to have different weapons and maybe 

//level up define levels in the level up class with level 1 = 100 exp points, 2 = 300, 3 = 600