import { Item } from './../src/js/item.js';

describe('Item', () => {

    test('Should be able to make an item object', () => {
      let playerLevel = 1;

      let item = new Item(playerLevel);

      expect(item instanceof Item).toEqual(true);
    });

    test('Should be able to make an item object with strength, intelligence, required strength, required intelligence, and name', () => {
        let playerLevel = 1;
  
        let item = new Item(playerLevel);
        // let randomlyGeneratedItemName = item.getName();
        // let randomlyGeneratedItemStrength = item.getStrength();
        // let randomlyGeneratedItemIntelligence = item.getIntelligence();
        // let randomlyGeneratedItemRequiredStrength = item.getStrengthRequirement();
        // let randomlyGeneratedItemRequiredIntelligence = item.getIntelligenceRequirement();
        
        let randomlyGeneratedItemName = 0;
        let randomlyGeneratedItemStrength = 0;
        let randomlyGeneratedItemIntelligence = 0;
        let randomlyGeneratedItemRequiredStrength = 0;
        let randomlyGeneratedItemRequiredIntelligence = 0;
        
        expect(randomlyGeneratedItemName).not.toBeFalsy();
        expect(randomlyGeneratedItemStrength).not.toBeFalsy();
        expect(randomlyGeneratedItemIntelligence).not.toBeFalsy();
        expect(randomlyGeneratedItemRequiredStrength).not.toBeFalsy();
        expect(randomlyGeneratedItemRequiredIntelligence).not.toBeFalsy();
      });
});