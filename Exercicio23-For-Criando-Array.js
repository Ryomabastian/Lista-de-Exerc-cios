var prompt = require('prompt-sync')();

let array = []

for( var i=0; i < 3; i++) {

    let numero = prompt("Digite: ")
    array.push(numero)
}

array.sort(resultado)

function resultado (a,b) {
    return a-b;

}




console.log(array)