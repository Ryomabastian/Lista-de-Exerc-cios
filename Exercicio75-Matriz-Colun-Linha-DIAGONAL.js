let prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que leia e guarde os elementos de um vetor matricial inteiro VMINTEIRA (5,5) e imprimi-la. Troque, a seguir:
// ⦁	a segunda linha pela terceira linha;
// ⦁	a quarta coluna pela primeira coluna;
// ⦁	a diagonal principal pela diagonal secundária. Imprima o novo vetor matricial.





var NumAleatorio = (min, max) => Math.floor(Math.random()*(max - min + 1)+min)
var matriz = [[],[],[],[],[]]


var lim = 5

for (let i = 0; i < lim; i++) {
    for (let j = 0; j < lim; j++) {
        
        matriz[i][j] = NumAleatorio(0,10)
    }
    
}
console.table('matriz')
console.table(matriz)

console.log('------------------------------------------------------------------------')
console.log('LETRA A> segunda linha pela terceira linha') //

var troca1 = []
var troca2 = []

for (let i = 0; i < matriz.length; i++) {
    troca1.push(matriz[1][i])
    troca2.push(matriz[2][i])
} console.log(troca2), console.log(troca1)

for (let i = 0; i < matriz.length; i++) {
    
    matriz[1][i] = troca2[i]
    matriz[2][i] = troca1[i]
}
console.table(matriz)



console.log('------------------------------------------------------------------------')
console.log('LETRA B> quarta coluna pela primeira coluna') //> ;

var troca1 = []
var troca2 = []

for (let i = 0; i < matriz.length; i++) {
    troca1.push(matriz[i][3])
    troca2.push(matriz[i][0])
} console.log(troca1), console.log(troca2)

for (let i = 0; i < matriz.length; i++) {
    
    matriz[i][0] = troca1[i]
    matriz[i][3] = troca2[i]
}
console.table(matriz)

console.log('------------------------------------------------------------------------')
console.log('LETRA C> diagonal principal pela diagonal secundária. Imprima o novo vetor matricial.') //

var troca1 = []
var troca2 = []
var j = 0
var z = 4
for (let i = 0; i < matriz.length; i++) {
    
    troca1.push(matriz[i][j])
    j++
    troca2.push(matriz[i][z])
    z--
    
} 
console.log(troca1), console.log(troca2)

var j = 4
var z = 0
for (let i = 0; i < matriz.length; i++) {
    
    matriz[i][j] = troca1[i]
    j--
    matriz[i][z] = troca2[i]
    z++
}
console.table(matriz)

