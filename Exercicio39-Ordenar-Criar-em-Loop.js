var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que aceite números enquanto forem positivos e apresente o número de números introduzidos.

//OPÇÃO 1

var array = []
let numero = 1

while(numero>=1){
    numero = parseInt(prompt('Numero: '))
    array.push(numero)
}


//Tirar o ultimo numero da array

var limite = array.length -1
var arrayResultado = []
for(i=0; i<limite; i++){
    arrayResultado.push(array[i])
}
console.log(arrayResultado)



// Por em Ordem

// function ordenar (a,b){
//     if( a < b ){
//         return -1
//     } else { return 1 }
// }

// arrayResultado.sort(ordenar)

// console.log(arrayResultado)

// Outro modo de por em ordem, é criar o resultado direto com a função

var resultado = function ordenar(a,b){
    if (a < b) {
        return 1
    } else { return -1}
}

arrayResultado.resultado()