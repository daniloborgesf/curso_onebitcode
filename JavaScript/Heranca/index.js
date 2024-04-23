const Apartament = require("./Apartament");
const Property = require("./Property");

class House extends Property { }

const land = new Property(200, 50000);
const someHouse = new House(120, 20000);

console.log(land);
console.log(someHouse);
console.log(someHouse instanceof Property);

const apart = new Apartament(121, 250, 52222);
console.log(apart);
console.log(apart.getFloor());
console.log(apart.getPricePerSquareMeter());
