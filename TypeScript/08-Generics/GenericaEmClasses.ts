class Pilha<T> {
  private elementos: T[] = [];

  push(elemento: T) {
    this.elementos.push(elemento);
  }

  pop(): T | undefined {
    return this.elementos.pop();
  }
}

let pilhaNumero = new Pilha<number>();
pilhaNumero.push(1);
pilhaNumero.push(2);
console.log(pilhaNumero.pop()); // Saída: 2

let pilhaString = new Pilha<string>();
pilhaString.push("A");
pilhaString.push("B");
console.log(pilhaString.pop()); // Saída: "B"