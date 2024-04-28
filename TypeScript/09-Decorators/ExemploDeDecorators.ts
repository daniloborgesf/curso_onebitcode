function registroDeChamada(
  target: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`O método ${nomeMetodo} foi chamado.`);
    const resultado = metodoOriginal.apply(this, args);
    return resultado;
  };
  return descriptor;
}

class Exemplo {
  @registroDeChamada
  saudacao(nome: string) { console.log(`Olá, ${nome}!`); }
}

const exemplo = new Exemplo();
exemplo.saudacao("João");