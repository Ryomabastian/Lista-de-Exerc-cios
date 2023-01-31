var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que guarde os números de matrícula e as notas do primeiro teste e do segundo teste de 15 alunos. 
// O algoritmo deverá calcular e guardar a média arredondada e, também, a situação do aluno: 1 para o estado de APROVADO ou 0 para o estado de REPROVADO. 
// Deve ainda o algoritmo apresentar uma listagem, na forma tabular, contendo número de matrícula, as notas, a média e a situação de cada aluno.



function add() {
    var aluno = prompt('Nome Aluno: ')
    var Nota1 = +prompt('Nota 1: ')
    var Nota2 = +prompt('Nota 2: ')
    var obj = {Aluno: aluno, Nota1: Nota1, Nota2: Nota2}
    sala.push(obj)
}

let opc = 1

// var resul = {}
var final = []
var sala = []
while (opc != 0) {
  
    console.log("\nAdicionar User?\n1- Sim\n0- Não\n")
    opc = prompt('Opção: ')

    switch (opc) {
        case '1':
            add()
            break;

        case '0':
            console.log(sala)
            console.log("Oi")
            console.log(sala[0].Aluno)
            break;
    }

}

for (let i = 0; i < sala.length; i++) {
    let NotaFinal = (sala[i].Nota1+sala[i].Nota2)/(2)
    var resul = {Aluno: sala[i].Aluno, NotaFinal: NotaFinal}
    final.push(resul)
}


console.log(final)



for (let i = 0; i < final.length; i++) {

        if(final[i].NotaFinal >= 6){
            console.log(sala[i].Aluno, 'APROVADO')
        } else {console.log(sala[i].Aluno, 'REPROVADO')}
    
}


// console.log(NotaFinal)
