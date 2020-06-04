const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]
//retornar um array apenas com os preços

const paraObjeto =  json => JSON.parse(json)// retorna array de objetos
const pegaPreço = produto => produto.preco// um array de valores

const resultado = carrinho.map(paraObjeto).map(pegaPreço)
console.log(resultado)


