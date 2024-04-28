function identidade<T>(arg: T): T {
  return arg;
}

let numero = identidade<number>(10); // T é substituído por number
let texto = identidade<string>("Olá"); // T é substituído por string