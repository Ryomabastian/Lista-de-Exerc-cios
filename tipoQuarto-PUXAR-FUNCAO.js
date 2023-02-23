const getPriceQuarto = (tipo) => {
    let obj = {
        solteiro: 50,
        dupla: 80,
        suite: 100,
        master: 200
    }
    return obj[tipo]
}

const getPriceFood = (tipo, precoAtual) => {
    
    let obj = {
        cerveja: 10,
        suco: 8,
        agua: 5,
        pizza: 12,
        hamburguer: 15,
        nada: 0
    }

    return obj[tipo]+precoAtual
}


module.exports = {
    getPriceQuarto,
    getPriceFood
}

