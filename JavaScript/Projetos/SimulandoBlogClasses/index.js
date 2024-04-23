const Author = require("./Author");

const author = new Author("Danilo Borges");
const post = author.writePost("Título do Post:", "Lorem impsu");

post.addComment("Lucas Pontes", "Muito bom!");
post.addComment("Luana Pontes", "Achei incrível!");

console.log(author);
console.log(post);
