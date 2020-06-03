//JSON - JS object notation -> formato textual, formato  de dado facilmente 
//interpretado em qualquer linguagem
const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) // tornando um objeto um JSON

// contra exemplo       console.log(JSON.parse("{a: 1, b:2, c:3}"))

// contra exemplo       console.log(JSON.parse("{'a': 1, 'b': 2, 'c':3}"))

// ou seja é muito importante usar a sintaxe correta e é muito fácil confundir

console.log(JSON.parse('{"a":1, "b":2, "c": 3}'))

// formatos válidos
//atributos  e strings sempre delimitados por aspas simples
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d":{}, "e": [] }'))