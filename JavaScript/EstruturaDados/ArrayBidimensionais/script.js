// const arr = [
//   "1º Nível",
//   ["2º nível", 42, true],
//   [
//     ["3º nível, 1º item", "Olá, mundo!"],
//     ["3º nível, 2º item", "Oi, mundo!"],
//   ],
//   []
// ]

// console.log(arr)           // Exibe todo o Array
// console.log(arr[0])        // Saída: 1° Nível
// console.log(arr[1])        // Saída: 2° Nível
// console.log(arr[1][1])     // Saída: 2° Nível acessa e exibe a posição [1] = 42
// console.log(arr[2])        // Saída: 3° Nível
// console.log(arr[2][0][1])     // Saída: [2] 3° Nível > [0] Linha 1 > [1] Posição "Olá, Mundo"
// console.log(arr[2][1][1])     // Saída: [2] 3° Nível > [1] Linha 2 > [1] Posição "Oi, Mundo"

const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];

// console.table:  O JavaScript tenta transformar o Array em uma Tabela
// console.table(matriz)

//console.log(matriz[0][3]) // Saída: "l1, c4"

// matriz.push(["Nova Linha"])
// matriz[0].push(["Nova Coluna"])

// console.table(matriz)

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j];
    console.log("Posição: (" + i + " , " + j + ") Valor: " + elemento);
  }
}
