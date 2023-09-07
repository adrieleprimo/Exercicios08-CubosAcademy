const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

function numerosPositivos(numero){
const novaArray = numero.filter((elemento)=>{
    return elemento > 0;
});
console.log(novaArray);
}
numerosPositivos(numeros);