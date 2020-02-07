import { Character } from "./character";

export function attachCharacterCreationListener() {
    $("form").submit(function(event) {
        let characterType = $("#character-text-input").val();
        let character = new Character(2,2,2,characterType);
        createPlayer(character);

        event.preventDefault();
    });
}

export function createMonsters(monsters) {
    let main = $("#main-content");
    let monstersHtml = `<div id='monsters'>`;
    for(let i = 0; i < monsters.length; i++) {
        monstersHtml += `<div class='monster'>${monsters[i]}</div>`;
    }
    monstersHtml += `</div>`;
    return main.html(monstersHtml);
}

export function createPlayer(player) {
    let main = $("#main-content");
    let playerHtml = `<div id='player'><ul>
    <li>${player.getName()}</li>
    <li>${player.getStrength()}</li>
    <li>${player.getIntelligence()}</li>
    <li>${player.getHealth()}</li>
    <li>${player.getCurrentExperience()}</li>
    <li>${player.getGold()}</li></ul>
    </div>`;

    return main.html(playerHtml);
}

// export function Go() {

// }