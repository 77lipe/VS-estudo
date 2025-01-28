/*************************************************************************************************
 * Objetivo: Manipular ebtrada e saida de dados com interaçã do usuário
 * Data: 31/07
 * Autor: Felipe
 * Versão: 1.0
 ************************************************************************************************/

//Import da biblioteca que permite a interação de entrada de dados
    //pelo usuario no TERMINAL
var readline = require('readline')

//Cria um objeto de interface de digitação para entrada de dados pelo usuário no TERMINAL
var entradadedados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

//Através do objeto entradadedados estamos utilizando o metodo question para escrever
//uma mensagem para o usuário, e através da função de CALL BACK do mestodo question
//conseguimos obter o valor digitado pelo usuário
entradadedados.question('Digite seu nome:', function(nome){
    var nomeusuario = nome

    //console.log('o nome do usuário é:' + nome )

    entradadedados.question('Digite seu email: ', function(email){
        var emailusuario = email

        //console.log('O email do usuário ' + nome + ' é ' + email)
        //console.log(`O email do usuário  + ${nome} + ' é ' + ${email}`)
        entradadedados.question('Digite o nome do seu curso: ', function(curso){
            var cursousuario = curso
            
            console.log(`O nome do usuario é ${nome}  seu email é ${email}  seu curso é ${curso}`)

            //fechar o objeto de entrada de dados no terminal
            entradadedados.close()

        })
    })

   
})
