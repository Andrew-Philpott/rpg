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
  getStrength() {
    return this.strength;
  }
  setStrength(strength) {
    this.strength = strength;
  }
  getIntelligence() {
    return this.intelligence;
  }
  setIntelligence(intelligence) {
    this.intelligence = intelligence;
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

  ableToUseWeapon(item) {
    let requiredStr = item.getStrengthRequirement();
    let requiredInt = item.getIntelligenceRequirement();
    if((this.strength >= requiredStr) && (this.intelligence >= requiredInt)) {
      return true;
    }
    return false;
  }
}