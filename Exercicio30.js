// //Elabore um algoritmo, segundo a notação gráfica, que determine o valor de y da seguinte função:
// 1, sse y <= 1
// 2, sse 1 < y <=2
// y2, sse 2 < y <=3 
// y3, sse y > 3

var prompt = require('prompt-sync')();

let y = parseFloat(prompt('numero: '));

if(y <= 1){
    return console.log('1')
}
if(y > 1 && y <= 2){
    return console.log('2')
}
if(y > 2 && y <= 3){
    return console.log(y*2)
}
if(y > 3){
    return console.log(y*3)
}


