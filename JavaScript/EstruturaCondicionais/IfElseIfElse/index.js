let hora = prompt("Digite a Hora:");

hora = parseFloat(hora);

if (hora < 12) {
  alert("Bom dia!");
} else if (hora < 18) {
  alert("Boa tarde!");
} else {
  // Este bloco é executado se nenhuma das condições anteriores for verdadeira
  alert("Boa noite!");
}
