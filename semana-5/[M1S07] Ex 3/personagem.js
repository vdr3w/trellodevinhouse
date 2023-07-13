// Classe 'personagem'
export default class personagem {
  constructor(nome) {
    this.nome = nome;
    this.percentualVida = 100;
  }

  // Sofrer Dano, se a % da vida for menor que 0, a vida fica como '0'
  sofreuDano(percentualDano) {
    this.percentualVida -= percentualDano;
    if (this.percentualVida < 0) {
      this.percentualVida = 0;
    }
  }

  // Usar MedKit, se a vida passar de 100%, será mostrada como '100'
  usouKitMedico() {
    this.percentualVida += 25;
    if (this.percentualVida > 100) {
      this.percentualVida = 100;
    }
  }

  // EXTRA:
  // Usar Bandagem, se a vida passar de 100%, será mostrada como '100'
  usouBandagem() {
    this.percentualVida += 10;
    if (this.percentualVida > 100) {
      this.percentualVida = 100;
    }
  }
}
