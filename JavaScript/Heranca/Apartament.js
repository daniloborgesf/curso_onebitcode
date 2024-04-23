const Property = require("./Property");

class Apartament extends Property {
  constructor(number, area, price) {
    super(area, price);
    this.number = String(number);
  }

  getFloor() {
    return this.number.slice(0, -2);
  }
}

module.exports = Apartament;
