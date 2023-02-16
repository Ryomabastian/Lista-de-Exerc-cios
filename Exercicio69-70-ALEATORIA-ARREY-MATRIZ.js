var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que introduza os elementos de um vetor matricial inteiro 10 x 10 e escreva os elementos da diagonal principal.

//VIDEO DE MATRIZZZZZZZZ>>>>>>>>> https://www.youtube.com/watch?v=fPSqyGg4xFA

var NumAleatorio = (min, max) => Math.floor(Math.random()*(max - min + 1)+min)


var array1 = []
var array2 = []
var array3 = []
var array4 = []
var array5 = []
var final = []
for (let i = 0; i < 5; i++) {
    
    array1.push(NumAleatorio(0,9))
    array2.push(NumAleatorio(0,9))
    array3.push(NumAleatorio(0,9))
    array4.push(NumAleatorio(0,9))
    array5.push(NumAleatorio(0,9))

} console.log('',array1,'\n',array2,'\n',array3,'\n',array4,'\n',array5)


for (let i = 0; i < 5; i++) {
    
    if (i == 0) {
        final.push(array1[i])
    }
    if (i == 1) {
        final.push(array2[i])
    }
    if (i == 2) {
        final.push(array3[i])
    }
    if (i == 3) {
        final.push(array4[i])
    }
    if (i == 4) {
        final.push(array5[i])
    }
    
}
console.log('\n')

console.log('Numeros Diagonal> '+final)





///////////////////// https://www.youtube.com/watch?v=fPSqyGg4xFA

var matriz = [[1,5,6,4,8],[3,2,1,4,4],[8,9,7,4,5,],[9,6,5,4,1],[1,9,4,8,7]]

console.table(matriz)

console.log(matriz[1][4])