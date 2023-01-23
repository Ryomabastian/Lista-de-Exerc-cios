var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, para representar
// um triângulo retângulo a cheio com largura e altura iguais, sendo a dimensão fornecida por teclado que será o número de carateres de apresentação, 
// usando o caráter *. Deverá escolher uma das quatro configurações possíveis para o triângulo, mostrando a configuração desejada face ao valor da dimensão introduzida:


var tamanho = prompt('Tamnho do trianugulo: ')
var asteristico = '*'

var final = ""

// for (let i = 0; i < tamanho; i++) {
//     final = final + asteristico;
//     console.log(final)    
// }

////////////OU
for (let i = 0; i < tamanho; i++) {
    final += '*'
    console.log(final)    
}


////---------------------------------------------------------

// let c = 0
// for (let j = 0; j < tamanho; j++) {
//     for (let i = c; i < tamanho; i++) {
//         final = final + asteristico;    
//     }
//     c++
//     console.log(final)
//     final = ''       
// }


////---------------------------------------------------------



