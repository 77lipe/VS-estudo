/*************************************************************************************************
 * Objetivo: Desafio final - Aplicação de API 
 * Data: 27/11/2024
 * Autor: Felipe
 * Versão: 1.0
 ************************************************************************************************/

var modulos_alunos = require('./alunos')
var modulos_cursos = require('./cursos')

const getListaDeCursos = function(){
    let cursos = []
    let CursosJSON = {}
    
    modulos_cursos.cursos.forEach(function(item){
        cursos.push(item)
    })

    CursosJSON.cursos = cursos

    return CursosJSON
}

const getListaDeAlunos = function(){
    let alunos = []
    let alunosJSON = {}
    
    modulos_alunos.alunos.forEach(function(item){
        alunos.push(item)
    })
    
    alunosJSON.alunos = alunos

    return alunosJSON
}

const getAlunoMatricula = function(numMatricula){
    let matricula = numMatricula
    let aluno = []
    let alunoJSON = {}
    
    modulos_alunos.alunos.forEach(function(item){
        if(String(item.matricula).toUpperCase() == matricula){
            aluno.push(item)
        }
    })
    
    // alunoJSON.alunos = aluno

    return aluno
}

const getAlunosCurso = function(nomeCurso){
    let curso = String(nomeCurso).toUpperCase()
    let aluno = []
    let alunoJSON = {}
    
    modulos_alunos.alunos.forEach(function(item){
        if(String(item.curso[0].sigla).toUpperCase() == curso){
            aluno.push(item)

        }
    })
    
    // alunoJSON.alunos = aluno

    return aluno
}

const getStatusCurso = function(statusCurso){
    let status = String(statusCurso).toUpperCase()
    let aluno = []
    let alunoJSON = {}
    
    modulos_alunos.alunos.forEach(function(item){
        if(String(item.status).toUpperCase() == status){
            aluno.push(item)

        }
    })
    
    alunoJSON.alunos = aluno

    return alunoJSON
}

const getAlunosConclusao = function (nomeCurso, anoConclusao) {
    let curso = String(nomeCurso).toUpperCase()
    let ano = String(anoConclusao).toUpperCase()
    let alunosFiltrados = []

    modulos_alunos.alunos.forEach(function (item) {
        item.curso.forEach(function (cursoItem) {
            if (String(cursoItem.sigla).toUpperCase() === curso) {
                
            let ano_conclusao = []
        item.curso.forEach(function(conclusao){
            if (String(cursoItem.conclusao).toUpperCase() === ano)
                ano_conclusao.push(conclusao)

        })

        alunosFiltrados.push({
        nome: item.nome,
        curso: cursoItem.sigla,
        Ano_Conclusao: ano_conclusao
        })
                
        }
        })
    })

    return alunosFiltrados
}

const getAlunosStatus = function (nomeCurso, statusDisciplina) {
    let curso = String(nomeCurso).toUpperCase()
    let status = String(statusDisciplina).toUpperCase()
    let alunosFiltrados = []

    modulos_alunos.alunos.forEach(function (aluno) {
        aluno.curso.forEach(function (cursoItem) {
            if (String(cursoItem.sigla).toUpperCase() === curso) {

            let disciplinas = []

            cursoItem.disciplinas.forEach(function (disciplina) {
                if (String(disciplina.status).toUpperCase() === status) {
                    disciplinas.push(disciplina);
                }
                })
                
            alunosFiltrados.push({
            nome: aluno.nome,
            curso: cursoItem.sigla,
            disciplinas: disciplinas
            })
                
            }
        })
    })

    return alunosFiltrados
}


// console.log(getAlunosStatus('DS','aprovado'))
console.log('Não sufoque o artista!!')

module.exports = {
    getListaDeCursos,
    getListaDeAlunos,
    getAlunoMatricula,
    getAlunosCurso,
    getStatusCurso,
    getAlunosStatus,
    getAlunosConclusao
}