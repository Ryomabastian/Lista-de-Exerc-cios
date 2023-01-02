// Elabore um algoritmo, segundo a notação gráfica, que determine o peso ideal de uma pessoa (homem ou mulher) 
// relacionado com a altura e o peso, utilizando as seguintes fórmulas:
// (72.7 x altura) - 58	(para os homens) (62.1 x altura) – 44.7	(para as mulheres)

// Video ajuda> https://www.youtube.com/watch?v=yc0TYlnZIp4
// COMO ACESSAR OS OBJETOS DE UMA ARRAY???>>>  https://www.youtube.com/watch?v=CqQVAXilGEw

var prompt = require('prompt-sync')();

var pessoa = {nome: prompt("homem ou mulher? "), altura: parseFloat(prompt("Altura? "))}

console.log(pessoa)
console.log("Para um ",pessoa.nome)


if(pessoa.nome=='homem'){
    var peso = (72.7*pessoa.altura) - (58)
    console.log("O peso ideal é: ", peso,"kg")
}

if (pessoa.nome=='mulher'){
    var peso = (72.7*pessoa.altura) - (58)
    console.log("O peso ideal é: ", peso,"kg")
}

