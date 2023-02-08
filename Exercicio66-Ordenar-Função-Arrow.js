var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que receba a temperatura média de cada mês do ano, em graus centígrados, e armazene essas temperaturas num vetor. 
// O algoritmo deverá apresentar as temperaturas de todos os meses, a maior e a menor temperatura do ano e em que mês aconteceram.

var base = ['janeiro', 'fevereiro', 'março','abril','maio','junho','julho','agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
var array = []




    for (let i = 0; i < 12; i++) {
        
        temp = prompt("Temperatura em "+base[i]+" : ")
        var obj = {Mes: base[i], Temperatura: temp}
        array.push(obj)
    }

console.log(array)
array.sort((a,b) => a.Temperatura-b.Temperatura)



/////////////-------------- OU ------------///////////////////
// function ordem(a,b){
//     return a.Temperatura-b.Temperatura
// }
// array.sort(ordem)

console.log(array)