class Vehicle {
  move() {
    console.log("Veículo está se movendo");
  }
}

class Car extends Vehicle {
  move() {
    console.log("O carro já está se movendo..");
  }
}

class Ship extends Vehicle {
  move() {
    console.log("O navio está navegando..");
  }
}

class Aircraft extends Vehicle {
  move(speed) {
    console.log(`A aeronave está voando a ${speed} km/h`);
  }
}

const delorean = new Car();
const backPearl = new Ship();
const epoch = new Aircraft();

delorean.move();
backPearl.move();
epoch.move(100);
