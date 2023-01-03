//Elabore um algoritmo, segundo a notação gráfica, que informe a quantidade total de calorias de uma refeição a partir da escolha do utilizador que deverá informar o prato, a sobremesa e a bebida, de acordo com o seguinte menu:

// PRATO	            SOBREMESA	                BEBIDA
// vegetariano 180 cal	abacaxi 75 cal	            chá 20 cal
// peixe 230 cal	    sorvete 110 cal	            sumo de laranja 70 cal
// frango 250 cal	    mouse 170 cal	            sumo de melão 100 cal
// carne 350 cal	    chocolate 200 cal	        refrigerante 65 cal

var prompt = require('prompt-sync')();

let array = {prato: prompt('Prato: '), sobremesa: prompt('sobremesa: '), bebida: prompt('bebida: ')};

console.log(array);

let prato = [];
let sobremesa = [];
let bebida = [];

if(array.prato=='vegetariano'){
    prato.push(180)
}
if(array.prato=='peixe'){
    prato.push(230)
}
if(array.prato=='frango'){
    prato.push(250)
}
if(array.prato=='carne'){
    prato.push(350)
}
if(array.sobremesa=='abacaxi'){
    sobremesa.push(75)
}
if(array.sobremesa=='mouse'){
    sobremesa.push(170)
}
if(array.sobremesa=='chocolate'){
    sobremesa.push(200)
}
if(array.sobremesa=='sorvete'){
    sobremesa.push(110)
}
if(array.bebida=='melao'){
    bebida.push(100)
}
if(array.bebida=='cha'){
    bebida.push(20)
}
if(array.bebida=='laranja'){
    bebida.push(70)
}
if(array.bebida=='refrigerante'){
    bebida.push(65)
}

// let prato = [];
// let sobremesa = [];
// let bebida = [];


let resultado = parseInt(prato) + parseInt(sobremesa)+ parseInt(bebida)

console.log(prato, sobremesa, bebida)
console.log(resultado);









