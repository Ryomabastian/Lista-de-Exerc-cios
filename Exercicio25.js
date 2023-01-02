//Elabore um algoritmo, segundo a notação gráfica, que aceite três números como possíveis lados de um triângulo e apresente a classificação segundo a abordagem dos lados.
//Equilátero: Todos lados iguais
//Isósceles: Dois lados iguais
//Escaleno: Todos lados diferentes

var prompt = require('prompt-sync')();

var array = []

for(var i=0; i<3; i++) {
    let lados = prompt("Digite os lados do trangulo: ");
    array.push(lados);
}

console.log(array)

if( array[0]==array[1] && array[0]==array[2] && array[1]==array[2]) {
    return console.log("Equilátero")
}

if(array[0]==array[1] || array[0]==array[2] || array[1]==array[2]){
    return console.log("Isósceles")
}

if(array[0]!=array[1] || array[0]!=array[2] || array[1]!=array[2]){
    return console.log("Escaleno")
}
