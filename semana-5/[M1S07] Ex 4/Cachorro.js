import Animal from "./Animal.js";

class Cachorro extends Animal {
  constructor(nome, idade, peso, cor, raca) {
    super(nome, idade, "latido", peso, cor, raca); // 'Peso + Cor + Raça' adicionado para teste
  }
}
export default Cachorro;
