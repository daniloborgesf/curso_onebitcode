let velocidade = 80;

while (velocidade > 0) {
  alert("O carro está a " + velocidade + "Km/h");
  velocidade -= 20;
  alert("Diminuindo 20 km/h");

  // aplicando um If, na intenção de parar o carro a 40 km/h
  if (velocidade === 40) {
    break;
  }
}

alert("O carro parou!");
