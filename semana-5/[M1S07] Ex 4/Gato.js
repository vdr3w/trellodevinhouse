import Animal from "./Animal.js";

class Gato extends Animal {
  constructor(nome, idade, peso, cor, raca) {
    super(nome, idade, "miado", peso, cor, raca); // 'Peso + Cor + Raça' adicionado para teste
  }
}

export default Gato;
