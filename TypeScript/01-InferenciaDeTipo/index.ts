const spaceship = {
  name: 'Stellar',
  speed: 5000
}

function accelerate(spaceship: { name: string; speed: number }, speed: number) {
  spaceship.speed = speed
}

accelerate(spaceship, 50)