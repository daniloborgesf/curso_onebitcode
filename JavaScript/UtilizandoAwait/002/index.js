async function asyncSum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return Promise.reject("Não é um número!")
  } else {
    return num1 + num2
  }
}

async function execute() {
  try {
    const result = await asyncSum(50, null)
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}

execute()