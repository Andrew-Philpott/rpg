import $ from 'jquery';
// import { Character } from './js/character';
// import { Type } from './js/type';
// import { isTerminatorless } from '@babel/types';
import { Item } from './js/item';



$(document).ready(function() {
    let item = new Item(1);

    console.log(item.getName());
    let itemModifierArray = item.getListOfItemModifiers();
    for(let i = 0; i < itemModifierArray.length; i++) {
        
        console.log(itemModifierArray[i] + " item modifier");
    }
    console.log(item.getStrength());
    console.log(item.getIntelligence());
    console.log(item.getStrengthRequirement() + " strength req");
    console.log(item.getIntelligenceRequirement() + " int req");
});