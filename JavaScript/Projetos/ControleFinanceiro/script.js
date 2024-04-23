let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:")); // 1° Solicita o saldo inicial
let opcao = ""; // Armazena a opção

do {
  // 2° Adicionamos o do while e dentro dele um prompt contendo o saldo atual e as opções:
  opcao = prompt("Saldo disponível: R$ " + saldo + "\n1 - Adicionar dinheiro" + "\n2 - Remover dinheiro" + "\n3 - Sair");

  switch (
  opcao // 3° Switch encarregado do comportamento de cada opção
  ) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"));
      break;
    case "2":
      saldo -= prompt("Informe o valor a ser removido:");
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Entrada inválida.");
      break;
  }
} while (opcao !== "3");
