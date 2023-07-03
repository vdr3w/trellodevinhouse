// Objeto 'pessoa' com três propriedades: nome, idade e profissao.
const pessoa = {
  nome: "Ada",
  idade: 36,
  profissao: "matemática",
};

// O objeto é desestruturado na funcao em três variáveis: nome, idade e profissao.

// FUNCAO NORMAL
function montaMensagem1({ nome, idade, profissao }) {
  return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
}
const mensagem1 = montaMensagem1(pessoa);
console.log(mensagem1);
//

// ARROW FUNCTION
const montaMensagem2 = ({ nome, idade, profissao }) => {
  return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
};
const mensagem2 = montaMensagem2(pessoa);
console.log(mensagem2);
//

// FORM
