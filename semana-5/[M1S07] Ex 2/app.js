import fatura from "./fatura.js";

// Novo obj da classe 'fatura'
const faturaMelao = new fatura(123, "Melão", 10, 15); // id:123, nome: Melão, qtd: 10, valor: 15$

// Obtendo valor total da fatura com o 'obterValorTotal' de dentro da ./fatura.js
const valorTotal = faturaMelao.obterValorTotal(); // < Aqui usamos ('parenteses')
console.log(valorTotal); // = 150$ (qtd*valor)

// Obtendo valor total da fatura com o (getter) valorTotal
const valorTotalGetter = faturaMelao.valorTotal; // < Aqui nao usamos ('parenteses')
console.log(valorTotalGetter); // = 150$ (qtd*valor)
