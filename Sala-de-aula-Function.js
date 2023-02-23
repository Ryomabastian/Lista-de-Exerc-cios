let prompt = require('prompt-sync')();



let Students = []

export function main() {

    let opc = 1
    console.log('INICIO')
    
    while (opc!= 0) {
        console.log('\n1 - Adicionar nova Conta')
        console.log('2 - Logar')
        console.log('0 - Sair')
        opc = prompt('Opção: ')
        
        switch (opc) {
            case '1':
                getNewStudent()
                break;
                
            case '2':
                let newStudent = prompt('Login: ')
                let newPassword = prompt('Senha: ')
                if (login(newStudent, newPassword)) {
                    menuAluno(login(newStudent, newPassword))
                }
                
                break;
                    
            case '0':
                console.log('FIM')
                return;
        }
    }
    
}

function getNewStudent() {

    let newStudent = prompt('Login: ')
    let newPassword = prompt('Senha: ')
    let obj = { Aluno: newStudent,
                Senha: newPassword,
                Lista: []}
    Students.push(obj) 
    
}  

function getLogin() {
    console.log('\nLOGAR NA CONTA:')
    var opcNome = prompt('Nome: ')
    var opcSenha = prompt('Senha: ')

    for (let i = 0; i < Students.length; i++) {
        
        if (opcNome === Students[i].Aluno && opcSenha === Students[i].Senha) {
            let opcao = 1 
            let aluno = Students[i]
            while(1){
                console.log('\n1 - Criar Lista')
                console.log('2 - Ver Lista')
                console.log('3 - Modificar Lista')
                console.log('0 - sair')
                opcao = prompt('opcao: ')
    
                switch (opcao) {
                    case '1':
                        getCriarLista(aluno)
                        break
                    case '2':
                        console.log(Students[i].Lista)
                        break
                    case '3':
                        getCriarLista(aluno)
                        return
                    case '0':
                        return
                }     
            }
        } else {console.log('\nLogin ou Senha Inválida')}
        
    }
}

function getCriarLista(aluno) {
    console.log('DIGITE "0" PARA PARAR, OBRIGADO!')
    let itens = 1
    while (itens != 0) {
        
        itens = prompt('Add: ')
        if (itens == 0) {
            return
        }
        aluno.Lista.push(itens)
    
    }
    
}

function menuAluno(aluno) {
    while(1){
        console.log('\n1 - Criar Lista')
        console.log('2 - Ver Lista')
        console.log('3 - Modificar Lista')
        console.log('0 - sair')
        opcao = prompt('opcao: ')

        switch (opcao) {
            case '1':
                getCriarLista(aluno)
                break
            case '2':
                console.log(aluno.Lista)
                break
            case '3':
                getCriarLista(aluno)
                return
            case '0':
                return
        }     
    }
}

function login(Aluno, Senha) {
    for (let i = 0; i < Students.length; i++) {

        if (Aluno === Students[i].Aluno && Senha === Students[i].Senha) {

            return Students[i]

        }

    }
    console.log('\nLogin ou Senha Inválida')
    return null
}



// module.exports = {
//     main
// }



