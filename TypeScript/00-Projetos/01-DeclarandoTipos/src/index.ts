const espaconaves = []

function incluiNave(nome: string, piloto: string, limiteTripulacao: number) {
  const espaconave = {
    nome,
    piloto,
    limiteTripulacao,
    tripulacao: [],
    emMissao: false
  }

  espaconaves.push(espaconave)
  alert(`A nave ${espaconave.nome} foi registrada!`)
}

function buscaNave(nome: string) {
  let espaconave: {
    nome: string,
    piloto: string,
    limiteTripulacao: number,
    tripulacao: string[],
    emMissao: false
  }

  espaconave = espaconaves.find(nave => nave.nome === nome)
  return espaconave
}

function incluiTripulante(tripulante: string, espaconave: { nome: string, limiteTripulacao: number, tripulacao: string[] }) {
  if (espaconave.tripulacao.length >= espaconave.limiteTripulacao) {
    alert(`${tripulante} não pode ser adicionado. Limite atingido.`)
  } else {
    espaconave.tripulacao.push(tripulante)
    alert(`${tripulante} adicionado com sucesso à tripulação da ${espaconave.nome}`)
  }
}

function mandarMissao(espaconave: { nome: string, limiteTripulacao: number, tripulacao: string[], emMissao: boolean }) {
  if (espaconave.emMissao) {
    alert(`${espaconave.nome} não pode ser enviada. Nave já em missão.`)
  } else if (espaconave.tripulacao.length < Math.floor(espaconave.limiteTripulacao / 3)) {
    alert(`${espaconave.nome} não pode ser enviada. Tripulação insulficiente.`)
  } else {
    espaconave.emMissao = true
    alert(`${espaconave.nome} enviada para a missão!`)
  }
}

function primeiroMenu() { // Cadastra a Espaçonave
  const espaconave = prompt('Qual é o nome da nave registrada?')
  const pilotoNome = prompt(`Qual é o nome do piloto da ${espaconave}?`)
  const limiteTripulacao = Number(prompt(`Quantos tripulantes a ${espaconave} suporta?`))

  const confirmacao = confirm(`Confirma a inclusão de ${espaconave}\nPiloto: ${pilotoNome}\nLimite da Tripulação: ${limiteTripulacao}?`)

  if (confirmacao) {
    incluiNave(espaconave, pilotoNome, limiteTripulacao)
  }
}

function segundoMenu() { // Cadastra o Tripulante
  const tripulante = prompt('Qual é o nome do tripulante?')
  const espaconaveNome = prompt(`Para qual nave ${tripulante} deverá ser designado?`)

  const espaconave = buscaNave(espaconaveNome)

  if (espaconave) {
    const confirmacao = confirm(`Confirma a inclusão de ${tripulante} na tripulação da ${espaconave.nome}?`)

    if (confirmacao) {
      incluiTripulante(tripulante, espaconave)
    }
  }
}

function terceiroMenu() { // Envia a Espaçonave
  const espaconaveNome = prompt("Qual nome da nave que vai ser enviada?")

  const espaconave = buscaNave(espaconaveNome)

  if (espaconave) {
    const confirmacao = confirm(`Confirma o envio da ${espaconave.nome} na missão?`)

    if (confirmacao) {
      mandarMissao(espaconave)
    }
  }
}

function quartoMenu() { // Lista as Informações
  let lista = "NAVES REGISTRADAS\n"

  espaconaves.forEach((espaconave: {
    nome: string,
    piloto: string,
    tripulacaoLimite: number,
    tripulacao: string[],
    emMissao: boolean
  }) => {
    lista += `
    Nave: ${espaconave.nome},
    Piloto: ${espaconave.piloto},
    Em missão?: ${espaconave.emMissao ? 'Sim' : 'Não'}
    Tamanho Máximo da Tripulação: ${espaconave.tripulacao.length}`

    espaconave.tripulacao.forEach(tripulante => {
      lista += `    ${tripulante}\n`
    })

    alert(lista)
  })
}

let usuarioMenu = 0

while (usuarioMenu !== 5) {
  const menu = `Painel Principal
  1 - Registrar uma nova nave
  2 - Adicionar membro da tripulação
  3 - Enviar nave em missão
  4 - Listar naves registradas
  5 - Encerrar`

  usuarioMenu = Number.parseInt(prompt(menu))

  switch (usuarioMenu) {
    case 1:
      primeiroMenu()
      break

    case 2:
      segundoMenu()
      break

    case 3:
      terceiroMenu()
      break

    case 4:
      quartoMenu()
      break

    default:
      alert("Encerrando...")
      break
  }
}