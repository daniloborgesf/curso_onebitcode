function identidade<T>(arg: T): T {
  return arg;
}

// Uso da função genérica
let numero: number = identidade<number>(10); // retorna 10
let texto: string = identidade<string>("Olá"); // retorna "Olá"