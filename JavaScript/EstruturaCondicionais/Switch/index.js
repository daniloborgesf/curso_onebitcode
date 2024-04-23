let diaDaSemana = prompt("Digite o Dia da Semana:");
let mensagem = "";

diaDaSemana = parseFloat(diaDaSemana);

switch (diaDaSemana) {
  case 1:
    mensagem = "Segunda-feira";
    break;
  case 2:
    mensagem = "Terça-feira";
    break;
  case 3:
    mensagem = "Quarta-feira";
    break;
  // ... outros casos ...
  default:
    mensagem = "Dia não reconhecido";
}

alert(mensagem);
