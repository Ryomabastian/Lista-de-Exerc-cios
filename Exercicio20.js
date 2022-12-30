//Elabore um algoritmo, segundo a notação gráfica, que aceite dois números e realize a adição. Se o resultado da adição for maior que 20,
//apresente a soma desse resultado com 8; em caso contrário, se o resultado da adição for menor ou igual a 20, apresente o resultado obtido subtraindo 5.

var prompt = require('prompt-sync')();

let numero1 = prompt("Numero 1: " )
let numero2 = prompt("Numero 2: " )

let resultado = parseInt(numero1) + parseInt(numero2)

console.log(resultado)

if(resultado>20){
    console.log(resultado+8)
}   else {
        console.log(resultado-5)
}





