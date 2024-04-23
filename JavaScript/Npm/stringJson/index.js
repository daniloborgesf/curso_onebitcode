const jsonString = '{"nome": "João", "idade": 30}';
const objeto = JSON.parse(jsonString);

console.log(objeto.nome); // Saída: João
console.log(objeto.idade); // Saída: 30
