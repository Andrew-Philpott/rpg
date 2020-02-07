export class Inventory {
  constructor(maxCapacity) {
    this.maxCapacity = maxCapacity;
    this.inventory = new Array();
    this.currentCapacity = maxCapacity;
  }

  addItem(item) {
    if((item.getSize()) <= this.currentCapacity) {
      this.inventory.push(item);
      this.currentCapacity = this.currentCapacity - 1;
      console.log("Can add item");
    } else {
      console.log("Can't add item");
    }
  }

  selectItem(indexOfItem) {
    let item = this.inventory[indexOfItem];
    return item;
  }

  dropItem(indexOfItem) {
    this.inventory.splice(indexOfItem,1);
    this.currentCapacity = this.currentCapacity + 1;
  }

  sellItem(indexOfItem) {
    this.inventory.splice(indexOfItem,1);
    this.currentCapacity = this.currentCapacity + 1;
  }
}