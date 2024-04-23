class Accout {
  #password;
  #balance;

  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
    this.#balance = 100;
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return null;
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.password === password;
  }
}

const user = {
  email: "danilo@teste.com",
  password: 123456,
};

const myAccount = new Accout(user);
console.log(myAccount);
console.log(myAccount.getBalance("danilo@teste.com"));

// myAccount.password = 1;
// console.log(myAccount);
