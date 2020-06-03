//Object.preventExtensions, pode alterar e deletar mas nao pode adicionar
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: "Promoções"
})

console.log('Extensivel', Object.isExtensible(produto))// verificado se o objeto foi criado com preventExtensions 

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'//  nao surte efeito 
delete produto.tag
console.log(produto)

//Object.Seal, só pode alterar
const pessoa= { nome: 'Juliana', idade: 25 }
Object.seal(pessoa)
console.log('Sealed', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze, nao pode alterar, deletar ou inserir

