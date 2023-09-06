const usuarios = [
    {
      nome: "André",
      idade: 29,
      habilitado: false,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: false,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
  ];

  function validacao(idade){
    const filtrar = idade.filter((novosUsuarios)=>{
        return novosUsuarios.idade >= 18 && novosUsuarios.idade<=65
    })
    
    const habilitados = filtrar.every((novosUsuarios)=>{
        return novosUsuarios.habilitado === true
    })
    if(habilitados){
        console.log("Todos passaram no teste");
    } else {
        console.log("Todos precisam estar habilitados");

    } 
  }
  validacao(usuarios);