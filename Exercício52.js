var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que aceite os limites inferior e superior de um dado intervalo aberto e um determinado número, 
// apresentando todos os números múltiplos do número introduzido para o intervalo considerado.

var numero = 1
var array = []
console.log('Press 0 para parar!!!\n')
while(numero>= 1){

    numero = prompt('Numeros: ')
    array.push(numero)
}

console.log(array)

console.log('Agora o numero que pretende conferir multiplos: ')
var padrao = prompt('Numero: ')

var resultado = []

for (let i = 0; i < array.length; i++) {
    if(array[i] % padrao == 0){
        resultado.push(array[i])
    }
    
} console.log('Os Multiplos são> '+resultado)
