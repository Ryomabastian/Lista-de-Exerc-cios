var prompt = require('prompt-sync')();

// Elabore um algoritmo, segundo a notação gráfica, que aceite a idade de várias pessoas e que apresente o seguinte:
// ⦁	total de pessoas com menos de 21 anos;
// ⦁	total de pessoas com mais de 50 anos.


let user = []
let opcao = '1'

function addUser(user){
    let nome = prompt('Nome da Pessoa: ')
    user.push(nome);
};

while(opcao != '0'){

    console.log('1 - Adicionar pessoa')
    console.log('0 - Parar')
    opcao = prompt('Opção: ')

    switch(opcao){
        case '1': 
            addUser(user)
            break;
        
        case '0': 
            break;
        }

}

console.log(user)