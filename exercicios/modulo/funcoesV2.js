
//Validação de entrada de dados
function validarDados (numeroinical, numerofinal){
    let numeroI = numeroinical
    let numeroF = numerofinal
    let status = true

    //Validação de entrada em branco
   if(numeroI == '' || numeroF == ''){
        console.log('ERRO: Dados obrigatórios na digitação')
        status = false
    //Validação de entrada de caracteres invalidos
    }else if(isNaN(numeroI) || isNaN(numeroF)){
        console.log('ERRO: Não é permitido a entrada de letras')
        status = false
    }
    return status

}

//calculo do IMC
function calculoIMC (pesokg, alturavalor){
    let peso = pesokg
    let altura = alturavalor
    let status = true
    let calculo = peso / (altura ** 2)

    if(calculo < 18.5){
        console.log(`O valor do IMC é: ${calculo.toFixed(2)}, sua clssificação é: Abaixo do peso`)
    }else if(calculo >= 18.5 && calculo <= 24.9){
        console.log(`O valor do IMC é: ${calculo.toFixed(2)}, sua clssificação é: Peso normal`)
    }else if(calculo >= 25 && calculo <= 29.9){
        console.log(`O valor do IMC é: ${calculo.toFixed(2)}, sua clssificação é: Acima do peso (sobrepeso)`)
    }else if(calculo >= 30 && calculo <= 34.9){
        console.log(`O valor do IMC é: ${calculo.toFixed(2)}, sua clssificação é: Obesidade I`)
    }else if(calculo >= 35 && calculo <= 39.9){
        console.log(`O valor do IMC é: ${calculo.toFixed(2)}, sua clssificação é: Obesidade II`)
    }else if (calculo >= 40){
        console.log(`O valor do IMC é: ${calculo.toFixed(2)}, sua clssificação é: Obesidade III`)
    }
    return status
}



/*--------------------------------------------------------------------------------------------------*/

function validarMedia (valor1, valor2, valor3, valor4){
    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)
    let status = true

    //Validação de entrada em branco
   if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
        console.log('ERRO: Dados obrigatórios na digitação')
        status = false
    //Validação de entrada de caracteres invalidos
    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        console.log('ERRO: Não é permitido a entrada de letras')
        status = false
    }
    return status

}

function sexo(sexo, pessoa){
    if(pessoa === 'Aluno'){
        return sexo == 'M' ? 'Aluno' : 'Aluna'
    }else if(pessoa === 'Professor'){
        return sexo === 'M' ? 'Professor' : 'Professora'
    }
}

console.log(sexo('F','Aluno'))

//calculo da média
function calculoMedia (valor1, valor2, valor3, valor4){
    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4
    let calculo
    let status = true

    if(nota1 < 100 && nota1 > 0 , nota2 < 100 && nota2 > 0 , nota3 < 100 && nota3 > 0 , nota4 < 100 && nota4 > 0 ){
        calculo = (nota1 + nota2 + nota3 + nota4) / 4
        if (calculo >= 70){
            console.log ("APROVADO!!")
        } else if(calculo < 50){
            console.log ("REPROVADO :( ")
        }else if (calculo >=50 && calculo <= 69){
            console.log ("O aluno está em exame")
        }

    }
    return status
}


//função que validará a quinta nota (caso o aluno esteja em exame)
function validarExame(nota5){
    quintaNota = nota5
    let status = true

    quintaNota = Number(quintaNotaStr)

  
    if( quintaNota == ''){
        console.log('ERRO: É obrigatório o preenchimento dos dados')
        status = false
 
    }else if( isNaN(quintaNota)){
        console.log('ERRO: Não é permitido a entrada de letras como nota')
        status = false
  
    }else if(quintaNota < 0 || quintaNota > 100 ){
        console.log('ERRO: É obrigatório que as notas devem estar entre 0100  e !!!')
        status = false
    }

    return status

}

function calculoMedia5 (valor5,mediaI){
    let nota5 = valor5
    let mediaAnterior = mediaI
    let mediaNova
    let status = ''

    if(validarExame(nota5)){
        mediaNova = Number(nota5 + mediaAnterior) / 2
        
        if(mediaNova > 60){
            status = 'APROVADO NO EXAME!!'
        }else{
            status = 'REPROVADO NO EXAME!!'
        }
    } 
    

    }

/*-----------------------------------------------------------------------------------------*/



//função para a criação das tabuadas
function tabuada(primeiraTabuada,ultimaTabuada,contadorInicial,contadorFinal){
    let tabuadaInicial = Number(primeiraTabuada)
    let tabuadaFinal = Number(ultimaTabuada)
    let contInicial = Number(contadorInicial)
    let contFinal = Number(contadorFinal)
    let status = true
    let resultado 

   
    if(validarTabu(tabuadaInicial,tabuadaFinal,contInicial,contFinal)){

        // estrutura de repetição
        while(tabuadaInicial <= tabuadaFinal){

            console.log(`TABUADA DO --> ${tabuadaInicial}`)
            
            while(contInicial <= contFinal){
                //status = true
                resultado = Number(tabuadaInicial) * Number(contInicial)
                console.log(`${tabuadaInicial} x ${contInicial} = ${resultado}`)
                contInicial += 1
            }
    
            contInicial = contadorInicial
            console.log('---------------------------------------')
            tabuadaInicial += 1
        }

    }
    return status
}

//console.log(fazerTabuada(2,4,2,10))

function validarTabu (valor1, valor2, valor3, valor4){
    let tabuada1 = valor1
    let tabuada2 = valor2
    let contador1 = valor3
    let contador2 = valor4
    let status = true
    
    if (tabuada1 == '' || tabuada2 == ''){  
        console.log ('ERRO: É obrigatório o preenchimento de todos os dados!!')
        status = false
    }if (tabuada1 < 2 || tabuada2 > 100 || tabuada1 == tabuada2){
        console.log ('ERRO: Não foi possivel realizar o calculo')
        status = false
    }if (contador1 < 1 || contador2 > 50 || contador1 == contador2){ 
        console.log ('ERRO: Não foi possivel realizar o calculo')
        status = false
    }
    return status
}


/*-------------------------------------------------------------------------------------------------------------------------------------------*/


// função de calculo do fatorial
function calculoFatorial(valorRecebido){
    let fatorial = valorRecebido
    let contador = fatorial
    let resultado = String(fatorial)
    let numeroInicial = 1


    if(validarDados(fatorial)){

       
        while(contador >= 2){
            numeroInicial *= contador
            contador -= 1
            resultado = resultado + ' x ' + contador  
    
        }
    }

    return resultado + ' = ' + numeroInicial 
}



//Função feita para validar as entradas recebidas
function validarDadosFATOR(valorRecebido){
    let fatorial = valorRecebido
    let status = true

   
    if( fatorial === '' ){
        console.log('ERRO: É obrigatório o preenchimento dos dados')
        status = false
   
    }else if( isNaN(fatorial)){
        console.log('ERRO: Não é permitido a entrada de letras')
        status = false
    }  
    return status
}


/*----------------------------------------------------------------------------------------------------------------------*/



module.exports = {
    calculoIMC,
    calculoMedia,    
    sexo,
    calculoMedia5,
    tabuada,
    calculoFatorial

}

module.exports = {
    validarDados,
    validarDadosFATOR,
    validarExame,
    validarMedia,
    validarTabu
}