/****************************************************************
 * Objetivo: Trabalhar com ARRAY e JSON
 * Data: 25/05/2024 
 * Autor: Felipe
 * Versão: 1.0
*****************************************************************/

/***
 * [ ] <-- ARRAY (É uma lista de dados)
 * { } <-- JSON (É uma forma de organizar dados)
*/

const comandosasicos = function(){

    //Cria um objeto do tipo ARRAY
    //primeira forma de criar um array
    let listaDeNomes = ['Felipe', 'Neymar', 'Veigh', 'Cabelinho', 11, true]

    //Imprime o objeto ARRAY em lista
    console.log(listaDeNomes)

    //imprime o conteudo específico de um ARRAY
    console.log(listaDeNomes[1])
    console.log(listaDeNomes[3])
    
    //Imprime o objeto ARRAY em tabela
    console.table(listaDeNomes)

    //Verifica o tipo de dados de um indice
    console.log(typeof(listaDeNomes[5]))
    console.log(typeof(listaDeNomes))

    //segunda forma de criar um ARRAY
    let listaDeClientes = []
    listaDeClientes[0] = 'Neymar da Silva'
    listaDeClientes[1] = 'Felipe dos Santos'
    listaDeClientes[3] = 'MC Gorila'

    listaDeClientes[1] = 'MC Daleste'

    console.log(listaDeClientes)

    //terceira forma de criar um objeto do tipo ARRAY
    let listaDeProdutos = []

    //adicionando elementos ao ARRAY
    listaDeProdutos.push('Teclado')
    listaDeProdutos.push('Mouse')
    listaDeProdutos.push('Gabinete')
    listaDeProdutos.push('Monitor')
    listaDeProdutos.push('Memória' , 'HD', 'Placa Mãe')

    console.table(listaDeProdutos)

    listaDeProdutos.push('Caixa de Som')
    console.table(listaDeProdutos)

    //permite adicionar um novo item no inicio do ARRAY 
    listaDeProdutos.unshift('Imprensora')
    console.table(listaDeProdutos)
    console.table([listaDeProdutos])
    
    //perite remover o ultimo elemento do ARRAY
    listaDeProdutos.pop()
    console.table(listaDeProdutos)

    //permite remover o primeiro elemento do ARRAY
    listaDeProdutos.shift()
    console.table(listaDeProdutos)

    //Permite remover um indice qualquer da lista
    //splice(3,1) -> Voce deve indicar o indice e a qntd de itens a serem removidos 
    listaDeProdutos.splice(3,1)
    console.table(listaDeProdutos)

    console.log(listaDeProdutos.length)
    
}

const percorrerArray = function(){
    let nomesDealunos = ['felipe', 'Neymar', 'cabelinho','kauan','pedro','PDidy','igor','giovanna','beatriz',]

let contador = 0
//nomesDealunos.length -> retorna a quantidade de elemento de um array

console.log('Exemplo do While')
while (contador < nomesDealunos.length){
    console.log(nomesDealunos[contador])
    contador +=1
}

console.log('*********************')

console.log('Exemplo do FOR')
//é tudo resolvido dentro do FOR
for(let contador = 0; contador < nomesDealunos.length; contador++){
    console.log(nomesDealunos[contador])
}

console.log('*********************')

console.log('Exemplo fo ForEach')
nomesDealunos.forEach(function(item){
    console.log(item)
})

console.log('*********************')

console.log(nomesDealunos[3])
}

const filtrarProdutos = function(nomeProduto){
    let produto = String(nomeProduto).toUpperCase()
    let status = false
    let listaDeProdutos = []
    listaDeProdutos.push(   'Teclado',
                            'Mouse',
                            'Caixa de som', 
                            'Impressora', 
                            'Monitor', 
                            'Gabinete', 
                            'Memória', 
                            'HD', 
                            'SSD', 
                            'Placa de Vídeo', 
                            'Placa Mãe'
                        )


listaDeProdutos.forEach(function(item){
    if(String(item).toUpperCase() == produto){
        status = true
    }
})


// include() -> Permite verificar se existe um conteudo dentro do array (Retorna True ou False)

listaDeProdutos.forEach(function(item){
    if(console.log(String(item).toUpperCase().includes(produto)))
        status = true
})

//indexOf() -> Permite verificar se existe um conteudo dentro do array (Retorna 0 ou -1)
listaDeProdutos.forEach(function(item){
    console.log(String(item).toUpperCase().indexOf(produto) == 0)
})
return status
} 

const conceitoJSON = function(){
    let listaDeClientes = []


    //primeira forma de criar um objeto do tipo JSON
    //criando um objeto JSON
    let cliente = {nome: 'Neymar Junior', telefone: 1199955427, email: 'ney@gmail.com'}

    //Exibe todos os atributos do objeto JSON
    console.log(cliente)
    console.table(cliente)

     //Exibe apenas um atributo do objeto JSON
    console.log(cliente.nome)
    console.log(cliente.email)

    //Segunda forma de criar um objeto JSON
    let cliente2 = {}
    cliente2.nome = 'Felipe Vieira'
    cliente2.telefone = 1195788930
    cliente2.email = 'lipe@gmail.com'

    console.log(cliente2)

    //adiciona ao array os objetos do JSON
    listaDeClientes.push(cliente,cliente2)
    console.log(listaDeClientes)
    console.table(listaDeClientes)

    //Exibe os dados do Array referente a um indice, trazendo pelo atributo do JSON
    console.log(listaDeClientes[1].nome)

    //percorre o Array de cliente e retorna somento o nome dos clientes
    listaDeClientes.forEach(function(listaDeClientes){
        console.log(listaDeClientes.nome)
    })
}

