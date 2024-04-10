// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}
console.log(numeroSecreto);

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    exibirTextoNaTela(
      "p",
      `Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (chute > numeroSecreto) {
    exibirTextoNaTela("p", "O número é menor");
  } else {
    exibirTextoNaTela("p", "O número é maior");
  }
  tentativas++;
  limparCampo();
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
  chute = document.querySelector("input").value = "";
}

function atualizarJogo() {
  // numeroSecreto = gerarNumeroAleatorio();
  // limparCampo();
  // document.getElementById("reiniciar").setAttribute("disabled", true);
  window.location.reload();
}
