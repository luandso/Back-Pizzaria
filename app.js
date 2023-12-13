/*********************
* Autor: Luan Oliveira
* Objetivo: Criar API Funcional, fornecendo informações para a Tony Pizzaria
* Data: 06/12/2023
* Versão: 1.0
**********************/

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*')

        response.header('Access-Control-Allow-Methods', 'GET')

        app.use(cors())

        next()
})

//EndPoint: Retorna as categorias.
app.get('/categorias', cors(), async function(request, response, next){
    let controleCategorias = require('./module/categorias.js')
    let categorias = controleCategorias.getCategorias()
    if(categorias){
        response.status(200)
        response.json(categorias)
    }
    else{
        response.status(404)
        response.json('Alerta: O item não foi localizado')
    }
})

//EndPoints: Retorna os produtos.
app.get('/produtos', cors(), async function(request, response, next){
    let controleProdutos = require('./module/categorias.js')
    let produtos = controleProdutos.getCategorias()
    if(produtos){
        response.status(200)
        response.json(produtos)
    }
    else{
        response.status(404)
        response.json('Alerta: O item não foi localizado')
    }
})

//EndPoints: Retorna todos os produtos escolhidos.
app.get('/produto/', cors(), async function(request, response, next){
    let nomeProduto = request.query.produto
    let controleProduto = require('./module/categorias.js')
    let produto = controleProduto.getProduto(nomeProduto)
    if(produto){
        response.status(200)
        response.json(produto)
    }
    else{
        response.status(404)
        response.json('Alerta: O item não localizado')
    }

})

//EndPoints: Retorna dados do cliente selecionado.
app.get('/cliente/', cors(), async function(request, response, next){
    let nomeCliente = request.query.nome
    let controleClientes = require('./module/categorias.js')
    let cliente = controleClientes.getCliente(nomeCliente)
    if(cliente){
        response.status(200)
        response.json(cliente)
    }
    else{
        response.status(404)
        response.json('Alerta: O item não foi localizado')
    }
})

//EndPoints: Retorna os comentários.
app.get('/comentarios', cors(), async function(request, response, next){
    let controleComentarios = require('./module/categorias.js')
    let comentarios = controleComentarios.getComentarios()
    if(comentarios){
        response.status(200)
        response.json(comentarios)
    }
    else{
        response.status(404)
        response.json('Alerta: O item não foi localizado')
    }
})
app.listen('8080', function(){
    console.log('API funcionando!!!!')
})