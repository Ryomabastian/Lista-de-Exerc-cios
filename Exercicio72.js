let prompt = require('prompt-sync')();


// Elabore um algoritmo, segundo a notação gráfica, que entra com valores para um vetor matricial A3x4. 
// O algoritmo deverá gerar e imprimir um vetor matricial B que é o triplo do vetor matricial A. 


var matrizA = [[1,5,6,8],[3,2,1,4],[8,9,7,4]]
var matrizB = []

console.table(matrizA)

for (let i = 0; i < matrizA.length; i++) {
    for (let j = 0; j < matrizA.length; j++) {
        
        matrizA[i][j] = (matrizA[i][j]*3)
        
        
    }
    matrizB = matrizA
    
} console.table(matrizB)

