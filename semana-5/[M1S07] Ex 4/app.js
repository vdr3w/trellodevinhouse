import Cachorro from "./Cachorro.js"; // Importando class 'Cachorro' do outro arquivo
import Gato from "./Gato.js"; // Importando class 'Gato' do outro arquivo
import Pinguim from "./Pinguim.js"; // Classe nova criada pra teste

const snoopy = new Cachorro("snoopy", 10, 20, "preto e branco", "Beagle");
console.log(snoopy); // Cachorro {nome: 'snoopy', idade: 10, som: 'latido', peso: 20, cor: 'preto e branco', …}

const frajola = new Gato("frajola", 8, 10, "preto", "Persa");
console.log(frajola); // Gato {nome: 'frajola', idade: 8, som: 'miado', peso: 10, cor: 'preto', …}

const skipper = new Pinguim(
  "Skipper",
  15,
  15,
  "preto e branco",
  "Pinguim-do-rei",
  "Kowalski, opções!"
);
console.log(skipper.som); // "Kowalski, opções!"

const kowalski = new Pinguim(
  "Kowalski",
  15,
  15,
  "preto e branco",
  "Pinguim-do-rei",
  "De acordo com meus cálculos..."
);
console.log(kowalski.som); // "De acordo com meus cálculos..."

const rico = new Pinguim(
  "Rico",
  15,
  15,
  "preto e branco",
  "Pinguim-do-rei",
  "*Som de Regurgitação*"
);
console.log(rico.som); // "*Som de Regurgitação*"
