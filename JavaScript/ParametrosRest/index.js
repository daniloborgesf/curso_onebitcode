function soma(...numeros) {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log(soma(1, 1)); // 2
console.log(soma(2, 2, 2, 2, 2)); // 10
console.log(soma(32, 5, 74, 7, 1, 9, 90)); // 218
