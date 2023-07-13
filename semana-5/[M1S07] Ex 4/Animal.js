// Arquivo animal.js criado pois dentro do app.js o cod quebrava.
// 'Peso + Cor + Raça' adicionado para teste
class Animal {
  constructor(nome, idade, som, peso, cor, raca) {
    this.nome = nome;
    this.idade = idade;
    this.som = som;
    this.peso = peso;
    this.cor = cor;
    this.raca = raca;
  }
}

export default Animal;
