var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que numa eleição associativa académica existem quatro candidatos. Os votos para o escrutínio obedecem à seguinte 
codificação:
// ⦁	1, 2, 3 e 4: votos para os respetivos candidatos;
// ⦁	5: voto nulo;
// ⦁	6: voto em branco;
// Apresente (1) o total de votos para cada candidato, (2) o total de votos nulos, (3) o total de votos em branco e (4) a percentagem dos votos em branco e 
// nulos sobre o total dos votos da eleição.

var array = []
var number = 1

console.log("// VOTAÇÃO\n1-> CANDIDATO 1\n2-> CANDIDATO 2\N3-> CANDIDATO 3\n4-> CANDIDATO 4\n5: voto nulo\n6: voto em branco\n0-> PARA PARAR\n")
while (number != 0) {
    number = prompt("VOTO: ")
    array.push(number)
} console.log(array)

var total = array.length-1
console.log(total)


var cand1 = 0
for (let i = 0; i < array.length; i++) {
    if (array[i] == 1) {
        cand1 ++
    }  
}   console.log("Quantidade votos no 1> ",cand1)

var cand2 = 0
for (let i = 0; i < array.length; i++) {
    if (array[i] == 2) {
        cand2 ++
    }  
}   console.log("Quantidade votos no 2> ",cand2)

var cand3 = 0
for (let i = 0; i < array.length; i++) {
    if (array[i] == 3) {
        cand3 ++
    }  
}   console.log("Quantidade votos no 3> ",cand3)

var cand4 = 0
for (let i = 0; i < array.length; i++) {
    if (array[i] == 4) {
        cand4 ++
    }  
}   console.log("Quantidade votos no 4> ",cand4)

var nulo = 0
for (let i = 0; i < array.length; i++) {
    if (array[i] == 5) {
        nulo ++
    }  
}
var porNulo = (nulo/total)*100
console.log("Quantidade votos NULO> ",nulo,",Porcentagem> ",porNulo,"%" )

var branco = 0
for (let i = 0; i < array.length; i++) {
    if (array[i] == 6) {
        branco ++
    }  
}   
var porBranco = (branco/total)*100
console.log("Quantidade votos BRANCO> ",branco,",Porcentagem> ",porBranco,"%" )

