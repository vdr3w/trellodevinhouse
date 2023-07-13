import Animal from "./Animal.js";

class Pinguim extends Animal {
  constructor(nome, idade, peso, cor, raca, som) {
    super(nome, idade, som, peso, cor, raca);
  }
}

export default Pinguim;
