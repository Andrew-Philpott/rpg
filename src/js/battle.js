import { Character } from "./character";

export class Battle {
    constructor(character) {
      this.turn = 0;
      this.character = character;
      this.monster = [];
    }

    attack(player) {
      if(player instanceof Character ) {

      }
      this.turn++;
    }

    addMonster(monster) {
      this.monsters.push(monster);
    }
    
    removeMonster(indexOf) {
      this.monsters.splice("")
    }
    checkHealth(characterOrMonster) {
      if(characterOrMonster.getHealth() > 0) {

        if(this.turn === )
      }
    }

    endGame() {

    }
}