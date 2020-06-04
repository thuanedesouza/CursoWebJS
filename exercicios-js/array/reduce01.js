const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsistas: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, valorAtual){
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
})

console.log(resultado)

// com valor inicial
const resultado2 = alunos.map(a => a.nota).reduce(function (acumulador, valorAtual){
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
}, 0)//0 sendo esse valor inicial

const resultado3 = alunos.map(a => a.nota).reduce(function (acumulador, valorAtual){
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
}, [])//[] sendo esse valor inicial

console.log(resultado3)