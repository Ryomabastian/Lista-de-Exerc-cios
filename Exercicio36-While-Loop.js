// Elabore um algoritmo, segundo a notação gráfica, para calcular o aumento salarial de um empregado, sendo este identificado pelo seu número de funcionário
// (inteiro com cinco dígitos) e que aufira um dado salário (salarioAtual). Por defeito o aumento salarial será de 15%; 
// entretanto, existe uma regra de exceção para cada faixa salarial:
// ⦁	se €1500,00 <= salarioAtual < €1750,00: aumento de 12%;
// ⦁	se €1750,00 <= salarioAtual < €2000,00: aumento de 10%;
// ⦁	se €2000,00 <= salarioAtual < €3000,00: aumento de 7%;
// ⦁	se salarioAtual >= €3000,00: aumento de 5%.
//VIDEO: https://www.youtube.com/watch?v=n5uiJr-v0KQ

var prompt = require('prompt-sync')();

// let array = []
// salario = 1
// while (salario >=1){

//     var nome = prompt('nome: ')
//     var salario = parseInt(prompt('salario: '))
//     array.push({nome,salario})

// }

// console.log(array)
// console.log(array[2].nome)

////////////////////////////// OPÇÃO DOIS

let array2 = []
let salario=1
while(salario >= 1){

    let nome = prompt('nome> ')
    salario = parseInt(prompt('salario: '))

    let obj = {nome: nome, salario: salario}
    array2.push(obj)

}

console.log(array2)
console.log(array2[2].nome)