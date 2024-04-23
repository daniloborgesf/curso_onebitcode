class Wallet {
  #ammoutPrivate
  #usernamePrivate

  constructor() {
    this.#ammoutPrivate = 100.99 * 100 // Saída: 10099
  }

  get ammoutPublic() {
    return this.#ammoutPrivate / 100 // Saída: 100.99
  }

  set usernamePublic(newUsername) {
    if (typeof newUsername === "string") {
      this.#usernamePrivate = newUsername
    } else {
      return console.log("Error: Não é uma String")
    }
  }

  get usernamePublic() {
    return this.#usernamePrivate
  }
}

const myWallet = new Wallet()
console.log(myWallet.ammoutPublic)

myWallet.usernamePublic = "Danilo"
console.log(myWallet.usernamePublic)
