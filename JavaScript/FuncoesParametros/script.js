function double(numero) {
  alert("O dobro de " + numero + " é " + numero * 2);
}

// double(5)

function hello(nome = "Visitante") {
  alert("Olá, " + nome);
}

// hello("Danilo")
// hello()

function sum(a, b) {
  alert("O resultado é " + (a + b));
}

// sum(1, 2)

function createUser(nome, email, senha, sexo = "Nenhum") {
  const user = {
    nome, // mesmo que -> nome: nome
    email,
    senha,
  };
  console.log(user);
}

createUser("Danilo", "danilo@gmail.com", 12345678);
