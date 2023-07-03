function somaTudo(...numeros) {
  return numeros.reduce(
    (acumulador, numeroAtual) => acumulador + numeroAtual,
    0
  );
}

// const resultado = somaTudo(1, 2, 3, 4, 5);  // = 15
// const resultado = somaTudo(10, 20, 30, 40, 50); // = 150
// const resultado = somaTudo(100, 200, 300, 400, 500); // = 1500
// const resultado = somaTudo(1, 3, 5, 7, 9); // = 25
// const resultado = somaTudo(2, 4, 6, 8, 10); // = 30
// const resultado = somaTudo(10, 100, 1000, 10000, 100000); // = 111110
// const resultado = somaTudo(-1, -2, -3, -4, -5); // = -15
const resultado = somaTudo(1, 2, 3, 4); // = 10
console.log(resultado);
