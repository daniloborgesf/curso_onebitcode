class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  depositar(valor: number) {
    this.saldo += valor;
  }

  sacar(valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  getSaldo(): number {
    return this.saldo;
  }
}

let conta = new ContaBancaria(1000);
console.log(conta.getSaldo()); // Saída: 1000
conta.depositar(500);
console.log(conta.getSaldo()); // Saída: 1500
conta.sacar(200);
console.log(conta.getSaldo()); // Saída: 1300