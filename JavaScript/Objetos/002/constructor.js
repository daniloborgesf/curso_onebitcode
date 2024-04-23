function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;

  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity;
  };

  this.saveBook = function saveBook() {
    // Salvando o Livro
  };
}

const author = "Danilo Borges";
const tags = ["fantasy", "aventure", "medieval"];

const eragon = new Book("Eragon", 261, tags, author);
const harry = new Book("Harry Potter", 600, tags, author);

console.log(eragon);
console.log(harry);
