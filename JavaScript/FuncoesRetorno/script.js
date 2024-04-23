/* 
  Função somar recebe dois parâmetros, a e b.
  Realiza a operação de soma e, em seguida.
  Retorna o resultado usando a palavra-chave return.
*/

// function somar(a, b) {
//   return a + b;
// }

// let resultado = somar(3, 5);
// alert(resultado); // Saída: 8

/* 
  Se uma função não especifica um valor de retorno usando return.
  Ou se usa return sem um valor.
  A função retornará undefined por padrão. 
*/

// function cumprimento(nome) {
//   alert("Olá, " + nome + "!");
//   // Sem instrução 'return', a função retorna 'undefined' implicitamente
// }

// let resultado = cumprimento("Alice");
// alert(resultado); // Saída: undefined

/* 
  Pode-se usar return para encerrar a execução da função antes do final.
  Se uma determinada condição for atendida.
*/

// function verificarNumero(numero) {
//   if (numero > 0) {
//     return "Positivo";
//   } else if (numero < 0) {
//     return "Negativo";
//   } else {
//     return "Zero";
//   }
// }

// let resultado = verificarNumero(7);
// alert(resultado); // Saída: Positivo

/*
  É possível que uma função retorne outra função. 
  Isso é conhecido como função de ordem superior. 
*/

function multiplicador(fator) {
  return function (numero) {
    return numero * fator;
  };
}

let dobrar = multiplicador(2);
let triplicar = multiplicador(3);

alert(dobrar(5)); // Saída: 10
alert(triplicar(5)); // Saída: 15
