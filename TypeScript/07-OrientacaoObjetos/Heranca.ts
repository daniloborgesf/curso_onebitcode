class Animal {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  som() {
    console.log("Faz algum som");
  }
}

class Cachorro extends Animal {
  som() {
    console.log("Au au!");
  }
}

let meuCachorro = new Cachorro("Rex");
meuCachorro.som(); // Saída: "Au au!"
