var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que apresente os números pares no intervalo de 1 a 600.


// Jeito rapido e direto

let array = []

for (let i = 1; i < 601; i++) {
    if (i%2 == 0) {
        array.push(i)
    }
} console.log(array)

//////////////OU 

for (let z = 0; z < 500; z++) {
    array.push(z++)
}   console.log(array)

