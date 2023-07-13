import CalculadoraDeArea from "./CalculadoraDeArea.js";

// Aqui definimos a classe 'retangulo' como subclasse da 'CalculadoraDeArea' e calculamos sua area
// ("quadrado" e "retangulo" : base * altura)

class Retangulo extends CalculadoraDeArea {
  calcular() {
    return this.base * this.altura;
  }
}

export default Retangulo;
