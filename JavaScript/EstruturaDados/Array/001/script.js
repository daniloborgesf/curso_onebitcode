let numeros = [1, 2, 3, 4, 5]; // Criando um array de números
let frutas = ["maçã", "banana", "laranja"]; // Criando um array de strings
let misto = [1, "dois", true, { chave: "valor" }]; // Criando um array de tipos mistos

// Os elementos são acessados por seus índices (começando por zero).

// alert(numeros[0]); // Saída: 1
// alert(frutas[1]);   // Saída: banana

// Modificar um elemento atribuindo um novo valor à posição do índice.

// numeros[2] = 10;
// alert(numeros); // Saída: [1, 2, 10, 4, 5]

// A propriedade length retorna o número de elementos em um array.

//alert(frutas.length); // Saída: 3

// O método push adiciona um elemento ao final do array.

// frutas.push("morango");
// alert(frutas); // Saída: ["maçã", "banana", "laranja", "morango"]

// O método pop remove e retorna o último elemento do array.

// let ultimoElemento = frutas.pop();
// alert(ultimoElemento); // Saída: morango
// alert(frutas);         // Saída: ["maçã", "banana", "laranja"]

// Percorrer os elementos de um array usando loops, como for ou for...of.

// for (let i = 0; i < frutas.length; i++) {
//   alert(frutas[i]);
// }

// OU usando for...of

// for (let fruta of frutas) {
//   alert(fruta);
// }

// JavaScript fornece diversos métodos para manipular arrays.
// Como splice, slice, forEach, map, filter, etc.
// Exemplo de uso de forEach para imprimir cada elemento do array

frutas.forEach(function (fruta) {
  alert(fruta);
});
