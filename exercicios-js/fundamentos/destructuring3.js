function rand({min = 0, max = 1000 })//passando objeto como parametro usando o destructuring
{
    const valor = Math.random()* (max - min) + min
    return Math.floor(valor)
}

console.log( rand ({max:50, min:40}))//objeto

const obj = {max:50, min:40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))// vai funcionar mas com os valores padroes setados
//console.log(rand()) //nao da  certo, eh como pedir para desestruturar algo que nao existe
