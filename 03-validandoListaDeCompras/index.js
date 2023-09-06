const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

function validacaoLista (palavra){
    const validacao = palavra.some((item)=>{
        return item === "cerveja" || item ==="vodka"
    }); 
    if(validacao){
        console.log(`Revise sua lista, joão. possui bebida com venda proibida!`)
    } else {
        console.log(`Tudo certo, vamos as compras!`)
    }
};
validacaoLista(palavras);