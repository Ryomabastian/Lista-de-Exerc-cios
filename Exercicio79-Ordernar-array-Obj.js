let prompt = require('prompt-sync')();

// Uma loja tem dez vendedores. Deseja-se registar o vendedor pelo número de contribuinte de pessoa singular. 
// Cada vendedor terá um número que lhe corresponde ao da posição no vetor matricial: VENDEDOR. 
// Os totais de vendas de cada vendedor serão registados no vetor matricial VENDAS (supondo 27 dias úteis). O algoritmo deverá funcionar através do menu a seguir:
// *******************************************************
// *	LOJA VENDE BARATO	*
// *******************************************************
// ⦁	Registar vendedor
// ⦁	Listar todos os vendedores
// ⦁	Ver um vendedor especifico
// ⦁	Conhecer total das vendas da loja
// ⦁	Listar vendedor(es) premiado(s)

// ⦁	SAIR
// *******************************************************
// PR79
// observações: 
// (i) regista-se, de uma vez, o número de contribuinte da pessoa singular; 
// (ii) lista-se todos os vendedores registados com os seus números de contribuintes de pessoas singulares; 
// iii) regista- se todos os totais dos vendedores de uma vez por dia; 
// (iv) usa-se o número de contribuinte de pessoa singular e um determinado dia para determinar o total de vendas até esse dia do vendedor em causa; 
// (v) usa-se um determinado dia para calcular o total de vendas da loja nesse dia; 
// (vi) calcula-se o total ao final do mês; e 
// (vii) usa-se um valor de venda como prémio do mês para listar todos os vendedores que tiveram vendas iguais ou superiores ao valor indicado como prémio.


let Vendendores = []

function main() {
    
    let opc = 1

    while (1) {

        console.log('\nLOJA VENDE BARATO\n1 - Registar vendedor\n2 - Listar todos os vendedores\n3 - Ver um vendedor especifico\n4 - Conhecer total das vendas da loja\n5 - Listar vendedor(es) premiado(s)\n6 - Sair')
        opc = prompt('Opção: ')

        switch (opc) {
            case '1':
                newVendedor()
                break;

            case '2':
                listVendedor()
                break;

            case '3':
                verEspecifico()
                break;

            case '4':
                TotalVendas()
                break;

            case '5':
                Premeado()
                break;

            case '6':
                return;   

            default:
                return;
        }
    }
}

main()

// registrar vendedor
function newVendedor() {
    let nome = prompt('Nome: ')
    let Numerovendas = prompt('Vendas: ')
    let obj = {Nome: nome, Vendas: vendas = []}
    vendas.push(Numerovendas)
    Vendendores.push(obj)
    return;
}

function listVendedor() {
    console.log(Vendendores)
}

function verEspecifico() {
    let escolha = prompt('Qual pretende ver? ')
    for (let i = 0; i < Vendendores.length; i++) {

        if (Vendendores[i].Nome == escolha) {
            
            console.log(Vendendores[i])
        }} 
}

function TotalVendas() {
    let total = 0
    for (let i = 0; i < Vendendores.length; i++) {
        total = +(total) + +(Vendendores[i].Vendas)
    }
    console.log('Total de vendas é: ' + total)
}

function Premeado() {

    Vendendores.sort(function(a,b) {
        if(a.Vendas < b.Vendas){
            return true;
        } else { return -1 }
    })
    console.log(Vendendores)
}

