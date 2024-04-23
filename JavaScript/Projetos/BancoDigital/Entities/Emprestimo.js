const EmprestimoParcela = require("./EmprestimoParcela");

module.exports = class Emprestimo {
  static #taxa = 1.05;

  static get taxa() {
    return Emprestimo.#taxa;
  }

  static set taxa(novaTaxaPorcentagem) {
    Emprestimo.#taxa = 1 + novaTaxaPorcentagem / 100;
  }

  constructor(valorEmprestimo, quantidadeDeParcelas) {
    this.valorEmprestimo = valorEmprestimo;
    this.quantidadeDeParcelas = [];
    this.dataDeCriacao = this.dataDeCriacao;

    for (let i = 1; i < quantidadeDeParcelas; i++) {
      this.quantidadeDeParcelas.push(new EmprestimoParcela((valorEmprestimo * Emprestimo.#taxa) / quantidadeDeParcelas), i);
    }
  }
};
