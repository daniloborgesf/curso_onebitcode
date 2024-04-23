const Deposito = require("./Entities/Deposito.js");
const Emprestimo = require("./Entities/Emprestimo.js");
const Transferencia = require("./Entities/Transferencia.js");
const Usuario = require("./Entities/Usuario.js");

module.exports = class App {
  static #usuarios = [];

  static procurarUsuario(email) {
    const usuario = this.#usuarios.find((usuario) => usuario.email === email);
    return usuario ?? null;
  }

  static cadastrarUsuario(email, nome) {
    const usuarioExiste = App.procurarUsuario(email);

    if (!usuarioExiste) {
      this.#usuarios.push(new Usuario(email, nome));
    }
  }

  static realizarDeposito(email, valorDeposito) {
    const usuario = App.procurarUsuario(email);

    if (usuario) {
      const novoDeposito = new Deposito(valorDeposito);
      usuario.conta.adicionarDeposito(novoDeposito);
    }
  }

  static realizarTransferencia(origemEmailUsuario, destinoEmailUsuario, valorTransferencia) {
    const origemUsuario = App.procurarUsuario(origemEmailUsuario);
    const destidoUsuario = App.procurarUsuario(destinoEmailUsuario);

    if (origemUsuario && destidoUsuario) {
      const novaTransferencia = new Transferencia(origemUsuario, destidoUsuario, valorTransferencia);
      origemUsuario.adicionarTransferencia(novaTransferencia);
      destidoUsuario.adicionarTransferencia(novaTransferencia);
    }
    a;
  }

  static realizarEmprestimo(email, valorEmprestimo, quantidadeDeParcelas) {
    const usuario = App.procurarUsuario(email);

    if (usuario) {
      const novoEmprestimo = new Emprestimo(valorEmprestimo, quantidadeDeParcelas);
      usuario.conta.adicionarEmprestimo(novoEmprestimo);
    }
  }

  static escolherTaxa(novaTaxaPorcentagem) {
    Emprestimo.taxa = novaTaxaPorcentagem;
  }
};
