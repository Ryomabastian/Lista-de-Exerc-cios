var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que dada uma empresa fornecedora de energia elétrica faz a leitura mensal dos contadores de consumo. 
// Para cada consumidor são introduzidos os seguintes dados:
// ⦁	Número do consumidor;
// ⦁	Quantidade em kWh consumidos durante o mês; (média 40 kWh por mês)
// ⦁	Tipo de consumidor, sabendo que
// ⦁	residencial:    preço em euros por kWh: 0,3
// ⦁	comercial:      preço em euros por kWh: 0,5
// ⦁	industrial:     preço em euros por kWh: 0,7. 



var usuarios = []
var obj = {}

function addUser(){
    nome = prompt('Nome: ')
    qtd = parseInt(prompt('Quantidade Kwh consumo: '))
    console.log('Tipo de consumidor:\n 1-residencial:\n 2-comercial:\n 3-industrial:');
    consumidor = prompt('Opçao: ')
    switch(consumidor){
        case '1': tipo = 'residencial'
        break;

        case '2': tipo = 'comercial'
        break;

        case '3': tipo = 'industrial'
    }

    obj = ({nome: nome, qtd: qtd, tipo: tipo})
    usuarios.push(obj);
    
}

var opcao = 1
while (opcao>=1){
        if(opcao == 1){
        addUser();
        console.log("\nAdicionar Novo Usuário?\n 1: Sim\n 0: Não, parar")
        opcao = prompt('Opção: ')
        }
}

console.log(usuarios[0].tipo)
// if(usuarios[0].tipo == 'residencial'){
//     console.log('vá se fuder')
// }
// if(usuarios[0].qtd == 50){
//     console.log('vá se fuder')
// }

let array = []
let n
function resultado(){
    for(var i=0; i<usuarios.length; i++){
        if(usuarios[i].tipo == 'residencial'){
            n = (usuarios[i].qtd*0.3)
            objFinal  = ({nome: usuarios[i].nome, custo: n})
            array.push(objFinal)
        }
        if (usuarios[i].tipo == 'comercial') {
            n = (usuarios[i].qtd*0.5)
            objFinal  = ({nome: usuarios[i].nome, custo: n})
            array.push(objFinal)
        } 
        if (usuarios[i].tipo == 'industrial') {
            n = (usuarios[i].qtd*0.7)
            objFinal  = ({nome: usuarios[i].nome, custo: n})
            array.push(objFinal)
        } 
    }
    console.log(usuarios)
    console.log(array)   
}


console.log('\nVer Custo Final?\n 1: Sim\n 0: Não, só ver lista final')
let opcao2 = prompt('Opção: ')
switch (opcao2) {
    case '1': resultado()
        break;

    case '0': console.log(usuarios)
        break;
}

// array = []
// for(var j=0; j<usuarios.length; j++){
//     objFinal  = ({nome: usuarios[j].nome, custo: n})
//     array.push(objFinal)   
// }