const cadastroProdutos = function(){
    let marcas = []
    marcas.push(
            {nome: 'Dell',      telefone: 119955821,   email: 'dell@gmail.com'},
            {nome: 'Microsoft', telefone: 119955787,   email: 'compras.microsoft@gmail.com'},
            {nome: 'LG',        telefone: 119923494,   email: 'lg@gmail.com'},
            {nome: 'ASUS',      telefone: 119953431,   email: 'asus@gmail.com'}
        )

    let categorias = []
    categorias.push(
                    {nome: 'Hardware'},
                    {nome: 'Periféricos'},
                    {nome: 'Smart Home'},
                    {nome: 'Games'},
                    {nome: 'Computadores'},
                    {nome: 'Escritório'}
                )

    let cores = []
    cores.push(
                {nome: 'Preto',  hexadecimal: '#000000'},
                {nome: 'Branco', hexadecimal: '#ffffff'},
                {nome: 'Cinza',  hexadecimal: '#999896'},
                {nome: 'Azul',   hexadecimal: '#083fa6'},
            )   
    
    let produtos = []
    produtos.push(
                    {
                       nome: 'Mouse', 
                       descricao: 'Mouse Óptico com fio', 
                       preco: '80,50', 
                       quantidade: 50,
                       marca: [
                                marcas[0]
                              ], 
                       categoria: [
                            categorias[1],
                            categorias[5]
                        ],
                       cor: cores
                    },

                    {
                        nome: 'Teclado', 
                       descricao: 'Teclado com fio RGB', 
                       preco: '200', 
                       quantidade: 35,
                       marca: [
                                marcas[3]
                              ], 
                       categoria: [
                            categorias[0],
                            categorias[3],
                            categorias[4],
                            categorias[5]
                        ],
                       cor: [
                                cores[0]
                            ]
                    },

                    {
                    nome: 'Monitor', 
                    descricao: 'Monitor 20 polegadas 120hz', 
                    preco: '450', 
                    quantidade: 12,
                    marca: [
                             marcas[1]
                           ], 
                    categoria: [
                         categorias[1],
                         categorias[2],
                         categorias[3],
                         categorias[5]
                     ],
                    cor: [
                             cores[0],
                             cores[1]
                         ]
                    },

                    {
                    nome: 'Mouse', 
                    descricao: 'Mouse sem fio', 
                    preco: '120', 
                    quantidade: 28,
                    marca: [
                                marcas[1]
                            ], 
                    categoria: [
                            categorias[1],
                            categorias[3],
                            categorias[5]
                                ],
                    cor: [
                            cores[0],
                            cores[1]
                         ]
                    },

                    {
                    nome: 'Placa mãe', 
                    descricao: 'Placa mãekk', 
                    preco: '69', 
                    quantidade: 50,
                    marca: [
                            marcas[3]
                            ], 
                    categoria: [
                            categorias[0],
                            categorias[4]
                                ],
                    cor: [
                            cores[0]
                        ]
                    }
                )
                console.log(produtos)
                // console.log(produtos[0].categoria)
                // console.log(produtos.marca)
    return produtos
}

const pesquisarProdutos = function(nomeProduto){
    let nome = String(nomeProduto).toUpperCase()
    let listaDeProdutos = cadastroProdutos()
    let produtosEncontrados = []

    listaDeProdutos.forEach(function(item){
        if(String(item.nome).toUpperCase() == nome){
            produtosEncontrados.push(item)
        }
        if(produtosEncontrados.length > 0){
            return produtosEncontrados
        }else{
            return false
        }
    })
    return produtosEncontrados
}

const listarProdutos = function(nomeProduto){
    let nome = String(nomeProduto).toUpperCase()
    let produtos = pesquisarProdutos(nome)
    let status = true
    if(produtos != false){
        status = true
        produtos.forEach(function(item){
            console.log(`Nome do Produto: ${item.nome}`)
            console.log(`Detalhes do Produto: ${item.descricao}`)
            console.log(`Quantidade em estoque: ${item.quantidade}`)
            console.log(`Preço do Produto: ${item.preco}`)
            
            item.marca.forEach(function(itemMarca){
                console.log(` --Marca: ${itemMarca.nome}`)
            })
            item.cor.forEach(function(itemCor){
                console.log(` --Cor: ${itemCor.nome}`)
            })
            item.categoria.forEach(function(itemCategorias){
                console.log(` --Categoria: ${itemCategorias.nome}`)
            })
        })
   
    }
    return status
}

//comandosasicos()
//percorrerArray()
//console.log(filtrarProdutos('TeClAdo'))
//conceitoJSON()
//cadastroProdutos()
//console.log(pesquisarProdutos('ssd'))
//listarProdutos('Mouse')
console.log(listarProdutos('ssd'))