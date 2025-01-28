/*********************************************************************************
 * Objetivo: API para retornar dados de estados e cidades do Brasil
 * Data: 30/10/2024
 * Autor: Felipe
 * Versão: 1.0
 *********************************************************************************/

/* 
    Para criar uma API devemos instalar:
        express         - npm install express --save        (Serve para criar a API)
        cors            - npm install cors --save           (Serve para as permissões da API)
        body-parser     - npm install body-parser --save    (Serve para a API receber dados na requisiçõa)
*/


//import das bibliotecas
const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

//inicia a utilização do express
const app = express()

//response  - Significa a resposta da API
//request   - Significa a chegada de dado na API

app.use((request, response, next) =>{
    //Permissão de onde virão as requisições na API 
    //(* -> fica liberada para qualquer máquina ou colocar o IP da máquina que vai realixar as requisições)
    response.header('Access-Control-Allow-Origin', '*')

    //Permisão de quais metodos a API irá responder
    response.header('Access-Control-Allow-Methods', 'GET')
    //Métodos do http
    //  GET       - pegar dados da API
    //  POST      - adicionar/insesir novos dados na API
    //  PUT       - alterar dados existentes na API
    //  DELETE    - apagar item existente na API


    app.use(cors()) //Aplica as restrições no CORS da requisição

    next()
})

// EndPoint para retornar todos os estados
app.get('/v1/estados-cidade/lista-siglas-estados', cors(), async function(request, response) {
    //import do arquivo de funções
    //let estadosCidades = require('./modulo/funcoes.js')

    //chama a funçã que retorna os estados
    let siglaestado = estadosCidades.getListaDeEstados()


    //Resposta da API com JSON e o status code
    response.status(200)
    response.json(siglaestado)
})

const estadosCidades = require('./modulo/funcoes.js')

// EndPoint que retorna os dados de um estado filtrando pela sigla
app.get('/v1/estados-cidade/estado/:sigla', cors(), async function(request, response){
    //Recebe o conteudo da variavel sigla que será enviada na URL da requisição 
    let uf = request.params.sigla

    //Chama a funçõa que irá receber a sigla e retornar os dados referente ao estado
    let dados = estadosCidades.getDadosEstado(uf)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado um estado'})
    }
}) 

//Executa a API e faz com que fique aguardando novas requisições 
app.listen('8080', function(){
    console.log('API funcionando e aguardando requisições...')
})