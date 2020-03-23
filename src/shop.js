var Part = require("./part");

class Shop {
  constructor({name}) {
    this.name = name;
    this.inventory = {};
  }

  addInventory(item){
   if(item instanceof Part){
   this.inventory[item.type] = item;
   }
  }

  outfitShip(ship) {
    var hasCaptain = ship.captain;
    if (!hasCaptain) {
      return `cannot outfit a ship without a captian`;
    }
  }
}


module.exports = Shop
