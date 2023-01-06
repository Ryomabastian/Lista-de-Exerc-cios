// Elabore um algoritmo, segundo a notação gráfica, que aceite um caráter do contexto do alfabeto latino 
// para apresentar se é vogal ou consoante e se é maiúscula ou minúscula.

//VIDEO HTML: https://www.youtube.com/watch?v=-nieDyRhCHA
// VIDEO QUE AJUDOU PRA CARALHO: https://www.youtube.com/watch?v=h9tAV6JggOc

var prompt = require('prompt-sync')();
var letra = prompt('Letra: ')

let minuscoluzando = letra.toLowerCase();


    if(letra === minuscoluzando){
        console.log('minusculo')
    }   else { 
        console.log('MAIUSCULO')}

    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        console.log('vogal')
    } else { console.log('consoante')};
    










