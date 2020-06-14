console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null//exports é uma outra variável que aponta para o objeto, mesmo que mude a variavel
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)//continua sendo o mesmo objeto
//this e exports são duas referências para o mesmo objeto que module.exports aponta
// para tentar atribuir um novo objeto para ser exportado, a forma correta é: 

module.exports = {
    public: true
}