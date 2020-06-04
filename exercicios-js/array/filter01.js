const produtos  = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil: true},
    { nome: 'Celular Android top', preco: 2000, fragil: false},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]
// filter: retorna um array que passar no filtro
console.log(produtos.filter(function(p){
    //logica que retorne verdadeiro ou falso
    return p.preco>2000
}))

const fragil = p=> p.fragil == true
const caro = p=> p.preco>2000

const resultado = produtos.filter(fragil).filter(caro)
console.log(resultado)
console.log(produtos)