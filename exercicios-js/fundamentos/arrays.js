const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])// o nosso array tem elementos 0, 1, 2 e 3, não tem o 4

valores[4] = 10
console.log (valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste') // push para adicionar elementos, ps: id=3 é um objeto, 
//isso foi pra mostrar como pode ser heterogeneo
console.log(valores)

// a função pop retira o utilmo valor do array
console.log(valores.pop())
// também podemos deletar se soubermos onde está o elemento
delete valores[0]
console.log(valores)

console.log( typeof valores)