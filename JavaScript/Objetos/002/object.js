const book = {
  title: "Eragon",
  pages: 468,
  published: true,
  inStock: 20,

  tags: ["fantasy", "aventure", "medieval"],

  author: {
    name: "Danilo",
  },

  addOnStock(quantity) {
    this.inStock += quantity;
  },

  save: function () {
    // Salva os dados no banco de dados
  },
};

book.addOnStock(200);
book.delet = function () {
  // Apaga uma informação
};

// console.log(book.inStock)
// console.log(book.title)
console.log(book);
