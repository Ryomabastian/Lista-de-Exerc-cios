var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, para representar
// um triângulo retângulo a cheio com largura e altura iguais, sendo a dimensão fornecida por teclado que será o número de carateres de apresentação, 
// usando o caráter *. Deverá escolher uma das quatro configurações possíveis para o triângulo, mostrando a configuração desejada face ao valor da dimensão introduzida:


var n = prompt('Tamnho do trianugulo: ')




var c = 0
for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {   
        process.stdout.write('-')

    }
    for (let j = c; j < n; j++) {   
        process.stdout.write('*')

    }
    process.stdout.write('\n')
    c++
}



var c = 1
for (let i = 1; i <= n; i++) {
    for (let j = c; j < n; j++) {   
        process.stdout.write('-')

    }
    for (let j = 1; j <= i; j++) {   
        process.stdout.write('*')

    }
    process.stdout.write('\n')
    c++
}

