/*********************************************************************************
 * Objetivo: API para retornar dados de estados e cidades do Brasil
 * Data: 04/12/2024
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
const cursoTecnico = require('./modulo/funcoes.js')

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

// 1°API
app.get('/v1/lion-school/cursos', cors(), async function(request, response) {
    //import do arquivo de funções
    //let estadosCidades = require('./modulo/funcoes.js')

    //chama a função que retorna os estados
    let listaCurso = cursoTecnico.getListaDeCursos()


    //Resposta da API com JSON e o status code
    response.status(200)
    response.json(listaCurso)

})


//2°API
app.get('/v1/lion-school/alunos', cors(), async function(request, response) {
    //import do arquivo de funções
    //let estadosCidades = require('./modulo/funcoes.js')

    //chama a função que retorna os estados
    let listaAlunos = cursoTecnico.getListaDeAlunos()


    //Resposta da API com JSON e o status code
    response.status(200)
    response.json(listaAlunos)
    
})

//3°API
app.get('/v1/lion-school/alunos/:matricula', cors(), async function(request, response) {
    // Recebe o conteúdo do parâmetro 'matricula' enviado na URL da requisição
    let matricula = request.params.matricula

    // Chama a função que irá receber a matrícula e retornar os dados do aluno
    let dados = cursoTecnico.getAlunoMatricula(matricula)

    if (dados) {
        response.status(200).json(dados)
    } else {
        response.status(404).json({ status: 404, message: 'Aluno não encontrado' })
    }
})

// 4°API
app.get('/v1/lion-school/alunos/cursos/:curso',cors(),async function (request, response){

    let curso = request.params.curso

     let dados = cursoTecnico.getAlunosCurso(curso)
     
     if(dados){
         response.status(200)
         response.json(dados)
     }else{
         response.status(404) 
         response.json({'status': 404, 'message': 'Curso não localizado.'})
     }
})

//5°API
app.get('/v1/lion-school/alunos/filtro/:status',cors(),async function (request, response){

    let status = request.params.status

     let dados = cursoTecnico.getStatusCurso(status)
     
     if(dados){
         response.status(200)
         response.json(dados)
     }else{
         response.status(404) 
         response.json({'status': 404, 'message': 'Status não localizado.'})
     }
})

//6°API
app.get('/v1/lion-school/alunos/filtro/:curso/:status',cors(),async function (request, response) {
    
    let curso = request.query.curso
    let status = request.query.status

    let dados = cursoTecnico.getAlunosStatus(curso, status)
     
     if(dados){
         response.status(200)
         response.json(dados)
     }else{
         response.status(404) 
         response.json({'status': 404, 'message': 'Status não localizado.'})
     }
})


//7°API
app.get('/v1/lion-school/alunos/filtro/:curso/:ano',cors(),async function (request, response) {
    
    let curso = request.params.curso
    let ano = request.params.ano

    let dados = cursoTecnico.getAlunosConclusao(curso, ano)
     
     if(dados){
         response.status(200)
         response.json(dados)
     }else{
         response.status(404) 
         response.json({'status': 404, 'message': 'Status não localizado.'})
     }
})


//Executa a API e faz com que fique aguardando novas requisições 
app.listen('8080', function(){
    console.log('API funcionando e aguardando requisições...')
})