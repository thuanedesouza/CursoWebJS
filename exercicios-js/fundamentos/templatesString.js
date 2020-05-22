const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
    //com o template delimitado sempre por `` é possível continuar na linha seguinte e deixar espaço em branco sem isso afetar nada
console.log(concatenacao, template)

//usando o template para expressões
console.log(`1+1=${1+1}`)// faz a conta apenas dentro das chaves

const up = texto => texto.toUpperCase()
console.log(`Eii.. ${up('cuidado')}!`)