// CARROSSEL

const btnsCarrossel = document.querySelectorAll(".carrossel-controles");
btnsCarrossel.forEach((btn) => btn.addEventListener("click", exibirProximo));

function exibirProximo(e) {
  const carrossel = e.path[1];
  const itensCarrossel = carrossel.children;
  const btn = e.target;
  let secaoAtiva;
  let indexAtual;

  for (let i = 2; i < itensCarrossel.length; i++) {
    if (itensCarrossel[i].classList.contains("ativa")) {
      secaoAtiva = itensCarrossel[i];
      indexAtual = i;
    }
  }

  if (
    btn.classList.contains("controle-d") &&
    secaoAtiva != itensCarrossel[itensCarrossel.length - 1]
  ) {
    secaoAtiva.style.left = "-100vw";
    secaoAtiva.classList.remove("ativa");
    itensCarrossel[indexAtual + 1].classList.add("ativa");
    itensCarrossel[indexAtual + 1].style.right = "0";
  } else if (
    btn.classList.contains("controle-e") &&
    secaoAtiva != itensCarrossel[2]
  ) {
    secaoAtiva.style.right = "0";
    secaoAtiva.classList.remove("ativa");
    itensCarrossel[indexAtual - 1].classList.add("ativa");
    itensCarrossel[indexAtual - 1].style.left = "0";
  }
}

// JANELA QUEM SOMOS

const qsLink = document.querySelector("#quem-somos-link");
const qsBtn = document.querySelector(".btn-close.fechar-janela");
const qsJanela = document.querySelector("#quem-somos");

qsLink.addEventListener("click", () => {
  qsJanela.classList.add("ativo");
});

qsBtn.addEventListener("click", () => {
  qsJanela.classList.remove("ativo");
});

// JANELA CONTATO

const contatoLink = document.querySelector("#contato-link");
const contatoBtn = document.querySelector(".btn-close.fechar-form");
const formJanela = document.querySelector("#form-contato");

contatoLink.addEventListener("click", () => {
  formJanela.classList.add("ativo");
});

contatoBtn.addEventListener("click", () => {
  formJanela.classList.remove("ativo");
});
