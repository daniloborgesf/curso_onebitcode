module.exports = class Conta {
  #saldo;

  constructor(usuario) {
    this.proprietario = usuario;
    this.#saldo = 0;
    this.depositos = [];
    this.emprestimos = [];
    this.transferencias = [];
  }

  get saldo() {
    return this.#saldo;
  }

  adicionarDeposito(deposito) {
    this.#saldo += deposito.valorDeposito;
    this.depositos.push(deposito);
  }

  adicionarEmprestimo(emprestimo) {
    this.#saldo += emprestimo.valorEmprestimo;
    this.emprestimos.push(emprestimo);
  }

  adicionarTransferencia(transferencia) {
    if (transferencia.destinoUsuario.email === this.proprietario.email) {
      this.#saldo += transferencia.valorTransferencia;
      this.transferencias.push(transferencia);
    } else if (transferencia.origemUsuario.email === this.proprietario.email) {
      this.#saldo -= transferencia.valorTransferencia;
      this.transferencias.push(transferencia);
    }
  }
};
