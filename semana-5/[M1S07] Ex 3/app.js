import personagem from "./personagem.js";

const drew = new personagem("Drew");
console.log(drew.percentualVida); // Drew tem 100 de vida aqui

drew.sofreuDano(50);
console.log(drew.percentualVida); // Drew tem 50 de vida aqui (-50)

drew.usouKitMedico();
console.log(drew.percentualVida); // Drew tem 75 de vida aqui (+25)

drew.usouBandagem();
console.log(drew.percentualVida); // Drew tem 85 de vida aqui (+10)
