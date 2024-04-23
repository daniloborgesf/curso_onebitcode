/* Em JavaScript, funções de ordem superior, ou "higher-order functions," são frequentemente usadas em conjunto com arrays para realizar operações de transformação, filtragem, redução e iteração de maneira mais concisa e expressiva.

Função map é usada para transformar cada elemento de um array aplicando uma função a eles. Ela retorna um novo array com os resultados da aplicação da função.

Função reduce reduz os elementos de um array a um único valor aplicando uma função acumuladora.

Função forEach executa uma função uma vez para cada elemento em um array. */

let numeros = [1, 2, 3, 4, 5];

let quadrados = numeros.map(function (numero) {
  return numero * numero;
});

// alert(quadrados); // Saída

let pares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});

// alert(pares); // Saída

let soma = numeros.reduce(function (acumulador, numero) {
  return acumulador + numero;
}, 0);

// alert(soma); // Saída

let frutas = ["Maçã", "Banana", "Laranja"];

frutas.forEach(function (fruta) {
  alert(fruta); // Saída
});
