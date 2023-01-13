var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que aceite a idade de várias pessoas e que apresente o seguinte:
// ⦁	total de pessoas com menos de 21 anos;
// ⦁	total de pessoas com mais de 50 anos.



let array = []
let idade = 1

console.log('Adicione idades, se quiser parar presse 0')
while(idade>=1){

    idade = parseInt(prompt('Idades: '))
    if(idade!='0'){
    array.push(idade)}

}

console.log(array)

//// Organizar a array, só para treinar

let orgazn = function(a,b){
    if(a<b){
        return 1
    } else {return -1}
}

array.sort(orgazn)

console.log(array)

// resolvendo a questão

let min = 0
let max = 0

for(var i=0; i<array.length; i++){
    if(array[i]<=21){
        min++
    } 
    
    else if(array[i]>=50){
        max++
    }
}


console.log('Menos de 21: '+ min, '\nMais de 50: '+ max)
console.log(min)
console.log(max)