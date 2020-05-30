//função factory é uma função que cria novos objetos

const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 54
}

// melhor usar uma função factory

function criarPessoa(){
    return {
        nome: 'Ana', 
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

function criarProduto (nome, preco){
    return{
        nome,
        preco,
        desconto: 0.20
    }
}

console.log(criarProduto('Bola', 1.90))