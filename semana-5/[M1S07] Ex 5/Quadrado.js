import CalculadoraDeArea from "./CalculadoraDeArea.js";

// Aqui definimos a classe 'quadrado' como subclasse da 'CalculadoraDeArea' e calculamos sua area
// ("quadrado" e "retangulo" : base * altura)

class Quadrado extends CalculadoraDeArea {
  calcular() {
    return this.base * this.altura;
  }
}

export default Quadrado;
