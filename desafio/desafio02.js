var readline = require('readline')

var entradadedados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})
 
    entradadedados.question("Digite o primeiro número: ", function(numero1){
        let n1 = Number (numero1)
        
        entradadedados.question("Digite o segundo número: ", function(numero2){
            let n2 = Number (numero2)

            entradadedados.question("Digite qual operação matemática ira usar: ", function(operação){
                let op = operação

                let matemática = operação
                let soma
                let subtração
                let divisão
                let multiplcação
                let calculo

                if (n1 == '' || n2 == ''){
                  console.log("ERRO: É obrigatório o preenchimento de todas as entradas de dados")
                
                }if (isNaN(n1) == true || isNaN(n2) == true){
                    console.log("ERRO: É obrigatório a entrada de valores números. ")
                
                }if(op == ''){
                    console.log("ERRO: É obrigatório o preenchimento de todas as entradas de dados")
                
                }if(matemática == "soma"){
                    soma = n1 + n2
                    console.log(`O resultado da soma é: ${soma.toFixed(2)}`)

                }if(matemática == "subtração"){
                    subtração = n1 - n2
                    
                    console.log(`O resultado da subtração é: ${subtração.toFixed(2)}`)
                
                }if(matemática == "multiplicação"){
                    multiplcação = n1 * n2
                    console.log(`O resultado da multiplicação é: ${multiplcação.toFixed(2)}`)
                
                }if(matemática=="divisão"){
                    if(n1 == 0 || n2 == 0)
                        console.log("ERRO: Não é possível realizar a operação")
                   }if(n1 != 0 && n2 != 0){
                    divisão = n1/n2
                    console.log(`O resultado da divisão é: ${divisão.toFixed(2)}`)
                   }
                //     n1 === 0 || n2 === 0
                //     console.log("ERRO: Não é possível realizar a divisão com um número '0' ")
                // }else{
                //     divisão = n1/n2
                //     console.log(`O resltado da divisão é: ${divisão}`)
                // }
                


            })

        })        
    })


   
