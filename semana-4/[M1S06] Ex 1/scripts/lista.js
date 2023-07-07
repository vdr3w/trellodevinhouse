import { reservas } from "../constantes/reservas.js"; // Importe o array de reservas

const tabela = document.getElementById("corpo-tabela");

const logoutButton = document.querySelector(".logoutButton");

logoutButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

const linhas = reservas.map((reserva) => {
  const tr = document.createElement("tr");

  const tdNumeroQuarto = document.createElement("td");
  tdNumeroQuarto.textContent = reserva.numeroQuarto;
  tr.appendChild(tdNumeroQuarto);

  const tdCliente = document.createElement("td");
  tdCliente.textContent = reserva.cliente;
  tr.appendChild(tdCliente);

  const tdCPF = document.createElement("td");
  tdCPF.textContent = reserva.cpf;
  tr.appendChild(tdCPF);

  const tdPeriodo = document.createElement("td");
  tdPeriodo.textContent = reserva.periodo;
  tr.appendChild(tdPeriodo);

  const tdAcoes = document.createElement("td");
  tdAcoes.innerHTML = reserva.acoes;
  tr.appendChild(tdAcoes);

  return tr;
});

linhas.forEach((linha) => {
  tabela.appendChild(linha);
});
