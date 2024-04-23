// funação normal usando o 'function'
function normalSum(a, b) {
  return a + b;
}

console.log(`Soma Normal: ${normalSum(2, 2)}`);

// função 'anônima' com 'function'
const anonymousSum = function (a, b) {
  return a + b;
};

console.log(`Soma Anônima: ${anonymousSum(2, 2)}`);

// função usando a 'arrow functions'
const arrowSum = (a, b) => {
  return a + b;
};

console.log(`Soma Arrow Function: ${arrowSum(2, 2)}`);

// função 'anônima' com 'arrow function'
const subtract = (a, b) => a - b;
console.log(`Subtração: ${subtract(5, 2)}`);

const number = 21;
const double = (n) => `O dobro de ${n} é ${n * 2}`;
console.log(`Dobro: ${double(number)}`);

const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

const startingWithP = towns.filter((town) => town[0] === "P");
console.log(startingWithP);
