// var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que aceite os limites inferior e superior de um dado intervalo e 
// apresente todos os números naturais desse intervalo fechado.


var arrayTeste = [1,1.59,2.56,3.85,4,4.89,5.1,6,7.5,8.5,9,10]
var resultado = []
for (let i = 0; i < arrayTeste.length; i++) {
    if(arrayTeste[i] % 1 == 0){
        resultado.push(arrayTeste[i])
    };
    
} console.log(resultado)

//OU

if(Number.isInteger(arrayTeste)){
    resultado.push(Number)
} console.log(resultado)