async function imc(weight, height) {
  if (typeof weight !== "number" || typeof height !== "number") {
    Promise.reject("Não é um número!")
  } else {
    return weight / (height * height)
  }
}

async function showImc(weight, height) {
  try {
    const result = await imc(weight, height)
    console.log(`Resultado do IMC: ${result}`)
    if (result < 18.5) console.log('Situação: MAGREZA')
    else if (result < 25) console.log('Situação: NORMAL')
    else if (result < 30) console.log('Situação: SOBREPESO')
    else if (result < 40) console.log('Situação: OBESIDADE')
    else console.log('Situação: OBESIDADE GRAVE')
  } catch (error) {
    console.log(error)
  }
}

showImc(70, 1.60)