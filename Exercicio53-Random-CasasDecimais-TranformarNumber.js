
var prompt = require('prompt-sync')();

// VIDEO>>>>>>>>> https://www.youtube.com/watch?v=EEyrkoUlqoU
//SABE O QUE É AMAR UM VIDEO???> https://www.youtube.com/watch?v=FCSHBV5N_fU

// Elabore um algoritmo, segundo a notação gráfica, que aceite o número de matrícula, a nota do primeiro teste e a nota do segundo teste de 35 alunos. 
// Apresente a listagem adequadamente formatada com o número de matrícula, a nota do primeiro teste, a nota do segundo teste e a média arredondada de cada aluno, 
// incluindo no final da listagem a média geral da turma.



var obj
var pauta = []

for (let i = 0; i < 10; i++) {           //(max-min+1)+min //isto é pra casa decimal     
    obj = {Aluno: i+1, Nota1: +(Math.random()*(10-0+1)+0).toFixed(2), Nota2 : +(Math.random()*(10-0+1)+0).toFixed(2)};
    pauta.push(obj)   //este "+" é para transfomar tudo em número
}

console.log(pauta)

var PautaFinal = []


for (let j = 0; j < pauta.length; j++) {
    obj = {Aluno: j+1, Final: +((pauta[j].Nota1+pauta[j].Nota2)/2).toFixed(2)}
    PautaFinal.push(obj)
} console.log(PautaFinal)