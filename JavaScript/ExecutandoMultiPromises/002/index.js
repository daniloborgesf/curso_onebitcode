const numbers = [3, 4, 6, 8, 9, "b"]

function asyncSquare(x) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number") {
      reject("Não é um Número!")
    } else {
      resolve(x * x)
    }
  })
}

Promise.all(numbers.map(number => asyncSquare(number)))
  .then(squares => {
    console.log(squares)
  })

  .catch(err => {
    console.log(err)
  })