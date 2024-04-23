class Book {
  constructor(title) {
    this.title = title;
    this.published = false;
  }

  publish() {
    this.published = true;
  }
}

const eragon = new Book("Eragon");
const harry = new Book("Harry Potter");

harry.publish();

console.log(eragon);
console.log(harry);

console.log(harry instanceof Book);
console.log(["harry", "eragon"] instanceof Array);
