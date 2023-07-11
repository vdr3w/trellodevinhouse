// Importando a classe Colaborador
import Colaborador from "./colaborador.js";

// Criando um novo objeto da classe Colaborador
const colaboradorExemplo = new Colaborador(
  "528.442.040-31",
  "Drew Vieira",
  1000
);

// Imprimindo o salário inicial
console.log(colaboradorExemplo.salario); // 1000

colaboradorExemplo.promover(50); // Promovendo o colaborador pelo percentual dentro de ()

// Imprimindo o salário após a promoção
console.log(colaboradorExemplo.salario); // 1500

// Validando o CPF do colaborador
colaboradorExemplo.validarCPF();
