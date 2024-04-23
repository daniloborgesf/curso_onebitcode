/* 
Média Aritmética Simples: Pode ser calculada somando todos os valores e dividindo o total da soma pela quantidade de valores. 
*/

const mediaSimples = (...numeros) => {
  const soma = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
  return soma / numeros.length;
};

console.log(`Média Aritmética Simples: ${mediaSimples(3, 6, 10, 9)}`);

/*
Média Aritmética Ponderada: Semelhante à média aritmética simples, porém é possível atribuir um peso a cada valor informado, fazendo com que ele tenha um valor proporcionalmente diferente dos outros. Pode ser calculada somando as multiplicações dos valores pelos seus respectivos pesos e dividindo o total pela soma dos pesos.
*/

const mediaPonderada = (...entradas) => {
  const soma = entradas.reduce((acumulador, { numero, peso }) => acumulador + numero * (peso ?? 1), 0);
  const somaPeso = entradas.reduce((acumulador, entrada) => acumulador + (entrada.peso ?? 1), 0);
  return soma / somaPeso;
};

console.log(`Média Aritmética Ponderada: ${mediaPonderada({ numero: 9, peso: 3 }, { numero: 7, peso: 1 }, { numero: 8 })}`);

/*
Mediana: Pode ser calculada encontrando o valor central de uma sequência de números crescente ou decrescente. Caso existam dois números centrais, a mediana é calculada através da média aritmética simples desses dois números.
*/

const mediana = (...numeros) => {
  const numerosOrdenados = [...numeros].sort((a, b) => a - b);
  const meio = Math.floor(numerosOrdenados.length / 2);
  if (numerosOrdenados.length % 2 !== 0) {
    return numerosOrdenados[meio];
  }

  const primeiraMediana = numerosOrdenados[meio - 1];
  const segundaMediana = numerosOrdenados[meio];

  return mediaSimples(primeiraMediana, segundaMediana);
};

console.log(`Mediana: ${mediana(2, 5, 19, 7, 30)}`);

/* 
Moda: Pode ser calculada encontrando o valor que mais se repete em um dado conjunto.
*/

const moda = (...numeros) => {
  const quantidades = numeros.map((numero) => [numero, numeros.filter((n) => numero === n).length]);

  quantidades.sort((a, b) => b[1] - a[1]);
  return quantidades[0][0];
};

console.log(`Moda: ${moda(1, 1, 5, 4, 2, 4, 7, 9, 8, 4, 5, 7, 5, 4, 3)}`);
