const Adress = require("./Adress");
const Person = require("./Person");

const addr = new Adress("Rua X", 121, "Bairro Y", "São Paulo", "SP");
const people = new Person("Danilo", addr);

// console.log(people)
console.log(people.address.fullAdress());
