class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login realizado com sucesso!");
    } else {
      console.log("Falha ao realizar o login. Tente novamente!");
    }
  }
}

const people = new User("Danilo Borges", "danilo@mail.com", "1234");
people.login("danilo@mail.com", "4321"); // ERROR
people.login("danilo@mail.com", "1234"); // SUCESS
