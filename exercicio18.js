//Elabore um algoritmo, segundo a notação gráfica, que aceite um número para apresentar se o número introduzido é negativo, nulo ou positivo.

var prompt = require('prompt-sync')();

let numero = prompt("Numero: " )

if(numero<0){
console.log("Negativo")
}   if(numero>0){
    console.log("Positivo")
    }   if(numero==0) {
        console.log("Nulo")  
        }




