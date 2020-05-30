//function declaration
console.log(soma(2, 3))
//console.log( sub( 2, 3)) obrigada a chamar depois, usada
//console.log(mult(3,4))// obrigada a chamar depois e pouca usada

function soma (x, y){// definindo a função assim o interpretador do js já prepara as 
    //funções e podemos chamar ela antes dela ser declarada
    return x + y
}

//function expression
const sub = function (x, y){
    return x - y
}

// named function expression 
const mult = function mult(x, y){
    return x * y
}