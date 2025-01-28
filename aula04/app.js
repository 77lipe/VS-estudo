/**************************************************************************************************
 * Objetivos: ver o profesor fazer a atividade/  
 * Projeto para realizar calculos matemáticos, utilizando funções locais ou em arquivos externos
 * Data: 28/08
 * Autor: Felipe
 * Versão: 1.0
 **************************************************************************************************/

var calculos = require('./modulo/calculos.js')
var readline = require('readline')

var entradadedados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})
    //entrada do valor 1
    entradadedados.question('Digite o valor 1: ', function(valor1){
        let numero1 = String(valor1).replace(',' , '.')
        //replace -> permite localizar um carcterer e subtituir por outro 
        //String() -> converte uma variavel para o tipo de dados string

        //entrada do valor 2
        entradadedados.question('Digite o valor 2:', function(valor2){
            let numero2 = String(valor2).replace(',' , '.')

            //entrada do tipo de calculo
            entradadedados.question('Escolha uma operaão matemática: [SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR]: ', function(operacao){
                let tipoCalculo = operacao
                let resultado

                //Validação de entrada de dados vazia
                if(numero1 == '' || numero2 == '' || tipoCalculo == ''){
                    console.log('ERRO: É obrigatório a entrada de todos os valores e a operação')
                //Validação de entrada de dados numéricos
                }else if(isNaN(numero1)|| isNaN(numero2)){
                    console.log('ERRO: É obrigatório somente a entrada de dados numéricos ')
                }else{

                    resultado = calculos.calculadora(numero1, numero2, tipoCalculo)

                    //Tratamento para verificar se a variavel resultado foi utilizada nos calculos 
                    if(resultado){
                        console.log(resultado)
                    }
                }   

            })
        })
    })