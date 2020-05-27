const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 =0] = [10, 7, 9, 10]// n5 ta fora do array e nao recebeu nada
console.log(n1, n3, n5, n6)

const [ , [ , nota]] = [[, 8, 8], [ 9, 6, 8]]//melhor nao usar dessa forma, melhor imprimir pelo indice
console.log(nota)

const [ , [, nota2] ] = [1, [3, 6, 9 ]] 
console.log(nota2)