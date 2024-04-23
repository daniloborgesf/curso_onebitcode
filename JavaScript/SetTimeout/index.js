console.log("Programa Iniciado!");

const timeoutId = setTimeout(() => {
  console.log("3 segundos se passaram, desde o início do programa");
}, 1000 * 3);

clearTimeout(timeoutId);
