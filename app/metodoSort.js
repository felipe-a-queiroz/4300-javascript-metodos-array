function ordenarLivros(livros) {
    return livros.sort((a, b) => {
        return a.preco - b.preco;
    });
}
export default ordenarLivros;