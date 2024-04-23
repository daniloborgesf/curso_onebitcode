const vagas = [];

// Função que lista as vagas
function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    // 1. nome, (x de candidatos)
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

// Função que cria uma nova vaga
function novaVaga() {
  const nome = prompt("Informe o nome da vaga:");
  const descricao = prompt("Informe a descrição da vaga:");
  const dataLimite = prompt("Informe a data limiete para a vaga: (dd/mm/aaaa)");

  // Confirmar se os dados da vaga estão corretos
  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?" + "\nNome: " + nome + "\nDescrição: " + descricao + "\nData Limite: " + dataLimite,
  );

  // Se o usuário confirmar
  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada");
  }
}

// Função de exibir informações detalhadas da vaga
function exibirVaga() {
  const indice = prompt("Informe o indice da vaga:");

  if (indice >= vagas.length || indice < 0) {
    alert("Indice inválido");
    return;
  }

  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "");

  alert(
    "\nVaga n°: " +
    indice +
    "\nNome: " +
    vaga.nome +
    "\nDescrição: " +
    vaga.descricao +
    "\nData Limite: " +
    vaga.dataLimite +
    "\nQuantidade de Candidatos: " +
    vaga.candidatos.length +
    "\nCandidatos Inscritos: " +
    candidatosEmTexto,
  );
}

// Função de inscrever um candidato em uma vaga
function inscreverCandidato() {
  const candidato = prompt("Informe o nome do candidato(a):");
  const indice = prompt("Informe o índice da vaga referente à inscrição:");
  const vaga = vagas[indice];

  // Confirmação para o cadastro do candidato
  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
    candidato +
    " na vaga" +
    indice +
    "?" +
    "\nVaga: " +
    vaga.nome +
    "\nDescrição: " +
    vaga.descricao +
    "\nData Limite: " +
    vaga.descricao,
  );

  // Caso sim, ele cadastra o candidato
  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada");
  }
}

// Função para excluir uma vaga
function excluirVaga() {
  const indice = prompt("Informe o indice da vaga que deseja excluir:");
  const vaga = vagas[indice];

  // Confirmação para excluir a vaga
  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " + indice + "?" + "\nVaga: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.descricao,
  );

  // Caso sim, ele remove a vaga
  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída");
  }
}

// Função para exibir o menu do usuário
function exibirMenu() {
  const opcao = prompt(
    "----: Cadastro de Vagas de Emprego :----" +
    "\n1. Listar vagas disponíveis" +
    "\n2. Criar uma nova vaga" +
    "\n3. Visualizar uma vaga" +
    "\n4. Inscrever um candidato(a)" +
    "\n5. Excluir uma vaga" +
    "\n6. Sair",
  );

  return opcao;
}

// Funação que executa o programa
function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case 6:
        alert("Saindo..");
        break;

      default:
        alert("Opção inválida!");
        break;
    }
  } while (opcao !== "6");
}

// Executar
executar();
