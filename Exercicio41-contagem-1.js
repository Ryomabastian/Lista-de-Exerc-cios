var prompt = require('prompt-sync')();

//Elabore um algoritmo, segundo a notação gráfica, que aceite vários números e apresente quantos números entre 100 e 200 foram introduzidos. 
// Quando o número 0 for introduzido, o algoritmo deve cessar a sua execução.

var array = []
var numero = 1


while (numero>=1){
    numero = parseInt(prompt('Numeros: '))
    array.unshift(numero);
}
console.log(array)

var resultado = 0

for(var i=0; i<array.length;i++){
    if(array[i]>100 && array[i]<200){
        resultado ++ ;
    }
}

console.log(array)
console.log(resultado)


