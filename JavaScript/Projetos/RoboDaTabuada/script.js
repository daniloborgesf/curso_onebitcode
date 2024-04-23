const numero = parseFloat(prompt("De qual número você deseja calcular a tabuada?"))
let resultado = ""

for (let fator = 1; fator <= 10; fator++) {
  resultado += " -> " + numero + " x " + fator + " = " + (numero * fator) + "\n"
}

alert("Resultado da Tabuada de: " + numero + ":\n\n" + resultado)