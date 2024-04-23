let temperatura = prompt("Digite a Temperatura:");

temperatura = parseFloat(temperatura);

if (temperatura >= 30) {
  alert("Calor do inferno!");
} else {
  // Este bloco é executado se a condição do 'if' for falsa
  alert("A temperatura está agradável.");
}
