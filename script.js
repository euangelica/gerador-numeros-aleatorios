console.log("JavaScript conectado e pronto para sortear!");

// 1. Pegando TODOS os elementos que criamos no HTML
const botaoGerar = document.getElementById("botao-gerar");
const resultado = document.getElementById("resultado");

const inputQuantidade = document.getElementById("quantidade");
const inputMinimo = document.getElementById("minimo");
const inputMaximo = document.getElementById("maximo");

const btnMenos = document.getElementById("btn-menos");
const btnMais = document.getElementById("btn-mais");

// ==========================================
// LÓGICA DOS BOTÕES DE MAIS E MENOS
// ==========================================

// Função para diminuir o número
btnMenos.addEventListener("click", function() {
    let valorAtual = Number(inputQuantidade.value);
    // Impede que a pessoa escolha menos de 1
    if (valorAtual > 1) {
        inputQuantidade.value = valorAtual - 1;
    }
});

// Função para aumentar o número
btnMais.addEventListener("click", function() {
    let valorAtual = Number(inputQuantidade.value);
    inputQuantidade.value = valorAtual + 1;
});


// ==========================================
// LÓGICA DO SORTEIO DOS NÚMEROS
// ==========================================

function sortearNumeros() {
    // Pegamos os valores que estão digitados nas caixinhas no momento do clique
    const quantidade = Number(inputQuantidade.value);
    const min = Number(inputMinimo.value);
    const max = Number(inputMaximo.value);

    // Criamos uma lista vazia para guardar os números sorteados
    let numerosSorteados = [];

    // O loop (for) vai rodar a quantidade de vezes que o usuário escolheu
    for (let i = 0; i < quantidade; i++) {
        
        // A matemática certa usando MÍNIMO e MÁXIMO
        const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
        
        // Adicionamos o número sorteado na nossa lista
        numerosSorteados.push(numeroSorteado);
    }

    // Mostramos o resultado na tela, separando por vírgulas e espaço
    resultado.textContent = numerosSorteados.join(", ");
}

// O botão principal vai "ouvir" o clique e disparar a função de sorteio
botaoGerar.addEventListener("click", sortearNumeros);