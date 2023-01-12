var prompt = require('prompt-sync')();

//Elabore um algoritmo, segundo a notação gráfica, que introduza o sexo de várias pessoas 
// (‘f’ ou ‘F’ para pessoas de sexo feminino e ‘m’ ou ‘M’ para pessoas de sexo masculino) e apresente o número de pessoas do sexo masculino. 
// Considere o caráter ‘s’ ou ‘S’ para terminar a inserção de várias pessoas.

console.log('Digite "f" ou "F" para feminino, e "m" ou "M" para masculino')

var obj = []
nome = 'm'
while (nome=='m' || nome=='f' || nome=='M' || nome=='F'){

    nome = prompt('Opção: ')
    obj.push(nome)

}

console.log(obj)

var resultado=0 
for(var i=0; i<obj.length; i++){

    if(obj[i]=='m' || obj[i]=='M'){
        resultado++
    }

}
console.log(resultado, 'Homens')
