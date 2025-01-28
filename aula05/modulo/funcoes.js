/********************************************************
 * Objetivos:arquivo responsavel pela criaão de funções e utilização de estruturas de repetição 👍
 * Data: 04/09/2024
 * Autor: Felipe
 * Versão: 1.0
 ********************************************************/

//Metodo tradicional
function gerarSequenciaNumerica (numeroinical, numerofinal){
   let numeroI = numeroinical
   let numeroF = numerofinal
   let contador
   let status = false
   

    if(validarDados(numeroI, numeroF)){   
        contador = parseInt(numeroI)

        while(contador <= numeroF){
            status=true
            console.log(contador)
            //contador = contador + 1
            contador++
            //contador +=1
        }

   }
   return status
}

//Arrow function
const gerarNovaSequenciaNumerica = (numeroinical, numerofinal) => {
    let numeroI = numeroinical
    let numeroF = numerofinal
    let status = false

    if(validarDados(numeroI, numeroF)){
        for(let contador = parseInt(numeroI); contador <= parseInt(numeroF); (contador++)){
            console.log(contador)
            status =true
        }

    }
return status
}

//Função anônima
const validarDados = function(numeroinical, numerofinal){
    let numeroI = numeroinical
    let numeroF = numerofinal
    let status = true

       //Validação de entrada em branco
   if(numeroI == '' || numeroF == ''){
        console.log('ERRO: Dados obrigatórios na digitação')
        status = false
//Validação de entrada de caracteres invalidos
    }else if(isNaN(numeroI) || isNaN(numeroF)){
        console.log('ERRO: Não é peritido a entrada de letras')
        status = false
    }
    return status

}

//console.log(gerarNovaSequenciaNumerica('ass',8))

//console.log (gerarSequenciaNumerica('2','12'))

/*function calculoIMC (pesokg, alturavalor){
    let peso = pesokg
    let altura = alturavalor
    let calculo = peso / (altura ** 2)

    if (calculo > )

}*/

module.exports = {
    gerarSequenciaNumerica,
    gerarNovaSequenciaNumerica,
    validarDados
}