const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = 'Dom Quixote';

function localizacaoLivro(livro, titulo){
    const localizacao = livro.findIndex((livro)=>{
        return titulo === livro
    });
    if(localizacao >= 0){
        console.log(`O livro está na posição ${localizacao+1}`)
    } else {
        console.log("O livro não está na prateleira")
    }
};
localizacaoLivro(livros, nomeDoLivro);
