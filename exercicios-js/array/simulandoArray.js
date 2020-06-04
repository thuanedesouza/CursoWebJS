//objetivo aqui é mostrar que o array é um objeto

const quaseArray = { 0:'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString',{
    value: function() { return Object.values(this) },
    enumerable: false
    })

console.log(quaseArray[0])/*notaçao que serve para array, objeto e 
quando um identificador nao respeita a regra padrao*/

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)