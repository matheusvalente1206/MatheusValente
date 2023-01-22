const livros = require('./listaLivros');

let maisBarato = 0;

for (let atual = 0; livros.length > atual; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco)
    
        maisBarato = atual;
}

console.log('O livro mais barato custa R$' + precosLivros[maisBarato]);