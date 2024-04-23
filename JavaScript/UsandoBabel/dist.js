"use strict";

/* 
Média Aritmética Simples: Pode ser calculada somando todos os valores e dividindo o total da soma pela quantidade de valores. 
*/

var mediaSimples = function mediaSimples() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var soma = numeros.reduce(function (acumulador, numeroAtual) {
    return acumulador + numeroAtual;
  }, 0);
  return soma / numeros.length;
};
console.log("M\xE9dia Aritm\xE9tica Simples: ".concat(mediaSimples(3, 6, 10, 9)));

/*
Média Aritmética Ponderada: Semelhante à média aritmética simples, porém é possível atribuir um peso a cada valor informado, fazendo com que ele tenha um valor proporcionalmente diferente dos outros. Pode ser calculada somando as multiplicações dos valores pelos seus respectivos pesos e dividindo o total pela soma dos pesos.
*/

var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, entradas = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entradas[_key2] = arguments[_key2];
  }
  var soma = entradas.reduce(function (acumulador, _ref) {
    var numero = _ref.numero,
      peso = _ref.peso;
    return acumulador + numero * (peso !== null && peso !== void 0 ? peso : 1);
  }, 0);
  var somaPeso = entradas.reduce(function (acumulador, entrada) {
    var _entrada$peso;
    return acumulador + ((_entrada$peso = entrada.peso) !== null && _entrada$peso !== void 0 ? _entrada$peso : 1);
  }, 0);
  return soma / somaPeso;
};
console.log(
  "M\xE9dia Aritm\xE9tica Ponderada: ".concat(
    mediaPonderada(
      {
        numero: 9,
        peso: 3,
      },
      {
        numero: 7,
        peso: 1,
      },
      {
        numero: 8,
      }
    )
  )
);

/*
Mediana: Pode ser calculada encontrando o valor central de uma sequência de números crescente ou decrescente. Caso existam dois números centrais, a mediana é calculada através da média aritmética simples desses dois números.
*/

var mediana = function mediana() {
  for (var _len3 = arguments.length, numeros = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numeros[_key3] = arguments[_key3];
  }
  var numerosOrdenados = [].concat(numeros).sort(function (a, b) {
    return a - b;
  });
  var meio = Math.floor(numerosOrdenados.length / 2);
  if (numerosOrdenados.length % 2 !== 0) {
    return numerosOrdenados[meio];
  }
  var primeiraMediana = numerosOrdenados[meio - 1];
  var segundaMediana = numerosOrdenados[meio];
  return mediaSimples(primeiraMediana, segundaMediana);
};
console.log("Mediana: ".concat(mediana(2, 5, 19, 7, 30)));

/* 
Moda: Pode ser calculada encontrando o valor que mais se repete em um dado conjunto.
*/

var moda = function moda() {
  for (var _len4 = arguments.length, numeros = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numeros[_key4] = arguments[_key4];
  }
  var quantidades = numeros.map(function (numero) {
    return [
      numero,
      numeros.filter(function (n) {
        return numero === n;
      }).length,
    ];
  });
  quantidades.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantidades[0][0];
};
console.log("Moda: ".concat(moda(1, 1, 5, 4, 2, 4, 7, 9, 8, 4, 5, 7, 5, 4, 3)));
