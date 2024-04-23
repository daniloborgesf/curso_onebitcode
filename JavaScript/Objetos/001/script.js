// Criando um objeto pessoa com propriedades
let pessoa = {
  nome: "Alice",
  idade: 30,
  cidade: "Exemplo",
  // saudacao: function () {
  //   alert("Olá, meu nome é " + this.nome + "!");
  // }
};

// Acessando propriedades do objeto
// alert(pessoa.nome); // Saída: Alice
// alert(pessoa.idade); // Saída: 30

// Chamando um método do objeto
// pessoa.saudacao(); // Saída: Olá, meu nome é Alice!

// Adicionando uma nova propriedade
pessoa.profissao = "Engenheira";

// Removendo uma propriedade
// delete pessoa.cidade;

// Iterando sobre as propriedades usando for...in
for (let propriedade in pessoa) {
  alert(propriedade + ": " + pessoa[propriedade]);
}

// Obtendo um array de todas as chaves do objeto
// let chaves = Object.keys(pessoa);
// console.log(chaves); // Saída: ["nome", "idade", "profissao"]

// Objeto como estrutura de dados
// let livro = {
//   titulo: "JavaScript: The Good Parts",
//   autor: "Douglas Crockford",
//   anoPublicacao: 2008,
//   ISBN: "978-0596517748"
// };
