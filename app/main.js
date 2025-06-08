import exibirLivrosNaTela from "./metodoForEach.js";
import aplicarDesconto from "./metodoMap.js";
import filtrarLivros from "./metodoFilter.js";
import ordenarLivros from "./metodoSort.js";

let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirLivrosNaTela(livrosComDesconto);
}

const botoesFiltro = document.querySelectorAll("#btnFiltrarLivrosFront, #btnFiltrarLivrosBack, #btnFiltrarLivrosDados");
const valorTotalDisponiveis = document.getElementById("valor_total_livros_disponiveis");

botoesFiltro.forEach(botao => {
    const categoria = botao.value;
    botao.addEventListener("click", () => {
        const livrosFiltrados = filtrarLivros(categoria, livros);
        exibirLivrosNaTela(livrosFiltrados);
        valorTotalDisponiveis.innerHTML = "";
    });
});

const botaoOrdenar = document.getElementById("btnOrdenarPorPreco");
botaoOrdenar.addEventListener("click", () => {
    const livrosOrdenados = ordenarLivros(livros);
    exibirLivrosNaTela(livrosOrdenados);
});

const botaoDisponiveis = document.getElementById("btnLivrosDisponiveis");
botaoDisponiveis.addEventListener("click", () => {
    let somaDosLivrosDisponiveis = obterLivrosDisponiveis().reduce((acc, livro) => acc + livro.preco, 0);
    valorTotalDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${somaDosLivrosDisponiveis.toFixed(2)}</span></p>
    </div>
    `;
    const livrosDisponiveis = obterLivrosDisponiveis();
    exibirLivrosNaTela(livrosDisponiveis);
});

function obterLivrosDisponiveis() {
    return livros.filter(livro => livro.quantidade > 0);
}

