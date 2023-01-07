var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que aceite números inteiros e apresente o triplo de cada número introduzido. 
// O algoritmo termina quando o número introduzido for -999.

let array = []
let numero = 1
while(numero != -999){
    numero = parseInt(prompt('Numero: '))
    array.push(numero)
}
console.log(array)

//Tirar o ultimo numero da array
var limite = array.length-1
let arrayResultado = []
for(i=0; i<limite; i++){
    array[i] = array[i]*3;
    arrayResultado.push(array[i])
}

console.log(arrayResultado)

