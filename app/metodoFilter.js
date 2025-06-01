function filtrarLivros(evento, livros) {
    const tagFiltrada = evento.target.value;
    const livrosFiltrados = livros.filter(livro => livro.categoria === tagFiltrada);
    return livrosFiltrados;
}

export default filtrarLivros;