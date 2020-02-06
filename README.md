# _RPG_
#### _RPG_, 02.05.2020_
#### By _**Andrew Philpott & Neha Doodi**_
## Description
_The purpose of this application is to provide a fantasy RPG game with dynamic character selection, combat, and progression._

## Specs
* _Spec: The application should be able to make a character object._
  * Input: Create Character
  * Output: Return Character

* _Spec: The application should be able to make a character object with the specified vitality, intelligence, and strength and the current experience should be equal to 0._
  * Input: new Character(2,2,2)
  * Output: Character with vitality, intelligence, and strength of 2

* _Spec: The application should be able to make a level object_
  * Input: Create Level
  * Output: Return Level

* _Spec: The application should be able to persist the id and experience to a level object_
  * Input: new Level(1,100)
  * Output: Return Level with id equal to 1 and experience equal to 100

* _Spec: The application should be able to change a levels id and experience when the level is increased_
  * Input: Level is is increased from 1 with 100 experience to level 2
  * Output: Level is 2 with 200 experience

* _Spec: The application should be able to initialize a character level at id equal to 1 and experience equal to 100_
  * Input: Create Character
  * Output: Level equal to 1, Experience equal to 100

* _Spec: The application should be able to change the current experience of the character._
  * Input: Create Character and change experience to 50
  * Output: Characters current experience should be 50

* _Spec: The application should be able to get a levels experience value._
  * Input: Level 1 with 100 experience - get experience
  * Output: 100

* _Spec: The application should be able to make an item object.
  * Input: Create new item
  * Output: return item

* _Spec: The application should be able to make an item object with strength, intelligence, required strength, required intelligence, and name.
  * Input: Create new Item(1)
  * Output: Name: "Daring Killer", Strength: 2, Intelligence: 2, StrengthReq: 1, IntelligenceReq: 1 

* _Spec: The application should be able to make an item object with the strength required and intelligence required equal to half of the strength and intelligence values respectively. The strength and intellig
  * Input: Create new item
  * Output: Name: "Daring Killer", Strength: 2, Intelligence: 2, StrengthReq: 1, IntelligenceReq: 1 

* _Spec: The application should be able to change a characters level when the characters current experience is greater than or equal to the levels experience value.
  * Input: Level 1 character gains 150 experience
  * Output: Character is now level level 2

* _Spec: The application should allow a character to use an item if the characters strength and intelligence requirements are greater than or equal to the required strength and intelligence values of the item.
  * Input: Characters strength 5, intelligence 5. Item requires 5 strength, 5 intelligence
  * Output: Characters weapon is now that item

## Setup/Installation Requirements
_Clone this repository._

_Open index.html with a web browser._

## Support and contact details
_Issues or concerns? Contact us at andrewphilpott92@gmail.com or nehadoodipoonia@gmail.com_

## Technologies Used
_Html_
_CSS_
_JavaScript_
_jQuery_

### License
Copyright (c) 2020 **_Andrew Philpott & Neha Doodi_**

*This software is licensed under the MIT license.*
