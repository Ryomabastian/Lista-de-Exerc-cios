var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que apresente os múltiplos de cinco no intervalo 1 até 500.


var array = []
let total = []
/// Primeiro> Criar Array Sozinha
for (let j = 0; j <= 500; j++) {

    var acumulador = j
    array.push(acumulador)
}console.log(array)



for (let i = 1; i <= 500; i++) {
    if (array[i] %5 == 0) {
        total.push(array[i])
    }
}

console.log(total)