/****************************************
 * Objetivos: desenvolver um programa que calcule o IMC
 * data: 11/09/24
 * Autor: Felipe
 * Versão: 1.0
 ***************************************/
var moduloFuncoes = require('./modulo/funcoes.js')
var readline = require('readline')

var entradadedados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

entradadedados.question('Insira o peso em KG:', function(pesokg){
    let peso = pesokg

    entradadedados.question('Insira a altura: ', function(alturaquestion){
        let altura = alturaquestion

        
        if(!moduloFuncoes.validarDados(peso,altura)){

        }else{
            calculo = moduloFuncoes.calculoIMC(peso,altura)
        }

        
    })
})

