async function asyncSum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return Promise.reject("Não é um número!")
  } else {
    return num1 + num2
  }
}

async function execute() {
  asyncSum(50, 50).then(result => {
    console.log(result)
  })
}

execute()