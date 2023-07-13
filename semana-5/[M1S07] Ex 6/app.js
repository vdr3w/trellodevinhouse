import Juros from "./Juros.js";

// (c) - Teste com uma Aplicação de R$10.000 a uma taxa de 7%/mês por 24 meses
let juros = new Juros(10000, 0.07, 24); // R$16.800/R$50.723
console.log(`✅TESTE A: R$10.000, taxa de 7%/mês por 24 meses:✅`);
console.log(
  `  Juros simples: 📍R$ ${juros.calcularJurosSimples().toFixed(2)}📍`
);
console.log(
  `  Juros compostos: 📍R$ ${juros.calcularJurosComp().toFixed(2)}📍`
);

// (d) - Teste com uma Aplicação de R$10.000 a uma taxa de 15%/ano por 10 anos
juros = new Juros(10000, 0.15, 10 * 12); // R$180.000/R$192.194.450.019
console.log(`✅TESTE B: R$10.000, taxa de 15%/ano por 10 anos:✅`);
console.log(
  `  Juros simples: 📍R$ ${juros.calcularJurosSimples().toFixed(2)}📍`
);
console.log(
  `  Juros compostos: 📍R$ ${juros.calcularJurosComp().toFixed(2)}📍`
);

// TESTES EXTRAS

// (e) - Teste com uma aplicação de R$50.000 a uma taxa de 1%/mês por 36 meses
juros = new Juros(50000, 0.01, 36); // R$18.000/R$71.538
console.log(`✅TESTE C: R$50.000, taxa de 1%/mês por 36 meses:✅`);
console.log(
  `  Juros simples: 📍R$ ${juros.calcularJurosSimples().toFixed(2)}📍`
);
console.log(
  `  Juros compostos: 📍R$ ${juros.calcularJurosComp().toFixed(2)}📍`
);

// (f) - Teste com uma aplicação de R$100.000 a uma taxa de 10%/ano por 5 anos
juros = new Juros(100000, 0.1, 5 * 12); // R$600.000/R$30.448.163
console.log(`✅TESTE D: R$100.000, taxa de 10%/ano por 5 anos:✅`);
console.log(
  `  Juros simples: 📍R$ ${juros.calcularJurosSimples().toFixed(2)}📍`
);
console.log(
  `  Juros compostos: 📍R$ ${juros.calcularJurosComp().toFixed(2)}📍`
);

// (g) - Teste com uma aplicação de R$1.000 a uma taxa de 5%/mês por 12 meses
juros = new Juros(1000, 0.05, 12); // R$600/R$1.795
console.log(`✅TESTE E: R$1.000, taxa de 5%/mês por 12 meses:✅`);
console.log(
  `  Juros simples: 📍R$ ${juros.calcularJurosSimples().toFixed(2)}📍`
);
console.log(
  `  Juros compostos: 📍R$ ${juros.calcularJurosComp().toFixed(2)}📍`
);

// (h) - Teste com uma aplicação de R$5.000 a uma taxa de 20%/ano por 3 anos
juros = new Juros(5000, 0.2, 3 * 12); // R$36.000/R$3.544.009
console.log(`✅TESTE F: R$5.000, taxa de 20%/ano por 3 anos:✅`);
console.log(
  `  Juros simples: 📍R$ ${juros.calcularJurosSimples().toFixed(2)}📍`
);
console.log(
  `  Juros compostos: 📍R$ ${juros.calcularJurosComp().toFixed(2)}📍`
);
