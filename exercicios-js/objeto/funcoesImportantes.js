const pessoa = {
    nome: 'Rebeca', 
    idade:' 12', 
    peso: '13'
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
    
});

//definir propriedade, se quer que seja possivel usar object.keys ou nao por exemplo
// definir caracteristicas sobre uma propriedade
Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable:false,//nao pode ser sobrescrita
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'//nao aceita ser sobrescrita
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object assign ES6 - 2015
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 } 
const obj = Object.assign(dest, o1, o2)// concatena o primeiro parametro com o restante, 
//se tiver algum item igual ele sera sobrescrito

console.log(obj)
Object.freeze(obj)
obj.c = 1234
console.log (obj)