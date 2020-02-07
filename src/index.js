import $ from 'jquery';
// import { Character } from './js/character';
// import { Type } from './js/type';
// import { isTerminatorless } from '@babel/types';
//import { Item } from './js/item';
//import { Inventory } from './js/inventory';
import { Character } from './js/character';
import { Type } from './js/type';
//import { attachCharacterCreationListener } from './js/interface'
import { createPlayer } from './js/interface'
// constructor(maxCapacity) {
//     this.maxCapacity = maxCapacity;
//     this.inventory = new Array(this.maxCapacity);
//     this.currentCapacity = 4;
$(document).ready(function() {

  $("form").submit(function(event) {
    let characterType = new Type($("#character-text-input").val());
    let character = new Character(2,2,2,characterType);
    createPlayer(character);

    event.preventDefault();
});
  //attachCharacterCreationListener();
    // let type = new Type('warrior');
    // let character = new Character(2,2,2,type);
    // let item1 = new Item(1);
    // let item2 = new Item(1);

    // character.addItemToInventory(item1);
    // character.addItemToInventory(item2);

    // console.log(character.inventory.inventory.length + " length of inventory array");

    // // let item1FromInventory = character.selectItemFromInventory(0);
    // // let item2FromInventory = character.selectItemFromInventory(0);
    // character.dropItemFromInventory(0);
    // console.log(character.inventory.inventory.length + " length of inventory array");

    // character.sellItemFromInventory(0);
    // console.log(character.inventory.inventory.length + " length of inventory array");
    
    // console.log(character.getGold() + " get gold value");
    //console.log(character.selectItemFromInventory(0));
    // console.log(item1.getSellValueInGold());
    // console.log(item2.getSellValueInGold());
    // console.log(item3.getSellValueInGold());
    // console.log(item4.getSellValueInGold());
    // console.log(item5.getSellValueInGold());

   // let item4 = new Item(1);
    // inventory.addItem(item1);
    // inventory.addItem(item2);
    // inventory.addItem(item3);
    // inventory.addItem(item4);
    // inventory.addItem(item5);
    // console.log(item.getName());
   // let itemModifierArray = item.getListOfItemModifiers();
    // for(let i = 0; i < itemModifierArray.length; i++) {
        
    //     console.log(itemModifierArray[i] + " item modifier");
    // }
    // console.log(item.getStrength());
    // console.log(item.getIntelligence());
    // console.log(item.getStrengthRequirement() + " strength req");
    // console.log(item.getIntelligenceRequirement() + " int req");
});