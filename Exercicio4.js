var prompt = require('prompt-sync')();

const A = prompt("Valor 1: ")
const B = prompt("Valor 2: ")
const C = prompt("Valor 3: ")
const D = prompt("Valor 4: ")

const produto = parseFloat(A)*parseFloat(C)
const soma = parseFloat(B) + parseFloat(D);

console.log("Produto: ", produto, "// Soma: ",soma);

