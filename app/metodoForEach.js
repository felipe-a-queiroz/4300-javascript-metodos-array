function exibirLivrosNaTela(listaDeLivros) {
    const elementoParaInserirLivros = document.getElementById("livros");
    elementoParaInserirLivros.innerHTML = "";
    listaDeLivros.forEach(livro => {
        const elementoLivro = criarElementoLivro(livro);
        elementoParaInserirLivros.appendChild(elementoLivro);
    });
}

function criarElementoLivro(livro) {
    const elementoLivro = document.createElement("div");
    elementoLivro.classList.add("livro");
    elementoLivro.innerHTML = `
        <img class="livro__imagem" src="${livro.imagem}" alt="${livro.alt}">
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco">R$ ${livro.preco.toFixed(2)}</p>
        <div class="tags">
            <span class="tag">${livro.categoria}</span>
        </div>
    `;
    return elementoLivro;
}

export default exibirLivrosNaTela;