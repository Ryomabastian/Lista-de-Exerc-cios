var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que aceite vários números positivos e apresente a média dos números introduzidos.

// PENSA NUM MALUCO FOOOOOOOOOODA> https://www.youtube.com/watch?v=XiAtxDeP-p8

//Como somar elements do Array> https://www.youtube.com/watch?v=7bI4RVu4GH0



var arrayInicial = []
var numero = 1
while(numero>=1){

    numero = parseInt(prompt('numero:> '))
    arrayInicial.push(numero)

}
console.log(arrayInicial)

// FINALMENTE SOMANDO TODOS NUMEROS DO ARRAY
let novaArray = []
let resultado = 0
for(i=0; i<arrayInicial.length; i++){

    resultado = resultado+arrayInicial[i]
    novaArray.push(resultado)

}
console.log(novaArray)



//Tirando ultimo numero do array
var limite = novaArray.length-1
var arrayFinal = []
for(i=0; i<limite; i++){
    arrayFinal.push(novaArray[i])
}
console.log(arrayFinal)
var length = Number(arrayFinal.length)
console.log(length)
console.log(arrayFinal[length-1])


//Pegando o ultimo Numero do array e divindo pela quantidade de Numeros

var ultimoNum = arrayFinal[length-1]

console.log(ultimoNum)

var finalmente = (ultimoNum/length)

console.log('Média da porra toda> '+finalmente)
// let tamanhoArray = arrayFinal.length
// let maiornumero = arrayFinal[arrayFinal.length]
// let soma = (maiornumero) / (tamanhoArray)

// console.log(tamanhoArray)
// console.log(maiornumero)
// console.log(soma)
