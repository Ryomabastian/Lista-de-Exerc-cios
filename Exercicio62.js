var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que aceite vários números inteiros e positivos. A leitura encerra-se quando encontrar um número negativo 
// ou quando o vetor ficar completo. Sabe-se que o vetor possui, no máximo, 10 elementos. 
// O algoritmo deverá gerar e apresentar um vetor onde cada elemento é o inverso do seu correspondente no vetor original.


n = 1
var array = []
while (array.length < 10 && n>=1) {
    var n = parseInt(prompt('Numero: '))
    array.push(n)
}

console.log(array)

for (let i = 0; i < array.length; i++) {
    array[i] = 1/array[i]
    
}

console.log(array)