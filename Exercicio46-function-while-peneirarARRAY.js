var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que aceite a idade e o estado civil 
// ( s ou S para solteiro, c ou C para casado, d ou D para divorciado, u ou U para união de facto e v ou V viúvo) de várias pessoas e apresente:
// ⦁	a quantidade de pessoas solteiras;
// ⦁	a quantidade de pessoas casadas;
// ⦁	a média das idades das pessoas em união de facto e em viuvez;
// ⦁	a percentagem de pessoas divorciadas entre todas as pessoas analisadas.


var array = []

function usuarios(){


    console.log('\nESTADO CIVIL\nS: Solteiro\nC: Casado\nD: Divorciado\nU: União\nV: Viuvo')
    let escolha = prompt('Estado Civil Correspondente: ')
    if(escolha != 's' && escolha != 'c' && escolha != 'd' && escolha != 'u' && escolha != 'v'){
        console.log('\nOpção inválida!')
    } 
    else {array.push(escolha);
    }
}

let opcao = 1
while(opcao == '1'){
    console.log('\nADICIONAR USUÁRIO?\n1: Sim\n0: Não')
    opcao = prompt('Opção: ')
    switch (opcao) {
        case '1': usuarios()
            break;
        default: '0'
            break;
    }

}
console.log(array)

//--------- Quantidade de Solteiros
const solteiros1 = array.filter(a => a == 's')

///-------- OU
function filtrar(parametro) { 
    return parametro == 's'
}
const solteiros2 = array.filter(filtrar)

//-------- OU
let solteiros3 = 0
for (let i = 0; i < array.length; i++) {
    if (array[i] == 's') {
        solteiros3 ++
    }
}

console.log(solteiros1)
console.log(solteiros2)
console.log(solteiros3)

// a quantidade de pessoas casadas

const casados1 = array.filter(caso)

function caso(a){
    return a == 'c'
}

console.log(casados1)

//// ou

const casados2 = array.filter(a => a == 'c' )
console.log(casados2)
