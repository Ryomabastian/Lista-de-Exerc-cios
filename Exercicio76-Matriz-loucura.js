let prompt = require('prompt-sync')();

// Supondo um dado vetor matricial que apresente em cada linha o total de produtos vendidos ao mês por uma loja que trabalha com cinco tipos diferentes de produtos, 
// elabore um algoritmo que aceite esse total e, no final, apresente o total de produtos vendidos em cada mês e o total de vendas por ano por produto.

var arrayYear = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
var products = ['CADERNO', 'LAPIS', 'MOCHILA']
var array = []
var totalAno = 0
var totalMes = []
for (let i = 0; i < arrayYear.length; i++) {

        var caderno = +prompt('Vendas de CADERNO no mês de '+arrayYear[i]+': '  )
        var lapis = +prompt('Vendas de LAPIS no mês de '+arrayYear[i]+': '  )
        var mochila = +prompt('Vendas de MOCHILA no mês de '+arrayYear[i]+': '  )
        var obj = {Caderno: caderno, Lapis: lapis, Mochila: mochila}
        array[i] = obj
        totalAno = totalAno + caderno + lapis + mochila
        totalMes[i] = {Total: caderno + lapis + mochila}
        console.log('\n')
    }

console.log('Venda total: '+totalAno)
console.table(totalMes)
console.table(array)