import { Character } from './../src/js/character.js';
import { Type } from '../src/js/type.js';
import { Item } from '../src/js/item.js';

describe('Character', () => {

  test('Should be able to make a character object', () => {
    let vitality = 5;
    let intelligence = 10;
    let strength = 5;
    let character = new Character(vitality, intelligence, strength);
    expect(character instanceof Character).toEqual(true);
  });

  test('Should be able to make a persist the vitality, intelligence, and strength values to a Character object', () => {
    let vitality = 5;
    let intelligence = 10;
    let strength = 5;
    
    let character = new Character(vitality, intelligence, strength);
    let vitalityFromCharacterObject = character.vitality;
    let intelligenceFromCharacterOject = character.intelligence;
    let strengthFromCharacterObject = character.strength;

    expect(vitality).toEqual(vitalityFromCharacterObject);
    expect(intelligence).toEqual(intelligenceFromCharacterOject);
    expect(strength).toEqual(strengthFromCharacterObject);
    expect(character.currentExperience).toEqual(0);
  });
  test('The application should have a character start with a level object with the level id equal to 1 and the experience equal to 100', () => {
    let vitality = 5;
    let intelligence = 10;
    let strength = 5;

    let character = new Character(vitality, intelligence, strength);

    let levelIdFromCharacterLevelObjectOnCharacterInitiation = character.level.id;
    let levelExperienceFromCharacterLevelObjectOnCharacterInitiation = character.level.experience;
    
    expect(levelIdFromCharacterLevelObjectOnCharacterInitiation).toEqual(1);
    expect(levelExperienceFromCharacterLevelObjectOnCharacterInitiation).toEqual(100);
  });
  test('The characters current experience should be able to be set to a different value', () => {
    let vitality = 5;
    let intelligence = 10;
    let strength = 5;
    let type = new Type('warrior');

    let character = new Character(vitality, intelligence, strength, type);

    let newCurrentExperience = 200;
    character.setCurrentExperience(newCurrentExperience);
    let characterCurrentExperienceAfterSettingNewValue = character.currentExperience;

    expect(newCurrentExperience).toEqual(characterCurrentExperienceAfterSettingNewValue);
  });
  test('The characters level should change if after checking the current experience, the current experience is more than the level experience value.', () => {
    let vitality = 5;
    let intelligence = 10;
    let strength = 5;
    let type = new Type('warrior');
    let character = new Character(vitality, intelligence, strength, type);

    let newCurrentExperience = 150;
    character.setCurrentExperience(newCurrentExperience);
    // let characterCurrentExperienceAfterSettingNewValue = character.currentExperience;
    character.checkLevel();
    
    //expect(character.currentExperience).toEqual(150);
    expect(character.level.id).toEqual(2);
  });
  test('The characters level should change if after checking the current experience, the current experience is more than the level experience value.', () => {
    let vitality = 5;
    let intelligence = 10;
    let strength = 5;
    let type = new Type('warrior');
    let character = new Character(vitality, intelligence, strength, type);

    let newCurrentExperience = 150;
    character.setCurrentExperience(newCurrentExperience);
    // let characterCurrentExperienceAfterSettingNewValue = character.currentExperience;
    character.checkLevel();
    
    //expect(character.currentExperience).toEqual(150);
    expect(character.level.id).toEqual(2);
  });
  test('The character should be notified that they are able to use a weapon if their strength and intelligence requirements are greater than or equal to the strength and intelligence requirements of the item.', () => {
    let vitality = 5;
    let intelligence = 10;
    let strength = 5;
    let type = new Type('warrior');
    let character = new Character(vitality, intelligence, strength, type);
    let item = new Item(1);

    let randomlyGeneratedItemRequiredStrength = item.getStrengthRequirement();
    let randomlyGeneratedItemRequiredIntelligence = item.getIntelligenceRequirement();
    
    let characterStrength = character.getStrength();
    let characterIntelligence = character.getIntelligence();

    let ableToUseWeaponBool = character.ableToUseWeapon(item);

    expect(characterStrength >= randomlyGeneratedItemRequiredStrength).toEqual(true);
    expect(characterIntelligence >= randomlyGeneratedItemRequiredIntelligence).toEqual(true);
    expect(ableToUseWeaponBool).toEqual(true);

  });
});