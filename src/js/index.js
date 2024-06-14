// Objetivo 1 - quando clicar na seta de avançar  mostrar o proximo cartao

// Passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById ("btn-avancar");

let cartaoAtual = 0;

// Passo 2 - dar um jeito de identificar o clique do usuario na seta avançar
btnAvancar.addEventListener ("click", function() {

    // Passo 4 - buscar o cartão que esta selecionado e esconder
    const cartaoSelecionado = document.querySelector (".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    // Passo 3 - fazer aparecer o proximo cartão da lista
    const cartoes = document.querySelectorAll (".cartao");
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add ("selecionado");


})