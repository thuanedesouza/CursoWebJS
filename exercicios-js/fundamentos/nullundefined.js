const a = {name: 'Teste'}// atribuição por referência: a recebe a referência do objeto e nao o objeto, 
//recebe o lugar na memoria e passa a apontar pra la

console.log(a)

const b = a
//b vai receber o mesmo endereço onde a aponta
b.name = 'Opa'
//mudando o b.name, vamos mudar a.name pq eh o mesmo lugar
console.log(b)
console.log(a)

let c = 3

let d = c// aqui é feito uma copia por valor, copia do valor é passado pra d mas as duas variaveiz
// sao independentes

d++

console.log(c)
console.log(d)
console.log(c)

let valor//não inicializada
console.log(valor)// declarado mas nao definido

//console.log(valor2) nao declarado entao vai devolver not defined

valor = null // estou avisando que ela está inicializada mas nao aponta pra nenhum lugar na memória
console.log(valor)

