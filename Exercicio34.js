// Apresentar para cada paciente o seu nível de risco, sabendo que

// ICM	nível de risco
// abaixo de 20.0	        abaixo do peso
// acima de 20.0 até 25.0	Normal
// acima de 25.0 até 30	    excesso de peso
// acima de 30.0 até 35.0	Obesidade
// acima de 35.0	        obesidade mórbida
//Sendo que IMC> IMC = (peso/altura2) sendo o peso em Kg e a altura em m.



var prompt = require('prompt-sync')();

var peso = parseInt(prompt('Peso em KG: '))
var altura = parseFloat(prompt('Altura em Metros: '))

var imc = peso / Math.pow(altura,2);

console.log('IMC: ' + imc)

if(imc<=20){
    console.log('abaixo do peso')
}
if(imc>20 && imc <=25){
    console.log('normal')
}
if(imc>25 && imc <=30){
    console.log('excesso de peso')
}
if(imc>30 && imc <=35){
    console.log('Obesidade')
}
if(imc>35){
    console.log('Obesidade mórbida')
}
