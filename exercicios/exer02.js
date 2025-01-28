var moduloFuncoes = require('./modulo/funcoes.js')
var readline = require('readline')

var entradadedados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

    entradadedados.question('Insira a primeira nota do aluno: ', function(valor1){
        
        entradadedados.question('Insira a segunda nota do aluno: ', function(valor2){
       
            
            entradadedados.question('Insira a terceira nota do aluno: ', function(valor3){
                
                entradadedados.question('Insira a quarta nota do aluno: ', function(valor4){
                    let nota1 = valor1
                    let nota2 = valor2
                    let nota3 = valor3
                    let nota4 = valor4
                
                    entradadedados.question('Insira o gênero do professor: [MASC] ou [FEM]', function(sexoprofessor){
                        let generoprofessor = String (sexoprofessor)

                        entradadedados.question('Insira o gênero do aluno: [MASC] ou [FEM]', function(sexoaluno){
                            let generoaluno = String (sexoaluno)
    
                            
                        })
                    })
                
                })
           
            })
        
        })
       
    })