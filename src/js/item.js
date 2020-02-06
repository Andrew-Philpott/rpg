export class Item {
    constructor(playerLevel) {
      this.strength = playerLevel * 2;
      this.intelligence = playerLevel * 2;

      this.name = this.createRandomItemName();
      this.listOfUniqueItemModifiers = this.createRandomMultipliers();
      this.strengthReq = (this.strength / 2);
      this.intelligenceReq = (this.intelligence / 2);
    }
  getName() {
      return this.name;
  }
    getStrength() {
      return this.strength;
    }
    getIntelligence() {
      return this.intelligence;
    }
    getStrengthReq() {
      return this.strengthReq;
    }
    getIntelligenceReq() {
      return this.intelligenceReq;
    }
    getSellValueInGold() {
      //sell value in gold should be dependent on the str and damage
    }

    getListOfItemModifiers() {
      return this.listOfUniqueItemModifiers;
    }
    createRandomItemName() {
      let firstNamesArray = ["The","Daring","Mystic","Searing","Witches"];
      let secondNamesArray = ["Killer","Boom","King"];
      let namesToChooseFrom = [firstNamesArray, secondNamesArray];
      let numberOfNamesToAdd = namesToChooseFrom.length;
      let generatedItemName = "";
      
      for(let i = 0; i < numberOfNamesToAdd; i++) {
        let nameArrayToSelectNameFrom = namesToChooseFrom[i];
        let value = Math.floor((Math.random() * (nameArrayToSelectNameFrom.length)));
          if(i === (numberOfNamesToAdd-1)) {
            generatedItemName += nameArrayToSelectNameFrom[value];
          } else {
            generatedItemName += nameArrayToSelectNameFrom[value] + " ";
          }
      }
      return generatedItemName;
    }
      
    createRandomMultipliers() {
      let numberOfAddedItemModifiers = Math.floor((Math.random() * 4));
      let listOfUniqueItemModifiers = [];
      //console.log(numberOfAddedItemModifiers + " numberofaddeditemmodifiers");
  
      let operators = ['*','+'];
      //console.log(operators.length + " operators length");
      if(numberOfAddedItemModifiers != 0) {
        for(let i = 0; i < numberOfAddedItemModifiers; i++) {
          let randomlyGeneratedValueToGetAttribute = Math.floor((Math.random() * 2));
          //console.log(randomlyGeneratedValueToGetAttribute + " # to select attribute");
          let attributeToModify = Object.keys(this)[randomlyGeneratedValueToGetAttribute];
          //console.log(attributeToModify + " attribute to modify");
          let randomlySelectedOperatorNumber = Math.floor((Math.random() * operators.length));
          //console.log(randomlySelectedOperatorNumber + " randomly selected operator number")
          let randomlySelectedOperator = operators[randomlySelectedOperatorNumber];
          //console.log(randomlySelectedOperator + " randomly selected operator")
          let randomlyGeneratedModifierNumber = Math.floor((Math.random() * 2)) + 1;
          if (randomlySelectedOperator === '+') {
            this[`${attributeToModify}`] = this[`${attributeToModify}`] + randomlyGeneratedModifierNumber;
            listOfUniqueItemModifiers.push(`+ ${randomlyGeneratedModifierNumber} to ${Object.keys(this)[randomlyGeneratedValueToGetAttribute]}`);
            //console.log(Object.keys(this)[randomlyGeneratedValueToGetAttribute] + " object.keys");
            //console.log(attributeToModify + " in +");
          } else {
            this[`${attributeToModify}`] = this[`${attributeToModify}`] * randomlyGeneratedModifierNumber;
            listOfUniqueItemModifiers.push(`${randomlyGeneratedModifierNumber} to ${Object.keys(this)[randomlyGeneratedValueToGetAttribute]}`);
            //console.log(attributeToModify + " in *");
            //console.log(Object.keys(this)[randomlyGeneratedValueToGetAttribute] + " object.keys");
          }
        }
      }
      return listOfUniqueItemModifiers;
    }
  }