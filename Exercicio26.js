// Elabore um algoritmo, segundo a notação gráfica, que aceite o salário de uma pessoa e apresente o desconto para a Segurança Social, sabendo que:

// menor ou igual a €600,00	                        -    isento
// maior que €600,00 e menor ou igual a €1200,00	-   20%
// maior que €1200,00 e menor ou igual a €2000,00	-    25%
// maior que €2000,00	                            -    30%


var prompt = require('prompt-sync')();

var salario = prompt("Qual o salário: ")

if(salario<=600){
    return console.log('isento')
}
else if(salario>600 && salario<=1200) {
    return console.log("Desconto: ", salario*0.2)
}
else if(salario>1200 && salario<=2000) {
    return console.log("Desconto: ", salario*0.25)
}
else if(salario>2000) {
    return console.log('Desconto: ', salario*0.3)
}

