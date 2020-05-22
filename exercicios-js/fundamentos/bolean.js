let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log (isAtivo)

isAtivo = 1
console.log (!!isAtivo)

console.log('O que é resolvido logicamente e retorna verdadeiro: ')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=true))

console.log('O que é resolvido logicamente e retorna falso:')
console.log(!!0)
console.log(!!null)
console.log(!!'')
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar:')
console.log(!!(''||null||0||'  '))// vai retornar se pelo menos um deles é verdadeiro
console.log(''||null||0||undefined|| 'epa')// vai retornar o que for verdadeiro

//exemplo de aplicação interessante

let nome = ''
nome = 'Lucas'
console.log ( nome || 'Nome Desconhecido')// sem o nome podemos retornar desconhecido aplicando boolean