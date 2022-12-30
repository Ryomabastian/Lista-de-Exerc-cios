//Elabore um algoritmo, segundo a notação gráfica, que aceite um número inteiro com três dígitos e apresente se o dígito das centenas é par ou impar.

var prompt = require('prompt-sync')();

let numero = prompt("Numero : " )

let centena = parseInt(numero%10);


if (centena % 2 == 0) {

    console.log("par")
}   else {
    console.log("impar")
}


