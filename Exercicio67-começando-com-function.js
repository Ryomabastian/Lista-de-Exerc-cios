var prompt = require('prompt-sync')();

// Elabore  um  algoritmo,  segundo  a  notação  gráfica,  que  permita
// guardar o número de matrícula, as notas de dois testes e a média de 50 alunos. A média será calculada segundo o critério: 
// o peso 30.0% para a nota do 1º teste e o peso 70.0% para o 2º teste. A apresentação no ecrã deverá conter o número de matrícula, as duas notas e a média. 
// O algoritmo deverá obedecer ao seguinte menu:
// *******************************************************
// *	ESCOLA VIVA	*
// *******************************************************
// ⦁	introduzir o nome do aluno
// ⦁	introduzir as notas do primeiro teste
// ⦁	introduzir as notas do segundo teste
// ⦁	calcular a média
// 6	apresentar a listagem dos alunos
// 0	SAIR
// ******************************************************* 


var sala = []
var resul = []
var opc =1
function add(){
    var aluno = prompt('Nome do Aluno: ')
    var nota1 = +prompt('Nota do primeiro teste: ')
    var nota2 = +prompt('Nota do segundo teste: ')
    var obj = {Aluno: aluno, Nota1: nota1, Nota2: nota2}
    sala.push(obj)
}

while(opc!= 0 ){

    console.log("1: Adicionar Aluno\n2: Listar Alunos\n0: Sair\n")
    opc = prompt('Opção: ')

    switch (opc) {
        case '1':
            add()
            break;
        case '2':
            console.log(sala)
            break;
        case '0':
            final()
            console.log('FIM')
            break;
    }


}

function final() {
    for (let i = 0; i < sala.length; i++) {
        sala[i].Nota1 = sala[i].Nota1*0.3
        sala[i].Nota2 = sala[i].Nota2*0.7
        media = +((sala[i].Nota1 + sala[i].Nota2)/2).toFixed(2)
        var obj = {Aluno: sala[i].Aluno, Media: media}
        resul.push(obj)
    } console.log(resul)
}