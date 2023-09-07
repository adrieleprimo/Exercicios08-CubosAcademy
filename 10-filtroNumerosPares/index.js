const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

function numerosPares(numero){
    const pares= numero.filter((elemento)=>{
        return elemento%2 ===0
    })
    console.log(pares)
}
numerosPares(numeros)