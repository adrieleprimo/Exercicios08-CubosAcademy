const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

function validacaoCidades (cidades){
    const validacao = cidades.filter((cidade)=>{
        return cidade.length <= 8;
    })
    console.log(validacao.join(", "))
}
validacaoCidades(cidades);