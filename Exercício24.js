//Elabore um algoritmo, segundo a notação gráfica, que aceite cinco números e apresente o maior e o menor dos números introduzidos


var prompt = require('prompt-sync')();

let array = [];

for(var i=0; i<5; i++) {

    let numero = prompt("Vai: ");
    array.push(numero);

}

array.sort(resultado)

function resultado (a,b){
    if(a<b){ 

    return -1

    }
    else {

    return 1

    }
}

console.log(array[0], array[4]);

