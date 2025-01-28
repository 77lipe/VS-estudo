/****************************************
 * Objetivos: conhecer os primeiros comandos do Node.js
 * Data: 31/07
 * Autor: Felipe
 * Versão: 1.0
 ***************************************/

//Permite exibir uma mensagem no terminal
console.log("Exercício 1 - Node.JS")

/*
 Criação de variaveis
 var -> permite criar variaveis de escopo global na aplicação
        (metodo tradicional desde decada de 90) 

   let -> permite criar uma variavel de escopo local
        (onde ira funcionar somente dentro daquele bloco)

 const -> permite criar espaço em memória de conteudos que não sofrem mudanças durante o projeto 
*/

var nome = "Flamengo"

//typeof -> permite identificar o tipo de dados de uma variável    
        //(String, Number, Boolean, Object) 
console.log(typeof(nome))

//Concatenação de conteúdos
console.log ("O conteudo da varável é: " + nome)


var valor1 = "10"
var valor2 = "20"

/*
    parseInt() -> permite converter uma string para número inteiro
    parseFloat() -> permite converter uma string para número real ou inteiro
    Number -> permite converter uma string para número real ou inteiro (atual)
*/

var resultado = Number(valor1) + Number(valor2)

//Concatenação tradicional
console.log("O resultado da soma é:" + resultado)
//Concatenação resduzida
console.log(`O resultado da soma é: ${resultado}`)