/*
FUNÇÃO SOME: Verifica se pelo menos um elemento em um array passa por um teste implementado pela função fornecida.

FUNÇÃO EVERY: Verifica se todos os elementos em um array passam pelo teste implementado pela função fornecida.

FUNÇÃO FIND: Retorna o primeiro elemento em um array que passa pelo teste implementado pela função fornecida.

FUNÇÃO FINDINDEX: Retorna o índice do primeiro elemento em um array que passa pelo teste implementado pela função fornecida.

FUNÇÃO SORT: Classifica os elementos de um array com base em uma função de comparação.

FUNÇÃO MAP: Pode ser utilizada para transformar arrays de objetos, aplicando uma função a cada objeto.
*/

let numeros = [1, 2, 3, 4, 5];

let temPares = numeros.some(function (numero) {
  return numero % 2 === 0;
});

// alert("Tem pares?\n" + temPares); // Saída

let todosSaoPares = numeros.every(function (numero) {
  return numero % 2 === 0;
});

// alert("Todos são pares?\n"+todosSaoPares); // Saída

let primeiroPar = numeros.find(function (numero) {
  return numero % 2 === 0;
});

// alert("Primeiro número par é: " + primeiroPar);

let indicePrimeiroPar = numeros.findIndex(function (numero) {
  return numero % 2 === 0;
});

// alert("O primeiro elemento do Array é: " + indicePrimeiroPar); // Saída

let frutas = [" Maçã ", " Banana ", " Laranja ", " Uva "];

frutas.sort(); // Ordena as frutas em ordem alfabética

// alert(frutas); // Saída

let pessoas = [
  { nome: " Alice ", idade: 25 },
  { nome: " Bob ", idade: 30 },
  { nome: " Charlie ", idade: 22 },
];

let nomes = pessoas.map(function (pessoa) {
  return pessoa.nome;
});

alert(nomes); // Saída
