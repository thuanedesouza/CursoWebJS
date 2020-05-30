function getPreco (imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1- this.desc) * (1 + imposto)}`
}

const Produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco, 
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(Produto.getPreco())

const carro = { preco: 49900, desc: 0.20}

console.log (getPreco.call(carro))
console.log (getPreco.apply(carro))

// a diferença entre o call e o apply é a passagem de parâmetros
console.log(getPreco.call(carro, 0.17, '$'))// primeiro contexto ou obj e depois os parametros da funcao
console.log(getPreco.apply(carro, [0.17, '$']))// passamos os parametros dentro de um array