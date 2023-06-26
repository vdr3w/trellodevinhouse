function classificaIdade(idade) {
  let classificacao;

  if (idade <= 15) {
    classificacao = "👦 Jovem - Idade até 15 anos 👦";
  } else if (idade >= 16 && idade <= 64) {
    classificacao = "🧑‍ Adulta - Idade entre 16 até 64 anos 🧑‍";
  } else if (idade >= 65) {
    classificacao = "👵 Idosa - De 65 anos em diante 👵";
  } else {
    classificacao = "Idade Inválida";
  }

  return classificacao;
}

function calcularIdade() {
  const idadeInput = document.querySelector(".idade");
  const idade = idadeInput.value;

  if (!/^([0-9]|[1-9][0-9]|1[01][0-9]|120)$/.test(idade)) {
    alert("❗❗ Por favor, insira uma idade válida (0-120) ❗❗");
    idadeInput.value = "";
    idadeInput.focus();
    return;
  }

  const resultado = classificaIdade(idade);

  alert(resultado);

  idadeInput.value = "";
}
