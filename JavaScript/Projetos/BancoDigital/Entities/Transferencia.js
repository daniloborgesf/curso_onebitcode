module.exports = class Transferencia {
  constructor(origemUsuario, destidoUsuario, valorTransferencia) {
    this.origemUsuario = origemUsuario;
    this.destidoUsuario = destidoUsuario;
    this.valorTransferencia = valorTransferencia;
    this.dataDeCredito = new Date();
  }
};
