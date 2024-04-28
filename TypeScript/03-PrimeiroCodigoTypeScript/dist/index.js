function sendSpaceShip(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20, inMission: true, crew: []
    };
    alert("A nave ".concat(spaceship.name, " comanda pelo capit\u00E3o ").concat(spaceship.captain, " foi encaminhada em uma miss\u00E3o."));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da nave ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name, "..."));
    }
}
var spaceshipName = prompt("Informe o nome da nave:");
var spaceshipCaptain = prompt("Informe o nome do capitão:");
var currentShip = sendSpaceShip(spaceshipName, spaceshipCaptain);
var speed = Number(prompt("Insira a velocidade para qual deseja acelerar:"));
accelerate(speed, currentShip);
