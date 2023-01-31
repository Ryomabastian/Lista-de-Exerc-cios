var prompt = require('prompt-sync')();

// VIDEO:https://www.youtube.com/watch?v=QCqPixrujp4

// Elabore um algoritmo, segundo a notação gráfica, que aceite dois conjuntos de números inteiros, tendo cada um, respetivamente, 
// 10 e 20 elementos e apresente os elementos comuns aos conjuntos. Lembre-se de que os elementos podem-se repetir, mas não podem aparecer repetidos na saída.

var array1 = [1,2,3,4,5,6,7,8,9,11,13]
var array2 = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]


var resultado = []

// for (let i = 0; i < array1.length; i++) {
//     if (array1[i] == array2.every()) {
//         resultado.push(array1[i])
//     }
// }   console.log(resultado)


// function filtrando(a){

// }

for (let j = 0; j < array1.length; j++) {
    for (let a = 0; a < array2.length; a++) {
        if( array2[j] == array1[a]){
            resultado.push(array2[j])
        }
        
    }
}


console.log(resultado)


// var resultado = 


// array.filter