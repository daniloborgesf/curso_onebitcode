class Adress {
  constructor(street, number, neighborhood, city, state) {
    this.street = street;
    this.number = number;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
  }

  fullAdress() {
    return `Rua: ${this.street} \nNúmero: ${this.number} \nRua: ${this.neighborhood} \nCidade: ${this.city} \nEstado: ${this.state}`;
  }
}

module.exports = Adress;
