var prompt = require('prompt-sync')();

var numero = prompt("Digite um numero qualquer que lhe direi a metade: " )

const resultado = parseFloat(numero / 2);

console.log("Resultado: ", resultado);
