const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

//pop: remove o último elemento do array
pilotos.pop()
console.log(pilotos)

//push: adiciona novo elemento
pilotos.push('Verstappen')
console.log(pilotos)

//shift: removo o primeiro elemento
pilotos.shift()
console.log(pilotos)

//unshift: insere elemento no inicio
pilotos.unshift('Hamilton')
console.log(pilotos)

//splice: adicionando e removendo

//adicionando:

pilotos.splice(2,0, 'Botas', 'Massa')// começando no segundo elemento, 
//nao removendo e inserindo os próximos elementos

console.log(pilotos)

//removendo
pilotos.splice(3,1)//massa quebrou :(
console.log(pilotos)

//slice: pega parte do array e retorna em novo array

const algunsPilotos1 = pilotos.slice(2)// param1: a partir de onde
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)// param2: onde parar e nao inclui esse elemento
console.log(algunsPilotos2)