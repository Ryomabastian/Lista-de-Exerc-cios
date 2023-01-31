var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que guarde 15 números inteiros em um vetor NINTEIRO 
// e que imprima uma listagem numerada contendo o número e uma das mensagens: par ou ímpar.


var NINTEIRO = []

for (let i = 0; i < 15; i++) {
    NINTEIRO.push(prompt('Numeros: '))
    
}


console.log(NINTEIRO)

for (let i = 0; i < NINTEIRO.length; i++) {
    if (NINTEIRO[i]%2 == 0) {
        console.log(NINTEIRO[i]+' é Par')  
    }
    else {console.log(NINTEIRO[i]+" é Impar")}
    
}