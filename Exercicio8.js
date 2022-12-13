var prompt = require('prompt-sync')();

const digito = parseInt(prompt("Digite um numero de 3 digitos: " ))

let c = parseInt(digito /10);
let d = parseInt(c%10)

console.log(d);
