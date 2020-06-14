const moduloA = require('../../moduloA')
console.log(moduloA.ola)

//observação, isso também seria possível através da path completa do arquivo mas não
// faz sentido para implantar projetos em outras máquinas


// usando módulos do próprio node
const http = require('http')// só precisa do nome

const c = require('./pastaC')
console.log(c.ola2)

http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) // ou seja, com o código executando vamos 
//no navegador digitar o endereço localhost:8080 para ver o que foi escrito como .write

