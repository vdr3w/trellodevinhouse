import Juros from "./Juros.js";

// (c) - Teste com uma Aplicação de R$10.000 a uma taxa de 7%/mês por 24 meses
let juros = new Juros(10000, 0.07, 24);
console.log(`✅TESTE A: R$10.000, taxa de 7%/mês por 24 meses:✅`);
console.log(
  `  Juros simples: 📍R$ ${juros.calcularJurosSimples().toFixed(2)}📍`
);
console.log(
  `  Juros compostos: 📍R$ ${juros.calcularJurosComp().toFixed(2)}📍`
);

// (d) - Teste com uma Aplicação de R$10.000 a uma taxa de 15%/ano por 10 anos
juros = new Juros(10000, 0.15, 10 * 12);
console.log(`✅TESTE B: R$10.000, taxa de 15%/ano por 10 anos:✅`);
console.log(
  `  Juros simples: 📍R$ ${juros.calcularJurosSimples().toFixed(2)}📍`
);
console.log(
  `  Juros compostos: 📍R$ ${juros.calcularJurosComp().toFixed(2)}📍`
);
