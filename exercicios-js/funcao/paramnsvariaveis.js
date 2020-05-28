function soma(){// nao definir parametro nao quer dizer que nao aceite parametros
    let soma = 0
    for ( let i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma (3))
console.log(soma(1.1, 1.2, 1.3, 1.4))
console.log(soma(1.1, 'Teste', 1.3, 1.4))
console.log(soma('a', 'b', 'c', 'd'))