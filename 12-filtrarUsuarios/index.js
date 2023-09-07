const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
  ];

function programadores (programador){
 const programadores = programador.filter((pessoa)=>{
    return pessoa.profissao=== "Programador" && pessoa.idade > 20;
  });
console.log(programadores);
}
programadores(pessoas);

function jornalistas (jornalista){
    const jornalistas = jornalista.filter((pessoa)=>{
        return pessoa.profissao === "Jornalista" && pessoa.idade > 30;
    });
    console.log(jornalistas);
}
jornalistas(pessoas);

function jornalistasProgramadores(pessoas){
    const jornalistaProgramador = pessoas.filter((pessoa)=>{
        return pessoa.profissao === "Programador" && pessoa.idade <30;
        return pessoa.profissao === "Jornalista" && pessoa.idade <30;
    })
    console.log(jornalistaProgramador);
  
}
jornalistasProgramadores(pessoas);