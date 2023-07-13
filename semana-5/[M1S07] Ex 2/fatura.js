// Classe Fatura
export default class fatura {
  constructor(id, descricao, quantia, preco) {
    this.id = id;
    this.descricao = descricao;
    this.quantia = quantia > 0 ? quantia : 0;
    this.preco = preco > 0 ? preco : 0;
  }

  // Obtendo valor total da fatura
  obterValorTotal() {
    return this.quantia * this.preco;
  }

  // Usando (getter) para obter o valor total da fatura
  get valorTotal() {
    return this.obterValorTotal();
  }
}
