const arr = [" Frodo ", " Sam ", " Merry ", " Pippin ", " Gandalf ", " Aragorn ", " Legolas ", " Gimli "];
const hobbits = arr;
const outros = arr;

// push: Adiciona um elemento no final do array e devolve o novo tamanho do array

// let tamanho = arr.push("Boromir")
// alert("Elementos do Array: " + arr)
// alert("Tamanho do Array: " + tamanho)

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array

// tamanho = arr.unshift("Boromir")
// alert("Elementos do Array: " + arr)
// alert("Tamanho do Array: " + tamanho)

// pop: Remove um elemento no final do array e devolve o elemento removido

// let elementoRemovido = arr.pop()
// alert("Elementos do Array: " + arr)
// alert("Elemento Removido do Array: " + elementoRemovido)

// shift: Remove um elemento no começo do array e devolve o elemento removido

// elementoRemovido = arr.shift()
// alert("Elementos do Array: " + arr)
// alert("Elemento Removido do Array: " + elementoRemovido)

// includes: Verifica se um certo elemento está presente no array

// const inclui = arr.includes("Gandalf")
// alert("O elemento está no array?\n" + "Situação: " +inclui)

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array

// const indice = arr.indexOf("Gandalf")
// alert("Elemento está no índice: " + indice)

// slice: Copia uma parte  do array e devolve a parte copiada sem alterar o array original

// const hobbits = arr.slice(0, 4)

// Também pode ser usado com números negativos referenciar o final do array

// const outros = arr.slice(-4)
// alert("Elementos do Array: " + arr)
// alert("Os Hobbits Parte 1: " + hobbits)
// alert("Os Hobbits Parte 2: " + outros)

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)

// sociedade = hobbits.concat(outros, "Boromir")
// alert("Sociedade: " + sociedade)
// alert("Hobbits: " + hobbits)
// alert("Outros: " + outros)

// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original

// const hobbits = arr.slice(0, 4)

// Também pode ser usado com números negativos referenciar o final do array

// const outros = arr.slice(-4)
// alert(arr)
// alert("Hobbits: " + hobbits)
// alert("Outros: " + outros)

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)

const sociedade = hobbits.concat(outros, "Boromir");
alert("Sociedade: " + sociedade);
alert("Hobbits: " + hobbits);
alert("Outros: " + outros);

// Usando o for para percorrer cada elemento do array

for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  alert(elemento + " se encontra na posição " + indice);
}
