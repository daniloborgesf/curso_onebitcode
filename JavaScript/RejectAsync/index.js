async function asyncSum(num1, num2) {
  return Promise.reject("Os elementos precisam ser do Tipo: Number")
}

function asyncSubtract(num1, num2) {
  return num1 - num2
}

const sumResult = asyncSum(50, 20)
const subtractResult = asyncSubtract(20, 40)

Promise.all([sumResult, subtractResult])

  .then(results => {
    console.log(results)
  })

  .catch(err => {
    console.log(err)
  })