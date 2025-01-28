var moduloFuncoes = require('./modulo/funcoes.js')
var readline = require('readline')

var entradadedados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

entradadedados.question('Insira a tabuada inicial a ser calculada:', function(tabuada1){

    entradadedados.question('Insira a tabuada final a ser calculada:', function(tabuada2){

        entradadedados.question('Insira o contador inicial:', function(contador1){

            entradadedados.question('Insira o contador final:', function(contador2){
                let tabuInicial = tabuada1
                let tabufinal = tabuada2
                let contInicial = contador1
                let contFinal = contador2 

                if(!moduloFuncoes.validarTabu(tabuInicial,tabufinal, contInicial, contFinal))
                    console.log('Não foi possivel processar a solicitação.')
                
            })
        })
    })
})