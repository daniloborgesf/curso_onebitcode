class Produt {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(discount) {
    return this.price * ((100 - discount) / 100); // Obtém o Desconto
  }
}

const watch = new Produt("Relógio Chinês", "Feito na China", "200");
watch.addToStock(20);

console.log(
  `Produto: ${watch.name} 
  Descrição: ${watch.description} 
  Preço: R$ ${watch.price}`
);

console.log(`Preço com Desconto: ${watch.calculateDiscount(10)}`);
