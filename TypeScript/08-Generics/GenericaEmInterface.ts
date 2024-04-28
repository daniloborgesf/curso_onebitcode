interface Par<T, U> {
  primeiro: T;
  segundo: U;
}

// Uso da interface genérica
let parNumeroString: Par<number, string> = { primeiro: 1, segundo: "dois" };
let parStringBooleano: Par<string, boolean> = { primeiro: "verdadeiro", segundo: true };