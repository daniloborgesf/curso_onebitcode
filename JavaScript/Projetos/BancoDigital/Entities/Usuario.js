const Conta = require("./Conta");

module.exports = class Usuario {
  constructor(email, nome) {
    this.email = email;
    this.nome = nome;
    this.conta = new Conta(this);
  }
};
