function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age) {
      resolve(age > 18)
    } else {
      reject(new Error("Idade é Necessária!"))
    }
  })
}

function getAge(birthday) {
  return new Promise((resolve, reject) => {
    if (birthday) {
      const birthYear = new Date(birthday).getFullYear()
      const currentYear = new Date().getFullYear()
      resolve(currentYear - birthYear)
    } else {
      reject(new Error("Aniversário é Necessário!"))
    }
  })
}

getAge("2000-09-02").then(age => {
  checkAge(age).then(isOver18 => {
    if (isOver18) {
      console.log("Maior de Idade!")
    } else {
      console.log("Menor de Idade!")
    }
  }).catch(err => {
    console.log(err.message)
  })
}).catch(err => {
  console.log(err.message)
})