//Elabore um algoritmo, segundo a notação gráfica, que aceite três números e apresente o maior dos números introduzidos

var prompt = require('prompt-sync')();

let numero1 = parseInt(prompt("Numero 1 : " ))
let numero2 = parseInt(prompt("Numero 2 : " ))
let numero3 = parseInt(prompt("Numero 3 : " ))

if (numero1>numero2 && numero1>numero3) {
    console.log("Maior numero :", numero1)
}
if(numero2>numero1 && numero2>numero3) {
    console.log("Maior numero :",numero2)
}
if(numero3>numero2 && numero3>numero1) {
    console.log("Maior numero :",numero3)
}
