const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
  ];

function localizacao (endereco){
    const validacao = endereco.find((elemento)=>{
      return  elemento.cep === 00222444;
    })
    if(validacao){
      console.log(validacao.rua)
    }
  }
  localizacao(enderecos)  