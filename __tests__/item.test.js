import { Item } from './../src/js/item.js';

describe('Item', () => {

    test('Should be able to make an item object', () => {
      let playerLevel = 1;

      let item = new Object(playerLevel);

      expect(item instanceof Item).toEqual(true);
    });
});