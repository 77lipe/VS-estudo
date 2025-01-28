/*************************************************************************************************
 * Objetivo: Exerxício para calculo de médias escolas, com a utilizaçõa de tratamento de 
 * de dados e conversão de dados com estruturas consicionais
 * Data: 07/08/2024
 * Autor: Felipe
 * Versão: 1.0
 ************************************************************************************************/

//Import da biblioteca para entrada de dados
var readline = require('readline')

//Cria o objeto de entrada de dados via teclado no terminal
var entradadedados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

    //Entrada do nome do aluno 
    entradadedados.question("Digite o nome do aluno: ", function(aluno){
        let nomeAluno = aluno

        entradadedados.question("Digite o nome do curso: ", function(curso){
            let nomeCurso = curso

            entradadedados.question("Digite a nota1: ", function(valor1){
                let nota1 = valor1

                entradadedados.question("Digite a nota2: ", function(valor2){
                    let nota2 = valor2

                    entradadedados.question("Digite a nota3: ", function(valor3){
                        let nota3 = valor3

                        entradadedados.question("Digite a nota4: ", function(valor4){
                            let nota4 = valor4
                            let resultado 
                            let situação
                            /* Operadores de comparação 
                                == Verifica a igualdade entre dois conteúdos 
                                <= Verificar se o valor é menor ou igual
                                >= Verificar se o valor é maior ou igual
                                <  Verifica se o valor é menor 
                                >  Verifica se o valo é maior
                                != Verifica as difereças entre dois conteudos
                                === Verificar a igualdade entre dois conteudos e verificar os tipos de dados

                                ==! Verificar conteúdos iguais e tipos de dados diferentes
                                !== Verificar conteúdos diferentes e tipos de dados iguais 
                                !=! Verificar conteúdos diferentes e tipos de dados diferentes 
                            */

                            /* Operadores Lógicos
                                E   &&  AND 
                                OU  ||  OR
                                NÃO  |   NOT
                            */
                            
                            if(nomeAluno == '' || nomeCurso == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                                console.log("ERRO: É obrigatório o preenchimento de todas as entradas de dados")
                            }else{
                                
                                //Tratamento para validar se o conteudo das variaveis 
                                // possui alguma letra ou se são numericas
                                //IsNaN() -> FUNÇÃO PRARA VERIFICAR A OCORRENCIA DE CARACTERS NÃO NUMERICOS
                                if (isNaN(nota1) == true || isNaN(nota2) == true || isNaN(nota3) == true || isNaN(nota4) == true){
                                    console.log("ERRO: É obrigatório a entrada de valores números nas notas. ")
                                }else{
                                    if(nota1 < 0 || nota1 >10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10){
                                        console.log('ERRO: É obrigatório a entreda de valores entre 0 e 10. ')
                                    }else{
                                        resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
                                        console.log(resultado)
                                    }
                                }if(resultado >= 7 /*&& resultado <= 10*/){
                                   situação = "APROVADO!! "
                                }if(resultado >= 5 && resultado <= 6.9){ 
                                    situação = "RECUPERAÇÃO :( "
                                }
                                if(resultado <=4.9 && resultado >= 0){
                                    situação = 'REPROVADO!!'

                                }
                                console.log("***********Boletim do Aluno************ ")
                                console.log(`*Aluno: ${nomeAluno}`)
                                console.log(`*Curs: ${nomeCurso}`)
                                console.log(`*Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}`)
                                console.log(`*Média final: ${resultado}`)
                                console.log(`*Situação: ${situação}`)
                                console.log("*************************************** ")
                        


                            }
                            
                            
                        })
                    })
                })
            })
        })
    })