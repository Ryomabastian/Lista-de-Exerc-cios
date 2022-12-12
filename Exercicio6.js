var prompt = require('prompt-sync')();

const a = prompt("Candidato 1: ")
const b = prompt("Candidato 2: ")
const c = prompt("Candidato 3: ")
const nulo = prompt("Nulos: ")
const branco = prompt("Brancos: ")

if(a>b & a>c){
    console.log("Candidato 1 venceu!! com ",a," votos!")
    }

if(b>a & b>c){
    console.log("Candidato 2 venceu!! com ",b," votos!")
    }

if(c>b & c>a){
    console.log("Candidato 3 venceu!! com ",c," votos!")
    }

const total = parseFloat(a)+parseInt(b)+Number(c)+Number(nulo)+Number(branco);
console.log("Total de eleitores: ", total);
