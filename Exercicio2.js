var prompt = require('prompt-sync')();

const A = prompt("Valor 1: " )
const B = prompt("Valor 2: " )
const C = prompt("Valor 3: " )

const resultado = Math.pow(A,2)+Math.pow(B,2)+Math.pow(C,2);

console.log(resultado);
