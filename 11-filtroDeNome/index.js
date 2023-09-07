const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
  ];

function  localizarNomes (nome){
  const filtrarNomes = nome.filter((elemento) =>{
    return elemento[0] === "a" || elemento[0] === "A";
  });
  console.log(filtrarNomes);
}
localizarNomes(nomes);