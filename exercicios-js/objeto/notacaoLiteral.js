
const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c}
const obj2 = {a, b, c}// se for usar o mesmo nome da constante
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = '7.6'

const obj3  = {}// preciso avisar q é um obj
obj3[nomeAttr] = valorAttr
console.log(obj3) 

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1:  function() {
        ///...
    }, funcao2: function () {
        
    }
        
}

console.log(obj5)