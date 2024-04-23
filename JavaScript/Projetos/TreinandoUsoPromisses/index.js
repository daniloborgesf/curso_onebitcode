function imc(wight, height) {
  return new Promise((resolve, reject) => {
    if (typeof wight !== "number" || typeof height !== "number") {
      reject("O tipo do elemento, não é um número!")
    } else {
      resolve(wight / (height * height))
    }
  });
}

function showImc(wight, height) {
  imc(height, wight).then((result) => {
    console.log(`Resultado do IMC: ${result}`)

    if (result < 18.5) {
      console.log("Situação: Magro")
    } else if (result < 25) {
      console.log("Situação: Normal")
    } else if (result < 30) {
      console.log("Situação: Gordo")
    } else if (result < 40) {
      console.log("Situação: Obsidade")
    } else {
      console.log("Situação: Obsidade Grave")
    }
  }).catch((erro) => {
    console.log(erro)
  })

  console.log(`
  :...Calculando o Imc...:
  Peso: ${wight} Kg 
  Altura: ${height}`)
}

showImc(100, 1.60)
showImc(70, 1.60)
showImc(60, "Danilo")
showImc(20, 1.60)