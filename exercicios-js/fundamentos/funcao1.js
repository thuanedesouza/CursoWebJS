//função sem retorno
function imprimirSoma (a,b){
console.log(a+b)//se for String vai concatenar
}

imprimirSoma(2,3)
imprimirSoma(2)// JavaScript vai rodar pq eh flexivel isso mesmo assim mas ele avisa que resulta em not a number
imprimirSoma(2,3,4,6)//vai rodar e pegar os dois primeiros e ignorar o resto
imprimirSoma()// not a number

//função com retorno

function soma(a, b = 1){// esse 1 é o valor padrão para quando o valor nao for passado para b
    
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())// soma undefined com 1 e vai dar um not a number
