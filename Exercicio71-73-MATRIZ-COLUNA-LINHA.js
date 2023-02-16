let prompt = require('prompt-sync')();



let matriz = [[1,5,6,4,8],[3,2,1,9,7]]

// let matriz2 = [[1,3],[5,2],[6,1],[4,9],[8,7]]

console.log(matriz)
console.table(matriz)
// console.log(matriz.length)

// let final = [[,],[,],[,],[,],[,]]
let final = [[],[],[],[],[]]

for (let i = 0; i < matriz[0].length; i++) {


    for (let j = 0; j < matriz.length; j++) {
        
        final[i][j] = matriz[j][i]
    
    }
    
}

console.table(final)