let saudacao = function (nome) {
  // Atribuindo uma função anônima a uma variável
  alert("Olá, " + nome + "!");
};

// saudacao("Danilo");

setTimeout(function () {
  // Usando uma função anônima como argumento para outra função
  alert("Passaram-se 2 segundos!");
}, 2000);

(function () {
  // Uma IIFE é uma função anônima que é definida e executada imediatamente.
  alert("IIFE executada imediatamente!");
})();

let dobro = (x) => x * 2;
// Arrow function como expressão
alert(dobro(5));
