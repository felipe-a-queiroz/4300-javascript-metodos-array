function aplicarDesconto(livros) {
    const desconto = 0.3;
    return livros.map(livro => {
        if (livro.categoria === "front-end") {
            return {
                ...livro,
                preco: livro.preco * (1 - desconto)
            }
        } else {
            return livro;
        }
    })
}

export default aplicarDesconto;