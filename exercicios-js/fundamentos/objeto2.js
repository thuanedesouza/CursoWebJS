console.log(typeof Object)
console.log(typeof new Object)// instanciando a partir de new
// o jeito de criar o objeto é a partir de uma função, ou a partir da classe
const Cliente = function (){}// popularmente chamada de "função construtora"
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto{}// ES 2015
console.log( typeof Produto)// criar classe e instanciar um objeto mas quem melhor faz isso é a função!
console.log(typeof new Produto)


