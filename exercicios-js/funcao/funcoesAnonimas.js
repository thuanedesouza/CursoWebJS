const soma = function (x, y){// funcao anonima é uma função sem nome
    return x + y
}

const imprimirResultado = function( a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y){// função anônima como parâmetro para outra função
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)