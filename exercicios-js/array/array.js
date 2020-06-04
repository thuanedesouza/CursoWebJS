console.log(typeof Array, typeof new Array, typeof [])

//notação menos recomendada para novo array
let aprovados = new Array('Bia', 'Carlos', 'Ana') 
console.log(aprovados)

// notação mais recomendada para novo array
aprovados = ['Bia', 'Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

// notação mais comum para substituir um elemento
aprovados[3] = 'Paulo'

// notação mais comum para adicionar um elemento em um array já existente
aprovados.push('Abia')

console.log(aprovados.length)


aprovados [9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8]===undefined)//simmm
console.log(aprovados[8]===null)//claro que nao :D

console.log (aprovados)

aprovados.sort()//altera o array original, coloca os itens vazios no final
console.log(aprovados)

//excluindo elementos
delete aprovados[1]// essa posição agora será undefined
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
/*inserindo e apagando ao mesmo tempo com splice
exclui elementos param 1: a partir de onde, param 1: quantos elementos 
vamos apagar a partir do elemento inicialos proximos elementos são 
novos valores para substituir elementos deletados 
*/
aprovados.splice(1,2, 'novoElemento1','novoElemento2' )
console.log(aprovados)