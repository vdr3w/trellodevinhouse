// EXEMPLO:

// const objUm = { a: 1, b: 2 };
// const objDois = { c: 3, d: 4 };
// const novoObjeto = mesclaObjetos(objUm, objDois);
// console.log(novoObjeto);
// // { a: 1, b: 2, c: 3, d: 4 }
//

// Define a função concatenarVetores que recebe dois arrays como argumentos
const concatenarVetores = (arrayA, arrayB) => {
  // Utiliza o operador spread (...) desempacotando os elementos de arrayA e arrayB dentro de um novo array
  const novoArray = [...arrayA, ...arrayB];

  // Retorna o novo array concatenado
  return novoArray;
};

const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

// Chama a função concatenarVetores com arrayA e arrayB, e armazena o resultado em novoArray
const novoArray = concatenarVetores(arrayA, arrayB);

// Imprime o novoArray no console
console.log(novoArray);

// No mesmo arquivo app.js incluído em index.html escreva uma função de nome mesclaObjetos, que aceita dois objetos como parâmetro e retorna um novo objeto que contem todos os pares chave-valor do primeiro e do segundo objetos.
// EXEMPLO:
//
// const objUm = { a: 1, b: 2 };
// const objDois = { c: 3, d: 4 };
// const novoObjeto = mesclaObjetos(objUm, objDois);
// console.log(novoObjeto);
// // { a: 1, b: 2, c: 3, d: 4 }
//

const mesclaObjetos = (objeto1, objeto2) => {
  const novoObjeto = { ...objeto1, ...objeto2 };
  return novoObjeto;
};

const objetoUm = { a: 1, b: 2 };
const objetoDois = { c: 3, d: 4 };

// Chama a função mesclaObjetos com objUm e objDois, e armazena o resultado em novoObjeto
const novoObjeto = mesclaObjetos(objetoUm, objetoDois);

console.log(novoObjeto);
