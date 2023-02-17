let prompt = require('prompt-sync')();

// Uma certa fábrica produz dois tipos de motor Motor_1 e Motor_2, nos meses de janeiro a dezembro; o número de motores foi registado na seguinte tabela:
//              Motor_1	Motor_2
// janeiro	    30	    20
// fevereiro    5	    10
// março	    31  	21
// …	…	…	…	…	…
// dezembro	    18	    25


// 	        Custo	Lucro
// Motor_1	10	    3
// Motor_2	15	    2

// O setor de controle de vendas apresenta a tabela com os custos e os lucros (em mil euros) obtidos por cada motor.

// Sendo as tabelas anteriores consideradas como exemplos, elabore um algoritmo, segundo a notação gráfica, que introduza a produção mensal, 
// o custo e o lucro dos dois tipos de motores que a fábrica produz para os mercados interno e internacional, apresentando o custo e 
// o lucro em cada um dos meses e o lucro anual.


// observação: para saber o custo e o lucro nos meses de janeiro a dezembro, pode recorrer ao produto matricial das duas tabelas contendo valores introduzidos.

var arrayYear = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
var ano= []

for (let i = 0; i < arrayYear.length; i++) {
    
    var motor1 = +prompt('Venda de MOTOR 1 em '+arrayYear[i]+' :')
    var motor2 = +prompt('Venda de MOTOR 2 em '+arrayYear[i]+' :')
    obj = {Motor1: motor1, Motor2: motor2}
    ano.push(obj)
    console.log('\n')

}console.table(ano)


var anoFinal = []
var custo = 0
var lucro = 0
var custoTotal = 0
var lucroTotal = 0
for (let i = 0; i < arrayYear.length; i++) {

    custo = ano[i].Motor1*10 + ano[i].Motor2*15
    lucro = ano[i].Motor1*3 + ano[i].Motor2*2
    obj = {Custo: custo, Lucro: lucro}
    anoFinal.push(obj)
    custoTotal = custoTotal + anoFinal[i].Custo
    lucroTotal = lucroTotal + anoFinal[i].Lucro
}



console.table(anoFinal)
console.log('Custo Total: ',custoTotal,'\nLucro Total: ',lucroTotal)