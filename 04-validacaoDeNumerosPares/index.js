const numeros = [0, 122, 4, 6, 7, 8, 44];

function numerosPares(numero){
    const pares = numero.every((elemento)=>{
        return elemento%2 === 0
    })
    if(pares){
        console.log(`Array válido`);
    }else {
        console.log(`Array inválido`)
    }
}
numerosPares(numeros);