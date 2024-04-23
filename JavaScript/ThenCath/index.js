function execute() {
  return new Promise((resolve, reject) => {
    console.log("A promise está sendo executada.");
    setTimeout(() => {
      if (true) {
        reject("A promise foi rejeitada");
      } else {
        console.log("Resolvendo a promise...");
        resolve("Resolvida.");
      }
    }, 3 * 1000);
  });
}

const pro = execute();

pro
  .then((result) => {
    // Resultado
    console.log(`A promise foi resolvida. O resultado foi: ${result}`);
  })

  .catch((reject) => {
    console.log("A promise foi rejeitada.");
  })

  .finally(() => {
    console.log("A promise foi finalizada.");
  });
