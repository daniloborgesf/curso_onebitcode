const houses = [];
let option = "";

do {
  option = prompt(
    "Bem Vindo ao cadastro de Imóveis!\n" + "Total de Imóveis: " + houses.length + "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóvel\n3. Sair"
  );

  switch (option) {
    case "1":
      const house = {};

      house.owner = prompt("Informe o nome do proprietário:");
      house.room = prompt("Informe a quantidade de quartos:");
      house.bathroom = prompt("Informe a quantidade de banheiro:");
      house.garage = prompt("Tem garage? (S/N)");

      const confirmOK = confirm(
        "Salvar este imóvel?" +
        "\nProprietário: " +
        house.owner +
        "\nQuartos: " +
        house.room +
        "\nBanheiros: " +
        house.bathroom +
        "\nGaragem: " +
        house.garage
      );

      if (confirmOK) {
        houses.push(house);
        alert("Imóvel salvo com sucesso!");
      } else {
        alert("Voltando ao menu!");
      }
      break;

    case "2":
      for (let i = 0; i < houses.length; i++) {
        alert(
          "Imóvel " +
          (i + 1) +
          "\nProprietário: " +
          houses[i].owner +
          "\nQuartos: " +
          houses[i].room +
          "\nBanheiros: " +
          houses[i].bathroom +
          "\nGaragem: " +
          houses[i].garage
        );
      }
      break;

    case "3":
      alert("Encerrando");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (option !== "3");
