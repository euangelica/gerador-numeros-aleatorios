console.log("JavaScript conectado e pronto para sortear!");

// ==========================================
// 1. MAPEAMENTO DE TODOS OS ELEMENTOS
// ==========================================
const botaoGerar = document.getElementById("botao-gerar");
const inputQuantidade = document.getElementById("quantidade");
const inputMinimo = document.getElementById("minimo");
const inputMaximo = document.getElementById("maximo");

const btnMenos = document.getElementById("btn-menos");
const btnMais = document.getElementById("btn-mais");

// Elementos do Modal e Histórico
const modal = document.getElementById('modal-resultado');
const btnFecharModal = document.getElementById('btn-fechar-modal');
const btnSortearDeNovo = document.getElementById('btn-sortear-novamente');
const displayModal = document.getElementById('numero-sorteado-modal');
const historicoContainer = document.getElementById('historico-resultados');

let contadorSorteios = 0; // Guarda quantos sorteios já foram feitos

// ==========================================
// 2. LÓGICA DOS BOTÕES DE MAIS E MENOS
// ==========================================
btnMenos.addEventListener("click", function() {
    let valorAtual = Number(inputQuantidade.value);
    if (valorAtual > 1) {
        inputQuantidade.value = valorAtual - 1;
    }
});

btnMais.addEventListener("click", function() {
    let valorAtual = Number(inputQuantidade.value);
    inputQuantidade.value = valorAtual + 1;
});

// ==========================================
// 3. FUNÇÃO AUXILIAR PARA CRIAR O HISTÓRICO COM HORA
// ==========================================
function adicionarAoHistorico(valor) {
    contadorSorteios++;
    
    // Pega a data e a hora atual do computador
    const agora = new Date();
    
    // Formata a data (ex: 09/09/2026)
    const dataFormatada = agora.toLocaleDateString('pt-BR');
    
    // Formata a hora (ex: 15:27:43)
    const horaFormatada = agora.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit' 
    });
    
    // Cria a caixinha do histórico com Data, Hora e o ícone de relógio 🕒
    const novoItem = document.createElement('div');
    novoItem.classList.add('item-historico');
    
    novoItem.innerHTML = `
        <span class="historico-numero">${valor}</span>
        <span class="historico-texto">${contadorSorteios}º Resultado • &#128197 ${dataFormatada} às &#128337 ${horaFormatada}</span>
    `;
    
    // Adiciona no topo da lista
    historicoContainer.prepend(novoItem);
}

// ==========================================
// 4. LÓGICA DO SORTEIO E MODAL
// ==========================================
function realizarSorteio() {
    if (modal.style.display === 'flex') {
        const numeroAtualNoModal = displayModal.innerText;
        adicionarAoHistorico(numeroAtualNoModal);
    }

    const quantidade = Number(inputQuantidade.value);
    const min = Math.ceil(Number(inputMinimo.value));
    const max = Math.floor(Number(inputMaximo.value));
    
    let numerosSorteados = [];

    for (let i = 0; i < quantidade; i++) {
        const numero = Math.floor(Math.random() * (max - min + 1)) + min;
        numerosSorteados.push(numero);
    }
    
    displayModal.innerText = numerosSorteados.join(", ");
    modal.style.display = 'flex'; 
}

function fecharModal() {
    const valorSorteado = displayModal.innerText;
    adicionarAoHistorico(valorSorteado);
    
    modal.style.display = 'none'; 
}

// ==========================================
// 5. CONECTANDO OS BOTÕES AOS CLIQUES
// ==========================================
botaoGerar.addEventListener('click', realizarSorteio);
btnSortearDeNovo.addEventListener('click', realizarSorteio); 
btnFecharModal.addEventListener('click', fecharModal);