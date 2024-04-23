const numbers = [3, 4, 6, 8, 9, "b"]

async function asyncSquare(x) {
  return x * x
}

Promise.all(numbers.map(number => asyncSquare(number)))
  .then(squares => {
    console.log(squares)
  })

  .catch(err => {
    console.log(err)
  })