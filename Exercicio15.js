var prompt = require('prompt-sync')();

let tempo = prompt("Digite um numero qualquer de segundos: " )



let horas = parseInt(tempo/3600);
let minutos = tempo%3600
    minutos = parseInt(minutos/60);
let segundos = tempo%3600;
    segundos = segundos%60;


console.log( horas, "horas", minutos, "minutos", segundos, "segundos")