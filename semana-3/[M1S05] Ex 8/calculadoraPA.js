// Função para calcular a Progressão Aritmética
const calcularPA = () => {
  var a1 = parseFloat(document.getElementById("a1-pa").value);
  var r = parseFloat(document.getElementById("r-pa").value);
  var n = parseFloat(document.getElementById("n-pa").value);
  var resultado = document.getElementById("resultado");
  var pa = [];

  // Loop para calcular cada termo da PA
  for (var i = 0; i < n; i++) {
    pa.push(a1 + r * i);
  }
  resultado.innerHTML = "Sequência PA: " + pa.join(", ");
};

// Função para calcular a Progressão Geométrica
const calcularPG = () => {
  var a1 = parseFloat(document.getElementById("a1-pg").value);
  var r = parseFloat(document.getElementById("r-pg").value);
  var n = parseFloat(document.getElementById("n-pg").value);
  var resultado = document.getElementById("resultado");
  var pg = [];

  // Loop para calcular cada termo da PG
  for (var i = 0; i < n; i++) {
    pg.push(a1 * Math.pow(r, i));
  }
  resultado.innerHTML = "Sequência PG: " + pg.join(", ");
};
