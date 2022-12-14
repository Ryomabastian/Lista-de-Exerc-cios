var prompt = require('prompt-sync')();

let numero = prompt("digite uma data com formato 'aammdd': " )

let array = numero.split("");

let resultado = [array[4],array[5],array[2],array[3],array[0],array[1]]
resultado = resultado.join("")

console.log(array, resultado);



