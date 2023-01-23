var prompt = require('prompt-sync')();


// Elabore um algoritmo, segundo a notação gráfica, para calcular e apresentar o valor de ex, 
// sendo esse valor calculado pela soma dos primeiros dez termos da seguinte série para um dado valor de x:

// ex = 1 + x + x2/2! + x3/3! + x4/4! + …

//Primeiro deve-se fazer numero fatorial!


var num = parseInt(prompt('Numero: '))
let res = num
let cond = num
let final = []
        for (let i = 0; i < cond; i++) {
    
                for (let j = 1; j < num; j++) {    
                    res = res*(num-j)                             
                }  

            final.push(res)
            num--
            res = num    

        }

let resultadoFinal = final.reduce(somar)
function somar(a,b){
    return a+b
}


console.log(res, final, resultadoFinal)