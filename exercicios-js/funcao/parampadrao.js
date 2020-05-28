// estratégia 1  de gerar valor padrao

function soma1(a, b, c){// mais usado
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c

}

console.log(soma1(), soma1(3), soma1(1, 2, 3 ), soma1(0,0,0) ) // 0 é falso então vai dar falso ali e ir pra atribuição

// estratégia 2, 3  e 4 para gerar valor padrão

function soma2 (a, b, c){
    a = a !== undefined ? a : 1 // a nao  é indefinida ? se sim, pegue a, senao pegue 1 
    b = 1 in arguments ? b : 1// se b foi passado como argumento use b senao use 1
    c = isNaN(c) ? 1 : c // MAIS SEGURO
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3 ), soma2(0,0,0) )

// valor padrao ES2015 PREFERENCIAL
function soma3 (a = 1, b =1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3 ), soma3(0,0,0) )