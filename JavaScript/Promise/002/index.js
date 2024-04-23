function execute() {
  // Executa uma ação
  return new Promise((resolve, reject) => {
    console.log("Promise está sendo executada...");
    setTimeout(() => {
      console.log("Resolvendo a promise...");
      resolve("Resultado");
    }, 1000 * 4);
  });
}

const pro = execute();

setTimeout(() => {
  console.log(pro);
}, 1000 * 5);

console.log(pro);