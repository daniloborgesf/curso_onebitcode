const Mage = require("./Mage.js");
const Warrior = require("./Warrior.js");

const arthur = new Mage("Arthur", 1, 2, 3, 4, 5);
const demon = new Warrior("Demon", 6, 7, 8, 9, 10);

console.table({ arthur, demon });
demon.switchStance("defendendo");
console.table({ arthur, demon });
