const usuario = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [
    {
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89,
      },
    },
  ],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432",
  },
};

// console.log(usuario.friends[0].phone.ddd) // ERROR
// console.log(usuario?.friends[0]?.phone?.ddd) // undefined
// console.log(usuario?.brothers?.length) // undefined
// console.log(usuario.brothers?.[5].name) // undefined
