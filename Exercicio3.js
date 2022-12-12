var prompt = require('prompt-sync')();

const A = prompt("Valor 1: " )
const B = prompt("Valor 2: " )
const C = prompt("Valor 3: " )

let resultado = A+B+C;
resultado = Math.pow(resultado,2);

console.log(resultado);
