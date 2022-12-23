var prompt = require('prompt-sync')();

var numero = prompt("digite numero de 3 digitos: " );


let a = parseInt(numero/100);
let b = parseInt(numero/10);
    c = b%10;
let d = numero%10;

let resultado = [d,c,a]
    resultado = resultado.join("")
    resultado = parseInt(resultado);

//Letra A
let A = parseInt(numero) + parseInt(resultado);
console.log(A)
//Letra B
let Aa = parseInt(A/100);
let Bb = parseInt(A/10);
    Bb = Bb%10;
let Cc = A%10;

let fim = Aa*1 + Bb*2 + Cc*3

console.log(fim)