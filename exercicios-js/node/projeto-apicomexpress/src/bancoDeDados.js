const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto (produto) {
    if (!produto.id) produto.id = sequence.id//caso o produto nao esteja setado
    produtos[produto.id] = produto // caso esteja setado
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

//deixando as 3 funções visiveis para fora do arquivo
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto}