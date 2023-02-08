var prompt = require('prompt-sync')();
const {getPriceQuarto , getPriceFood} = require('./tipoQuarto-PUXAR-FUNCAO')

// Elabore um algoritmo, segundo a notação gráfica, em que o hotel ESTG de 2ª categoria pretende controlar os seguintes dados dos seus 50 quartos:
// ⦁	Número de camas por quarto;
// ⦁	Preço;
// ⦁	Situação do quarto: alugado, livre ou reservado;
// ⦁	Aluguer do quarto com data de entrada e de saída e número de diárias;
// ⦁	Despesas dentro do hotel;
// ⦁	Valor a ser pago;
// ⦁	Impressão de todos os quartos com a situação de cada um;
// ⦁	Impressão dos quartos livres.

// O algoritmo deve funcionar de acordo com o menu a seguir:

// *******************************************************
// *	HOTEL ESTG 2ª	*
// *******************************************************
// ⦁	Registar quarto
// ⦁	Consultar todos os quartos
// ⦁	Consultar quartos ocupados
// ⦁	Alugar/Reservar quarto
// ⦁	Introduzir despesas extras
// 5	Calcular despesa do quarto

// 0	SAIR
// *******************************************************



////----- Vou trabalhar Random dessa vez !! ------ /////
var valores = [{Solteiro: 50},{Dupla: 80},{Suite: 100},{Master: 200}]


var tipoQuarto = ['solteiro','dupla','suite','master']
var situação = ['Alugado', 'Livre', 'Reservado']
let quartos = [1,2,3,4,5]
var custos = [10,8,5,12,15]
var obj = {}
var final = []


var NumAleatorio = (min, max) => Math.floor(Math.random()*(max - min + 1)+min)

let preço = 0

for (let i = 0; i < quartos.length; i++) {
    tipo = tipoQuarto[NumAleatorio(0,tipoQuarto.length-1 )]
    situacao = situação[NumAleatorio(0, situação.length -1 )]

    preço = getPriceQuarto(tipo)

    obj = { Quarto: quartos[i],
            Tipo: tipo,
            Preco: preço,
            Situacao: situacao}

    final.push(obj)
    
} console.log(final)


var ArrayDeEscolha = []
for (let i = 0; i < final.length; i++) {
    if (final[i].Situacao == "Livre") {
        console.log('Quartos disponíveis: '+ 'Quarto ' +final[i].Quarto, ',Tipo: '+final[i].Tipo, ',Preço: '+final[i].Preco)
        ArrayDeEscolha.push(final[i].Quarto)
    }    
}


console.log('Qual deseja alugar?\n ')
var key = +prompt('Escolha: ')


newkey = '0'
if (ArrayDeEscolha.includes(key)) {
    final[key-1].Situacao = "Reservado"

    console.log('\nPretende consumir algo?\nCerveja = 10 Euros\nSuco = 8 Euros\nAgua = 5 Euros\nPizza = 12 Euros\nHambuguer = 15 Euros\nNada = 0\n')

    while (newkey!= 'nada') {
        
        newkey = prompt('Opção: ')
        if(newkey === 'nada') break
        let precoAtual = final[key-1].Preco
        final[key-1].Preco = getPriceFood(newkey,precoAtual)
        
    console.log('\nAlgo a mais?')
    }
    

console.log(final)
console.log('Preço final do quarto: '+final[key-1].Preco)
}else {console.log('Tudo Ocuapado!')}

