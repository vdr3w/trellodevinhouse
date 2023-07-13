import CalculadoraDeArea from "./CalculadoraDeArea.js";

// Aqui definimos a classe 'triangulo' como subclasse da 'CalculadoraDeArea' e calculamos sua area
// ("triangulo": (base * altura) / 2)

class Triangulo extends CalculadoraDeArea {
  calcular() {
    return (this.base * this.altura) / 2;
  }
}

export default Triangulo;
