//configurando o servidor web

const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados.js')
const bodyParser = require('body-parser')

//aplicando o parser obrigatoriamente todas as requisições usando app.use
app.use(bodyParser.urlencoded({extended: true}))
//se a requisição for enviada no formato urlencoded ela vai passar por um parser

//requisição

/*app.get('/produtos', (req, res, next)=> {
    console.log('Middleware 1..')
    next() // um bom exemplo de funcionamento do next na função middleware, comente e descomente
})
*/

//pegar todos os produtos
app.get('/produtos', (req, res, next)=> {//app.use( (req, res, next) =>.. dessa forma
    //  funcionaria para qualquer url, qualquer requisição nessa porta
 
   // res.send({nome: 'Notebook', preço: 123.45}) // o método send converte pra JSON

    res.send(bancoDeDados.getProdutos())
    //retorna a lita de produtos do banco de dados no lugar do formato na linha de cima
})


//pegar um produto específico
// /produtos/:id -> com os ":"" defino acesso a um parâmetro  no caso vai ser o numero do id
// na url vai ficar /produto/1, referindo ao id 1, por exemplo
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))//os parametros estrão na requisição

})

//submeter dados e salvar novo produto
//para funcionar instalamos o body-parser assim ele faz um parser e entrega os dados como obj
app.post('/produtos',(req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//JSON pra web
})

//alterar dados de produtos já cadastrados usando o id
app.put('/produtos/:id',(req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//JSON pra web
})

app.delete('/produtos/:id',(req, res, next) => {
    const produto = bancoDeDados.excluirProduto( req.params.id)
    res.send(produto)//JSON pra web
})



app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})

//No aplicativo Postman podemos veririficar o funcionamento dessas requisições
//obs: se salvar alterações nesse arquivo com o nodemon ele vai reiniciar o servidor
//então os produtos que  você já tinha colocado para teste na requisição não está mais disponível
// e ele retorna {} again