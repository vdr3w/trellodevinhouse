function calcularFrete() {
  var pesoProduto = Number(document.getElementById("pesoProduto").value);
  var distancia = Number(document.getElementById("distancia").value);

  var custoPeso = pesoProduto * 0.5;
  var custoDistancia = distancia * 0.1;
  var custoFrete = custoPeso + custoDistancia;

  document.getElementById("resultado").style.display = "flex";
  document.getElementById("result-content").innerHTML =
    "O custo total é " + custoFrete + " reais";
  document.getElementById("reset-button").style.display = "block";
}

function resetCalculadora() {
  document.getElementById("pesoProduto").value = "";
  document.getElementById("distancia").value = "";
  document.getElementById("resultado").style.visibility = "hidden";
  document.getElementById("reset-button").style.display = "none";
}

function calcularFrete() {
  var pesoProduto = Number(document.getElementById("pesoProduto").value);
  var distancia = Number(document.getElementById("distancia").value);

  var custoPeso = pesoProduto * 0.5;
  var custoDistancia = distancia * 0.1;
  var custoFrete = custoPeso + custoDistancia;

  document.getElementById("resultado").style.visibility = "visible";
  document.getElementById("resultado").style.height = "auto";
  document.getElementById("result-content").innerHTML =
    "O custo total é " + custoFrete + " reais";
  document.getElementById("reset-button").style.display = "block";
}
