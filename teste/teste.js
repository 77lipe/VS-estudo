const getAlunosStatus = function (nomeCurso, statusDisciplina) {
    let curso = String(nomeCurso).toUpperCase()
    let status = String(statusDisciplina).toUpperCase()
    let alunosFiltrados = []

    modulos_alunos.alunos.forEach(function (item) {
        item.curso.forEach(function (cursoItem) {
            if (String(cursoItem.sigla).toUpperCase() === curso) {
                
                let disciplinas = []


            cursoItem.disciplinas.forEach(function (item) {
                if (String(disciplinas.status).toUpperCase() === status) {
                    disciplinas.push(item)
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

console.log(getAlunosStatus('ds', 'aprovado'))