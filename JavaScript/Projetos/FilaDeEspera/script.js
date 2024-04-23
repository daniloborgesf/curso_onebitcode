let fila = [];
let opcao = "";

do {
  let pacientes = "";

  for (let i = 0; i < fila.length; i++) {
    // fila.length: Realiza contagem de pacientes cadastrados
    // fila[i]: Armazena o paciente no Array
    pacientes += i + 1 + "º - " + fila[i] + "\n";
  }

  opcao = prompt("Pacientes:\n" + pacientes + "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair");

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?");
      fila.push(novoPaciente); // fila.push: Cadastra o Paciente no Fim da Fila
      break;

    case "2":
      const pacienteConsultado = fila.shift(); // fila.shift: Remove o Primeiro da Fila
      if (!pacienteConsultado) {
        alert("Não há pacientes na fila!");
      } else {
        alert(pacienteConsultado + " foi removido da fila.");
      }
      break;

    case "3":
      alert("Encerrando...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== "3");
