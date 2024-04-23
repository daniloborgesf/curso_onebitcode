let seconds = 0;

console.log("Iniciando o Programa!");

const intervalId = setInterval(() => {
  seconds += 3;
  console.log(`Se passaram ${seconds} segundos.`);

  if (seconds > 10) {
    clearInterval(intervalId);
    console.log("Tempo esgotado, encerrando o programa!");
  }
}, 1000 * 3);
