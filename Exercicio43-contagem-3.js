var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que dado um país A com 5000000 de habitantes e uma taxa de natalidade de 3% ao ano e um país B com 7000000 
// e uma taxa de natalidade de 2% ao ano, apresente o tempo necessário para que a população do país A ultrapasse a população do país B.


var paisA = 5000000;
var paisB = 7000000;

// var resultadoA = 0
// var resultadoB = 0
var ano = 0

while (paisB>=paisA){

paisA = (paisA) + (paisA*0.03)
paisB = (paisB) + (paisB*0.02)
ano++
}

console.log(paisA)
console.log("\n")
console.log(paisB)
console.log("\n")
console.log(ano)