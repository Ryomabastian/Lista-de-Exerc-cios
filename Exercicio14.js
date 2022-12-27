var prompt = require('prompt-sync')();

const horas = prompt("Digite as horas: " )
const minutos = parseInt(prompt("Digite os minutos: " ))

let Resulthora = horas*60
let final = Resulthora + minutos;

console.log(final)