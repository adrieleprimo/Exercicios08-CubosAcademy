const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

function validacaoCaracter(palavra){
    const validar = palavra.every((caracters)=>{
        return caracters.length<= 5;
    })
      if(validar){
        console.log(`Array validado`)
    } else {
        console.log(`Existe palavra inválida`)
    }
};
validacaoCaracter(palavras)
