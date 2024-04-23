class NumeroTelefone {
  constructor(stringNumeroTelefone) {
    const stringCorrigida = stringNumeroTelefone.replace(/[\sa-zA-Z]/g, "");
    this.codigoPais = stringCorrigida.match(/(?<=\+)\d{1,3}/)[0];
    this.ddd = stringCorrigida.match(/(?<=\()\d+(?=\))/)[0];
    this.numero = stringCorrigida.match(/(?<=\)).+/)[0].replace(/-/g, "");
  }
}

function Rodar() {
  console.table(new NumeroTelefone("+55 (22) 9 9876-5432"));
  console.table(new NumeroTelefone("+77 (555) a555-999-8888"));
}

Rodar();
