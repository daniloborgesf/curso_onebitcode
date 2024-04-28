function sendSpaceShip(name: string, captain: string) {
  const spaceship = {
    name, captain, speed: 20, inMission: true, crew: []
  }

  alert(`A nave ${spaceship.name} comanda pelo capitão ${spaceship.captain} foi encaminhada em uma missão.`)
  return spaceship
}

function accelerate(targetSpeed: number, spaceship: { name: string, speed: number }) {

  if (spaceship.speed > targetSpeed) {
    alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}`)
  } else if (spaceship.speed < targetSpeed) {
    alert(`Aumentando a velocidade da nave ${spaceship.name} para ${targetSpeed}`)
  } else {
    alert(`Mantendo a velocidade da ${spaceship.name}...`)
  }
}

const spaceshipName = prompt("Informe o nome da nave:")
const spaceshipCaptain = prompt("Informe o nome do capitão:")
const currentShip = sendSpaceShip(spaceshipName, spaceshipCaptain)

const speed = Number(prompt("Insira a velocidade para qual deseja acelerar:"))

accelerate(speed, currentShip)