interface Animal {
  nome: string;
}

function imprimirNome<T extends Animal>(animal: T) {
  console.log(animal.nome);
}

imprimirNome({ nome: "Rex" });// Saída: "Rex"
imprimirNome({ idade: 5 });// Erro: Propriedade 'nome' está ausente em '{ idade: number; }'