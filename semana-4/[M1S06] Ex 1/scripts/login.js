import { usuarios } from "../constantes/users.js";
let usuarioEncontrado;
console.log(usuarios);

function login() {
  // Obtendo os valores email e senha
  let emailInput = document.getElementById("email").value;
  let senhaInput = document.getElementById("senha").value;

  // Verificando se inputs estao vazios
  if (!emailInput || !senhaInput) {
    alert("Os campos email e senha sao obrigatorios!");
    return;
  } else {
    // Procurando usuario no array de usuarios
    usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === emailInput && usuario.senha === senhaInput
    );
  }

  // Verificando se o usuario foi encontrado
  usuarioEncontrado
    ? (window.location.href = "lista.html")
    : alert("Usuario nao encontrado");
}

document.getElementById("botao-login").addEventListener("click", login);
