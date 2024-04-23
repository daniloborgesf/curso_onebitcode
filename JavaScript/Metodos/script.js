/*
  Eles são chamados em contexto, o que significa que eles são invocados em relação a um objeto específico.
  Métodos podem acessar e manipular os dados do objeto ao qual estão associados.
*/

// Criando um objeto com um método
let pessoa = {
  nome: "Danilo",
  idade: 30,

  // Criando a função
  saudacao: function () {
    alert("Olá, meu nome é " + this.nome + "!");
  },
};

// Chamando o método do objeto
pessoa.saudacao(); // Saída: Olá, meu nome é Alice!

/*
  Métodos podem ser adicionados a objetos usando funções de construtor.
*/

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.saudacao = function () {
//     alert("Olá, meu nome é " + this.nome + "!");
//   };
// }

// let pessoa1 = new Pessoa("Bob", 25);
// pessoa1.saudacao(); // Saída: Olá, meu nome é Bob!
// let pessoa2 = new Pessoa("Danilo", 27)
// pessoa2.saudacao();

/*
  Objetos em JavaScript possuem métodos embutidos, como toString(), valueOf(), hasOwnProperty(), etc.
*/

// let meuArray = [1, 2, 3];
// alert(meuArray.toString()); // Saída: 1,2,3

/*
  Criar métodos usando arrow functions, mas as arrow functions não têm seu próprio this.
  O this em uma arrow function é herdado do escopo onde a arrow function foi definida.
*/

// let objeto = {
//   nome: "João",
//   saudacao: () => {
//     alert("Olá, meu nome é " + this.nome); // 'this' não se refere ao objeto
//   }
// };

// objeto.saudacao(); // Saída: Olá, meu nome é undefined
