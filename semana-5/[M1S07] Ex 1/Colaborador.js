export default class Colaborador {
  constructor(cpf, nomeCompleto, salario) {
    this.cpf = cpf;
    this.nomeCompleto = nomeCompleto;
    this.salario = salario;
  }

  promover(percentual) {
    this.salario += this.salario * (percentual / 100); // Método para promover o colaborador, aumentando o salário pelo percentual
  }

  // Método para validar o CPF do colaborador
  validarCPF() {
    let cpf = this.cpf.replace(/[^\d]+/g, "");
    if (cpf === "") return false;
    // Elimina CPFs invalidos mais padroes
    if (
      cpf.length !== 11 ||
      cpf === "00000000000" ||
      cpf === "11111111111" ||
      cpf === "22222222222" ||
      cpf === "33333333333" ||
      cpf === "44444444444" ||
      cpf === "55555555555" ||
      cpf === "66666666666" ||
      cpf === "77777777777" ||
      cpf === "88888888888" ||
      cpf === "99999999999"
    )
      return console.log("CPF inválido");

    // NOSSO CPF possui dígitos verificadores (os dois últimos dígitos),entao aqui verificamos se estão corretos de acordo com o algoritmo de validação de CPF.
    //
    // Valida o primeiro digito
    let add = 0;
    for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(9))) return console.log("CPF inválido");
    // Valida segundo digito
    add = 0;
    for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(10))) return console.log("CPF inválido");
    return console.log("CPF válido");
  }
}
