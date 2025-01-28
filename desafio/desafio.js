var readline = require('readline')

var entradadedados = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

entradadedados.question('Insira seu capital inicial:', function(p_capital){
    var capitalusuario = p_capital

    //console.log( `O capital do usuário é ${capital}`)

    entradadedados.question('Insira a taxa de juros anual em porcentagem: ', function(r_anual){
        var jurosanual = r_anual

        //console.log(`O capital é ${capital} e o juros anual é ${anual}`)

        entradadedados.question("insira o número de vezes que os juros são compostos por ano: ", function(n_juros){
            var juroscompostos = n_juros 

            entradadedados.question("insira o tempo em anos (t): ", function(t_tempo){
                var tempo = t_tempo

                var conta01 = Number (jurosanual) / Number (juroscompostos) + 1
                //console.log(`o resultado da conta é : ${conta01}`)
                var conta02 = Number (juroscompostos) * Number (tempo)
                //console.log(`o resultado da conta é : ${conta02}`)
                var conta03 = Number (conta01) ** Number (conta02)
                //console.log(`o resultado da conta é : ${conta03}`)
                var resultado = Number (conta03) * Number (capitalusuario)
                console.log(`o resultado da conta é : ${resultado}`)
            })
        })
    })
    
})