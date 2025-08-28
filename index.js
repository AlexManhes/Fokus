const html = document.querySelector("html");
const botaoIniciar = document.querySelector(".app__card-primary-button");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const timeCheck = document.querySelector("#time");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

const duracaoFoco = 1500;
const duracaoDescansoCurto = 300;
const duracaoDescansoLongo = 900;

focoBt.addEventListener("click", (event) => {
  html.setAttribute("data-contexto", "foco");
  banner.setAttribute("src", "./imagens/foco.png");
});

curtoBt.addEventListener("click", () => {
  alterarContexto("curto");
});

longoBt.addEventListener("click", (event) => {
  html.setAttribute("data-contexto", "descanso-longo");
  banner.setAttribute("src", "./imagens/descanso-longo.png");
});
function alterarContexto(contexto) {
  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `./imagens/${contexto}.png`);
}
