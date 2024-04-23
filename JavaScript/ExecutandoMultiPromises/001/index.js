function asyncSum(num1, num2) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      reject("Não é um número!")
    } else {
      resolve(num1 + num2)
    }
  })
}

function asyncSubtract(num1, num2) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      reject("Não é um número!")
    } else {
      resolve(num1 - num2)
    }
  })
}

const sumResult = asyncSum(50, 20)
const subtractResult = asyncSubtract(20, 40)

Promise.all([sumResult, subtractResult]).then(results => {
  console.log(results)
}).catch(err => {
  console.log(err)
})