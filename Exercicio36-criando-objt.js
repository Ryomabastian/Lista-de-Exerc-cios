// Elabore um algoritmo, segundo a notação gráfica, para calcular o aumento salarial de um empregado, sendo este identificado pelo seu número de funcionário
// (inteiro com cinco dígitos) e que aufira um dado salário (salarioAtual). Por defeito o aumento salarial será de 15%; 
// entretanto, existe uma regra de exceção para cada faixa salarial:
// ⦁	se €1500,00 <= salarioAtual < €1750,00: aumento de 12%;
// ⦁	se €1750,00 <= salarioAtual < €2000,00: aumento de 10%;
// ⦁	se €2000,00 <= salarioAtual < €3000,00: aumento de 7%;
// ⦁	se salarioAtual >= €3000,00: aumento de 5%.
//VIDEO: https://www.youtube.com/watch?v=n5uiJr-v0KQ



var prompt = require('prompt-sync')();

var array = []
var salario = 1
while (salario >=1){

    let nome = prompt('nome> ')
    var salario = prompt('salario> ')

    let obj = {nome: nome, salario: salario}
    array.push(obj)

}

console.log(array)

for(var i=0; i<array.length; i++ ){
console.log(array[i].salario)
}
console.log(array[0].salario)

// i = 0
// if(array[i].salario>= 1500 && array[i].salario<1750){
//     array[i].salario = array[i].salario*0.12

// }
// console.log(array[0].salario)



for(var i=0; i<array.length; i++ ){

    if(array[i].salario<1500){
        array[i].salario = 0
        continue;
    }
    if(array[i].salario>= 1500 && array[i].salario<1750){
        array[i].salario = array[i].salario*0.12
        continue;
    }
    if(array[i].salario>= 1750 && array[i].salario<2000){
        array[i].salario = array[i].salario*0.10
        continue;
    }
    if(array[i].salario>= 2000 && array[i].salario<3000){
        array[i].salario = array[i].salario*0.07
        continue;
    }
    if(array[i].salario>= 3000){
        array[i].salario = array[i].salario*0.05
        continue;
    }  

}


console.log(array)

