/****************************************
 * Objetivos: aplicar funções
 * Data: 04/09
 * Autor: Felipe
 * Versão: 1.0
 ***************************************/

var moduloFuncoes = require('./modulo/funcoes.js')
var readline = require('readline')

var entradadedados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

entradadedados.question('Digite o valor inicial:', function(numero1){
    let valor1 = numero1

    entradadedados.question('Digite o valor final:', function(numero2){
        let valor2 = numero2
        if(!moduloFuncoes.gerarNovaSequenciaNumerica(valor1,valor2))
            console.log('Não foi possivel processar a solicitação.')
    })
})