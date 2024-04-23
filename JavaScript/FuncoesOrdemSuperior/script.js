/* São funções que aceitam outras funções como argumentos ou retornam funções como resultado. */

let numeros = [1, 2, 3, 4, 5];

let dobrados = numeros.map(function (numero) {
  /* Função map é usada para transformar cada elemento de um array aplicando uma função a eles.
  Retorna um novo array com os resultados da aplicação da função. */
  return numero * 2;
});

// alert(dobrados); // Saída

let pares = numeros.filter(function (numero) {
  /* Função filter cria um novo array com todos os elementos que passam por um teste implementado pela função fornecida. */
  return numero % 2 === 0;
});

// alert(pares); // Saída

let soma = numeros.reduce(function (acumulador, numero) {
  /* Função reduce reduz os elementos de um array a um único valor aplicando uma função acumuladora. */
  return acumulador + numero;
}, 0);

// alert(soma); // Saída

let frutas = ["maçã", "banana", "laranja"];

frutas.forEach(function (fruta) {
  /* Função foreach executa uma função uma vez para cada elemento em um array. */
  // alert(fruta); // Saída
});

function multiplicador(fator) {
  /* Funções de ordem superior também podem retornar funções. */
  return function (numero) {
    return numero * fator;
  };
}

let dobrar = multiplicador(2);
let triplicar = multiplicador(3);

// alert(dobrar(5)); // Saída
// alert(triplicar(5)); // Saída

setTimeout(function () {
  /* Função setTimeout é uma função de ordem superior que aceita uma função como argumento.
  E a executa após um determinado período de tempo. */
  // alert("Passaram-se 2 segundos!"); // Saída
}, 2000);
