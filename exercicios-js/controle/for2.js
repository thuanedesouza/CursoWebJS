const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas){// nao eh a melhor alternativa para array
    console.log (`${i})`, notas[i])
}
// assim como pegamos os atributos de um array pelo indice tbm pegamos os atributos de um obj
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for( let atributo in pessoa){// usar o let é importante para q esse atributo exista como variavel local desse laço
    console.log(`${atributo} = ${pessoa [atributo]}`)
}

//console.log(atributo)
