// array como argumento
const procuraMinMax = (array) => {
  let min = array[0];
  let max = array[0];

  // verificar se é menor que o mínimo atual ou maior que o máximo atual e atualizar o mínimo ou o máximo.
  array.forEach((num) => {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  });

  return "😥 Min: " + min + " / 😎 Max: " + max;
};

// const numeros = []; // min max undefined
// const numeros = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]; // min:-15 / max:78
// const numeros = [1]; // min:1 max:1
// const numeros = [1, -1]; // min:-1  max:1
// const numeros = null; // Cannot read properties of null (reading '0')
// const numeros = [-2, -2, -2, -2]; // min:-2  max:-2
const numeros = [20, 10, 30]; // min:10  max:30 (prettier nao deixou testar formatacao errada)
let result = procuraMinMax(numeros);
console.log(result);
