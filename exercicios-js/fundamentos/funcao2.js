//armazenando uma função em uma variavel
const imprimirSoma = function (a,b){//função anonima
    console.log(a+b)
}

imprimirSoma(2,3)

//armazenando uma função arrow em uma variável

const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implicito, se possível retornar ele retorna
const subtração = (a,b) => a - b

console.log(subtração(2,3))

//observação 
const multiplicação = a => a*a// genteeeeeeeee nao precisa de parenteses aqui!
console.log(multiplicação(3))