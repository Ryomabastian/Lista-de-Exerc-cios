// Apresentar o peso no planeta escolhido, utilizando a fórmula: (peso)planetaEscolhido = (peso)planetaTerra x (gravidadeRelativa)planetaescolhido
// #	planeta	gravidade relativa
// 1	Mercúrio    0,37
// 2	Vénus	    0,88
// 3	Marte	    0,38
// 4	Júpiter	    2,64
// 5	Saturno	    1,15
// 6    Urano	    1,17
// Peso da Terra: 5,972 × 10^24 kg
var prompt = require('prompt-sync')();

var planeta = prompt('Planeta: ')

let gravidadeRelativa = []

if(planeta=='mercurio'){
    gravidadeRelativa.push(0.37)
}
if(planeta=='venus'){
    gravidadeRelativa.push(0.88)
}
if(planeta=='marte'){
    gravidadeRelativa.push(0.38)
}
if(planeta=='jupiter'){
    gravidadeRelativa.push(2.64)
}
if(planeta=='saturno'){
    gravidadeRelativa.push(1.15)
}
if(planeta=='urano'){
    gravidadeRelativa.push(1.17)
}


let resultado = 5.972*gravidadeRelativa;

console.log(resultado + "x10^24kg");
