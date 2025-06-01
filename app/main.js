import exibirLivrosNaTela from "./metodoForEach.js";
import aplicarDesconto from "./metodoMap.js";
import filtrarLivros from "./metodoFilter.js";

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

botoesFiltro.forEach(botao => {
    botao.addEventListener("click", evento => {
        const livrosFiltrados = filtrarLivros(evento, livros);
        exibirLivrosNaTela(livrosFiltrados);
    });
});


export default livros;