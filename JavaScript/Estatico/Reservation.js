class Reservation {
  constructor(guests, room, days) {
    this.guests = guests;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.baseFee;
  }

  static baseFee = 1.99;

  static showBaseFee() {
    console.log(`Base Fee is: ${Reservation.baseFee}`);
  }

  static get premiumFee() {
    return Reservation.baseFee * 3.25;
  }
}

Reservation.showBaseFee();

const reserv = new Reservation(4, "13", 30);
console.table(reserv);

console.log(`Premium Fee is: ${Reservation.premiumFee}`);
