[M1S09] Ex 5 - Criação função para adicionar novo medicamento

Crie um função dentro do arquivo App.vue chamada de AdicionarMedicamento que deve receber os dados para criar um novo medicamento. Os dados que deverão vir por parâmetro são:

nome do medicamento
nome do laboratório
preço

Junto a essas informações adicione um id que será um número, e adicione uma propriedade chamada favorito que será um booleano.

// estrutura do objeto medicamento - exemplo
const novoMedicamento = {
id: 1,
nome: "",
laboratorio: "",
preco: 1,
favorito: false
}

A função deve ser ativada em um evento customizado pelo emit do componente FormularioNovoMedicamento criado no exercício 03.
