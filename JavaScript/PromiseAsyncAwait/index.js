function waitFor(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, seconds * 1000)
  })
}

const arrNumber = [2, 4, 5, 7, 8, 9]

const squares = arrNumber.map(async (number) => {
  await waitFor(2)
  return number * number
})

console.log(squares)

Promise.all(squares)

  .then((results) => {
    console.log(results)
  })