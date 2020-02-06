export class Type {
    constructor(typeOfCharacter) {
         this.name = typeOfCharacter;
         this.vitality;
         this.strength;
         this.intelligence;
         this.skills;
        if(this.name === 'warrior') {
            this.vitality = 2;
            this.strength = 2;
            this.intelligence = 1;
            this.skills = [ (function swingSword() {
                return 2 * 2;
            }),
             (function throwSword(strength) {
                console.log(strength * 3);
            })
        ];
        } else {
            this.vitality = 1;
            this.strength = 1;
            this.intelligence = 2;
            this.skills = [ (function fireball(intelligence) {
                console.log(intelligence * 3);
            }), (function blizzard(intelligence) {
                console.log(intelligence * 5);
            })];
        }
    }
    getVitality() {
        return this.vitality;
    }
    getStrength () {
        return this.strength;
    }
    getIntelligence() {
        return this.intelligence;
    }
    
}