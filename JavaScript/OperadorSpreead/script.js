const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];
// usando o spreead
// console.log(towns) // [ 'Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc' ]
// console.log(...towns) // Prontera Izlude Payon Alberta Geffen Morroc
// console.log(...towns[0]) // P r o n t e r a

// ambos arrays serão modificados devido ser uma referência
const townsCopy = towns;
townsCopy.pop(); // remove o elemento
townsCopy.pop(); // remove outro elemento
townsCopy.push("Juno"); // adiciona o elemento
// console.log({ towns, townsCopy })

// clonando o array 'tows' ele gera um novo array com as modificações
const townsClone = [...towns];
townsClone.push("Aldebaran"); // adicionando elemento
// console.log({ towns, townsCopy, townsClone })

// operador 'spreead' com 'objetos'
const townsObj = { ...towns };
const townsObjClone = { ...townsObj };

townsObjClone.test = "Test";
console.log({ townsObj, townsObjClone });
