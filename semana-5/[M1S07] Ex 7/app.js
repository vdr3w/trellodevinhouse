import Usuario from "./Usuario.js";

// Teste criando multiplos usuarios
let usuario1 = new Usuario("Drew1", "drew1@drew.com", "drew");
let usuario2 = new Usuario("Drew2", "drew2@drew.com", "drew");
let usuario3 = new Usuario("Drew3", "drew3@drew.com", "drew");
let usuario4 = new Usuario("Drew4", "drew4@drew.com", "drew");

// Solução encontrada para criar multiplos usuarios: Armazenar em array e depois pesquisar nele
let usuarios = [usuario1, usuario2, usuario3, usuario4];

let emailInput = document.getElementById("email");
let senhaInput = document.getElementById("senha");
let acessarButton = document.getElementById("acessar");
let mensagemParagrafo = document.getElementById("mensagem");

// Add o evento de clique ao botão
acessarButton.addEventListener("click", () => {
  let email = emailInput.value;
  let senha = senhaInput.value;

  // Autentica os dados do usuario, que está dentro da array 'usuarios'
  let usuarioAutenticado = usuarios.find((usuario) =>
    usuario.autenticar(email, senha)
  );

  // Mensagem de Sucesso/Erro na autenticacao
  if (usuarioAutenticado) {
    mensagemParagrafo.textContent = "Login bem-sucedido!";
  } else {
    mensagemParagrafo.textContent = "Credenciais inválidas!";
  }
});
