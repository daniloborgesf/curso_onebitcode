function soma(a, b) {
  const primeiroNumero = Numero(a);
  const segundoNumero = Numero(b);

  if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
    throw new Error("Os argumentos devem ser dois números.");
  }

  return primeiroNumero + segundoNumero;
}

try {
  console.log(soma(2, 9));
  console.log(soma(true, 14));
  console.log(soma(undefined, 22));
  console.log(soma(18, "0"));
  console.log(soma(39, null));
  console.log(soma(13, "zero"));
} catch (error) {
  console.log("Deu erro");
  console.log(error.message);
}
