export default class Juros {
  constructor(capitalInicial, taxaAplicada, tempo) {
    this.capitalInicial = capitalInicial;
    this.taxaAplicada = taxaAplicada;
    this.tempo = tempo;
  }
  // (a) - Método para calcular Juros Simples:
  calcularJurosSimples() {
    return this.capitalInicial * this.taxaAplicada * this.tempo;
  }

  // (b) - Método para calcular Juros Compostos:
  calcularJurosComp() {
    return this.capitalInicial * (1 + this.taxaAplicada) ** this.tempo;
  }
}
