class CalculadoraDeArea {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  calcular() {
    throw new Error(
      "(AndreV: 'Método 'calcular' está implementado nas subclasses')"
    );
  }
}

export default CalculadoraDeArea;
