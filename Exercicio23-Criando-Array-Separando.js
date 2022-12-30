//Elabore um algoritmo, segundo a notação gráfica, que aceite três números e apresente os números por ordem crescente.

var prompt = require('prompt-sync')();

let numero1 = parseInt(prompt("Numero 1 : " ))
let numero2 = parseInt(prompt("Numero 2 : " ))
let numero3 = parseInt(prompt("Numero 3 : " ))

var array = [numero1,numero2,numero3];

array.sort(resultado);

function resultado (a,b){
    if (a < b) {
        return -1;
    }
    else {
        return 1;
    }
}

console.log(array);

