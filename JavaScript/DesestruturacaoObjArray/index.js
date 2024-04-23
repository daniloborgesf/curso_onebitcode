// desestruturação de 'objeto'
const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padme"],
};

// criando uma variável a partir da propriedade modo tradicional
const name = person.name;

// usando a destruturação de um objeto
const { job, parents } = person;
console.log(name, job, parents);

// desestruturação de um 'array' utilizamos a ordem para selecionar e aplicar
const [father, mother] = parents;
console.log(father, mother);

// desestruturação de uma 'function'
function createUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999);
  return {
    id,
    name,
    job,
    parents,
  };
}

const luke = createUser(person);
console.log(luke);
