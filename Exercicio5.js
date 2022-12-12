var prompt = require('prompt-sync')();

let velocidade = prompt("Digite a velocidade 'km/h': ")
let tempo = prompt("O tempo gasto em minutos: ")
tempo = parseFloat(tempo/60);

let distancia = parseFloat(velocidade)*parseFloat(tempo)
let combustivel = distancia/12
let velocidadeMedia = distancia/tempo


console.log("Distancia Km: ", distancia,"// Velocidade média Km/h: ", velocidadeMedia,"// Tempo gasto em horas: ", tempo,"// Combustivel gasto: ", combustivel);


