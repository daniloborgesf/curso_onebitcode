// Definindo um enum para representar os dias da semana
enum DiasDaSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}

// Usando o enum
let dia: DiasDaSemana = DiasDaSemana.Segunda;
console.log(dia); // Saída: 1 (porque segunda-feira é o segundo item do enum, começando de 0)

// Definindo um enum com valores atribuídos explicitamente
enum Direcoes {
  Cima = "UP",
  Baixo = "DOWN",
  Esquerda = "LEFT",
  Direita = "RIGHT"
}

let direcao: Direcoes = Direcoes.Cima;
console.log(direcao); // Saída: "UP"