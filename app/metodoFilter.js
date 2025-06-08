function filtrarLivros(categoria, livros) {
    const livrosFiltrados = livros.filter(livro => livro.categoria === categoria);
    return livrosFiltrados;
}

export default filtrarLivros;