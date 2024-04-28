class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

let pessoa1 = new Pessoa("João", 30);
pessoa1.saudacao(); // Saída: "Olá, meu nome é João e tenho 30 anos."