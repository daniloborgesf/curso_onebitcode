// 1° Obter dados do turista:
const turista = prompt("E aí, turista! Qual é o seu nome?")

// 2° Perguntar se alguma cidade foi visitada:
let continuar = prompt("Você visitou alguma cidade? (S/N)")


if (continuar === "S") { // 3° Caso sim, realiza o while, para obter as cidades:
  let cidades = ""
  let contagem = 0

  while (continuar === "S") {
    let cidade = prompt("Qual é o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visitou alguma outra cidade? (S/N)")
  }

  alert( // 4° Exibe as informações do while:
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
  )

} else { // 5° Caso não, orienta a viajar:
  alert(turista + "! Vá viajar!")
}