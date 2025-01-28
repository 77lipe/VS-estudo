/*************************************************************************************************
 * Objetivo: Desafio 4 - Array e JSON
 * Data: 16/10/2024
 * Autor: Felipe
 * Versão: 1.0
 ************************************************************************************************/

var Modulos = require('./estados_cidades.js')

const getListaDeEstados = function(){
    // let listaDeEstados2 = listaDeEstados
    let siglas = []
    let SiglasJSON = {}
    
    Modulos.listaDeEstados.estados.forEach(function(item){
        siglas.push(item.sigla)
    })

    SiglasJSON.uf = siglas
    SiglasJSON.quantidade = siglas.length

    return SiglasJSON

}


const getDadosEstado = function(nomeSigla){
    let siglas = String(nomeSigla).toUpperCase()
    let dadosJSON = {
        uf: undefined,
        descricao: undefined,
        capital:undefined,
        regiao: undefined
    }

    Modulos.listaDeEstados.estados.forEach(function(item){
        if(String(item.sigla).toUpperCase() == siglas){
        dadosJSON.uf = item.sigla
        dadosJSON.descricao = item.nome
        dadosJSON.capital = item.capital
        dadosJSON.regiao = item.regiao
        }
    })

    
    return dadosJSON
}

const getCapitalEstado = function(nomeSigla){
    let siglas = String(nomeSigla).toUpperCase()
    let dadosJSON = {
        uf: undefined,
        descricao: undefined,
        capital:undefined
    }

    Modulos.listaDeEstados.estados.forEach(function(item){
        if(String(item.sigla).toUpperCase() == siglas){
        dadosJSON.uf = item.sigla
        dadosJSON.descricao = item.nome
        dadosJSON.capital = item.capital
        }
    })

    
    return dadosJSON
}

const getEstadosRegiao = function(nomeRegiao){
    let regiao = String(nomeRegiao).toUpperCase()
    let regiaoJSON = {}
    let dadosARRAY = []
    


    Modulos.listaDeEstados.estados.forEach(function(item){
        if(String(item.regiao).toUpperCase() == regiao){
        regiaoJSON.regiao = item.regiao
        regiaoJSON.estados = dadosARRAY

        let dadosJSON = {}
        dadosJSON.uf = item.sigla
        dadosJSON.descricao = item.nome
        dadosARRAY.push(dadosJSON)        
        }
   
      
    })

    
    return regiaoJSON
}

const getCapitalPais = function(){
    let jsonFirst = {}
    let capitais = []
    jsonFirst.capitais = capitais

    Modulos.listaDeEstados.estados.forEach(function(item) {
        if(item.capital_pais != undefined){
            let jsonCapitais = {}
            jsonCapitais.capital_atual = item.capital_pais.capital
            jsonCapitais.uf = item.sigla
            jsonCapitais.descricao = item.nome
            jsonCapitais.regiao = item.regiao
            jsonCapitais.capital_pais_ano_inicio = item.capital_pais.ano_inicio
            jsonCapitais.capital_pais_ano_termino = item.capital_pais.ano_fim
            capitais.push(jsonCapitais)
        }
            
        return jsonFirst

    })
}


console.log(getCapitalPais())

console.log("Não Sufoque o Artista!")