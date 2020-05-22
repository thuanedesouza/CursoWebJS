const escola = "Cod3r"
console.log(escola.charAt(4))// pegar o caracter na posição 4
console.log(escola.charAt(5))// não achando ele retorna um espaço vazio, como se fosse nulo (Tomar cuidado com a permissividade da linguagem!!)
console.log(escola.charCodeAt(3))// codigo do caractere na tabela ascii html
console.log(escola.indexOf('3'))// qual o indice onde está o '3'

console.log(escola.substring(1))// indice de onde começa a substring
console.log(escola.substring(0,3))// do indice 0 até o indice 3, sem colocar o ultimo indice

console.log('Escola '.concat(escola).concat("!"))// concatenando strings
console.log('Escola '+ escola + "!")

console.log(escola.replace(3,'e'))

console.log('Ana,Maria,Pedro'.split(','))//separar os elementos da string, definindo separador em parenteses