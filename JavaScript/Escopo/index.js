/*
  Variáveis definidas fora de qualquer função ou bloco de código têm escopo global.
*/

// let globalVar = "Eu sou global";

// function mostrarGlobalVar() {
//   alert(globalVar);
// }

// mostrarGlobalVar(); // Saída: Eu sou global

/*
  Variáveis declaradas dentro de uma função ou bloco de código têm escopo local.
*/

// function mostrarLocalVar() {
//   let localVar = "Eu sou local";
//   alert(localVar);
// }

// mostrarLocalVar(); // Saída: Eu sou local

/* Tentar acessar localVar fora da função resultará em um erro */
// alert(localVar); // Erro: localVar is not defined

/*
  A introdução do let e const no ECMAScript 6 (ES6) trouxe o escopo de bloco para JavaScript.
  Variáveis declaradas com let e const têm escopo de bloco.
  Significa que são acessíveis apenas dentro do bloco em que foram declaradas.
*/

// if (true) {
//   let blocoVar = "Eu sou de um bloco";
//   alert(blocoVar);
// }

/* Tentar acessar blocoVar fora do bloco resultará em um erro */
// alert(blocoVar); // Erro: blocoVar is not defined

/*
  Closures são funções que "lembram" o escopo em que foram criadas.
  Têm acesso às variáveis desse escopo, mesmo que a função seja chamada fora desse escopo.
*/

function criarIncrementador(incremento) {
  return function (numero) {
    return numero + incremento;
  };
}

let incrementarEm5 = criarIncrementador(5);
alert(incrementarEm5(10)); // Saída: 15
