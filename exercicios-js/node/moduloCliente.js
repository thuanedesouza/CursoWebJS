//modulo criado para usar moduloA  e moduloB

const moduloA = require('./moduloA')// ./ pq estou referenciado  o modulo dentro do sistema
const moduloB = require('./moduloB') // quando o arquivo é js não precisa escrever .js

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log(moduloA)


console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())

console.log(moduloB)