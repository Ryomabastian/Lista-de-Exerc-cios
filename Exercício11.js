var prompt = require('prompt-sync')();

var numero = prompt("digite numero de 3 digitos: " );

let a = parseInt(numero/100)
let b = parseInt(numero/10)
    b = b%10;
let c = parseInt(numero%10)

console.log(c,b,a)
