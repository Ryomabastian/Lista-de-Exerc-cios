//Elabore um algoritmo, segundo a notação gráfica, que determine o valor de y da seguinte função: (5y+3)/(y -16)

var prompt = require('prompt-sync')();

let numero = parseInt(prompt('Numero: '));

let resultado = (5*numero+3)/(numero-16);
console.log(resultado);

