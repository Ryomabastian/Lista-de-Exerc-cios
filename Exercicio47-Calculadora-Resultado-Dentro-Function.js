var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que simule uma calculadora simples com o seguinte menu:
// ********************************************
// *	CALCULADORA SIMPLES	*
// ******************************************** 
// S	(somar vários números)
// M	(multiplicar vários números)
// 0	(sair)
// ********************************************

console.log('\nCALCULADORA SIMPLES')
let somar = []
let multiplicar = []
let condicao = 0 
let opcao = 1

///--- OBS: os \n numca vão na frente dos Prompts

function peido() {
    console.log('\nS: Somar Numeros\nM: Multiplicar Numeros\n0: PARA PARAR\n')
    opcao = prompt('Opção: ')

    
        if (opcao == 's' || opcao == 'S') {
            while (opcao != '0') {
                opcao = parseInt(prompt('Numeros: '))
                somar.push(opcao)}

                    let resultadoSoma = 0
                    for (let i = 0; i < somar.length; i++) {
                    resultadoSoma += somar[i];   
                    } console.log("Resultado soma: ", resultadoSoma)
            }




        if (opcao == 'M' || opcao == 'm') {
            while (opcao != '0') {
                opcao = parseInt(prompt('Numeros: '))
                multiplicar.push(opcao)}

                    function multiplicacao(a,b){
                        return a*b;
                    }
                    // Primeiro tirar o ultimo numero da array, pq era um ZERO '0'
                    multiplicar.pop()
                    let resultadoMultiplicar = multiplicar.reduce(multiplicacao)
                    console.log("Resultado multiplicação: ", resultadoMultiplicar)
            }
}

    console.log('\nY: INICIAR\nN: PARAR')
    condicao = prompt('Opção: ')
        switch (condicao) {
            case 'y': peido()
                break;
            case 'Y': peido()
                break;
            case 'n': console.log('OK, FIM!')
                return;
        }


// console.log(somar)
// console.log(multiplicar)

// //Somar Numeros da Array:
// //Opção 1: Usando For e +=
// let resultadoSoma = 0
// for (let i = 0; i < somar.length; i++) {
//     resultadoSoma += somar[i];   
// } console.log("Resultado soma: ", resultadoSoma)

// //Resultado Multiplicação

// function multiplicacao(a,b){
//     return a*b;
// }
// // Primeiro tirar o ultimo numero da array, pq era um ZERO '0'
// multiplicar.pop()
// let resultadoMultiplicar = multiplicar.reduce(multiplicacao)
// console.log("Resultado multiplicação: ", resultadoMultiplicar)