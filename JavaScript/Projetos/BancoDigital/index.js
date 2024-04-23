const App = require("./App.js");

App.cadastrarUsuario("danilo@teste.com", "Danilo");
App.cadastrarUsuario("millenny@teste.com", "Millenny");

App.realizarDeposito("danilo@teste.com", 100);

App.realizarTransferencia("danilo@teste.com", "millenny@teste.com", 20);

App.escolherTaxa(15);
App.realizarEmprestimo("millenny@teste.com", 10000, 24);

console.table(App.procurarUsuario("danilo@teste.com"));
console.table(App.procurarUsuario("danilo@teste.com").conta);
