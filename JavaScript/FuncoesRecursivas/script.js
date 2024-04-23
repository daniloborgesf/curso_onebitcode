// Função de cálculo do fatorial de um número
function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

let resultado = fatorial(5);
alert(resultado); // Saída: 120

// Função de divisão por 2
function dividir(num) {
  alert(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
}

// dividir(720);
