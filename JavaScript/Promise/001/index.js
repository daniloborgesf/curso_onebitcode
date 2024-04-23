const pro = new Promise((resolve, reject) => {
  console.log("A promise está sendo executada");
  //   resolve();
  //   resolve(true);
  setTimeout(() => {
    if (true) {
      reject(false);
    }

    console.log("Resolvendo a promise...");
    resolve(true);
  }, 1000 * 4);
});

setTimeout(() => {
  console.log(pro);
}, 1000 * 4);

console.log(pro);
