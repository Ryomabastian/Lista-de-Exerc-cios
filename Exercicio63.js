var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que, dados dois vetores de 10 posições cada, efetue as operações aritméticas básicas, 
// indicadas por um terceiro vetor cujos dados também são fornecidos pelo utilizador, gerando os resultados e colocando num
// quarto vetor. Apresente, na forma tabular, todos os elementos dos quatro vetores.


var array1 = []
var array2 = []
var array3 = []
var array4 = []

for (let j = 0; j < 10; j++) {
    var n = parseInt(prompt('Numero do Primeiro vetor: '))
    array1.push(n)
}console.log(array1)

for (let i = 0; i < 10; i++) {
    var n = parseInt(prompt('Numero do Segundo vetor: '))
    array2.push(n)
}console.log(array2)

console.log('\n1- Para SOMAR os vetores\n2- Para DIMINUIR os vetores\n3- Para MULTIPLICAR\n4- Para DIVIDIR\n')
var opc = prompt('Opção: ')

switch (opc) {
    case '1':
        for (let i = 0; i < 10; i++) {
            n = array1[i]+array2[i]
            array4.push(n)
        }
        break;

    case '2':
        for (let i = 0; i < 10; i++) {
            n = array1[i]-array2[i]
            array4.push(n)
            
        }
        
        break;

    case '3':
        for (let i = 0; i < 10; i++) {
            n = array1[i]*array2[i]
            array4.push(n)
            
        }
        
        break;

    case '4':
        for (let i = 0; i < 10; i++) {
            n = array1[i]/array2[i]
            array4.push(n)
            
        }
        
        break;

}

console.log(array4)