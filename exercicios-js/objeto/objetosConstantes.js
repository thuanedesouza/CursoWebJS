// a variavel pessoa aponta pra um endereço de memoria pessoa -> 123 ->{...} 
// pessoa é a constante que nao pode ser alterada mas o qe tem dentro dela pode!


const pessoa = {nome:'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)
//{...} = novo objeto
// pessoa <- {...}


//pessoa -> 456 -> {...} tentativa de mudar onde pessoa aponta
// erro: pessoa = { nome: 'OutraPessoa'}


Object.freeze(pessoa)//Não é possivel mais mexer no objeto
pessoa.nome = 'Maria'
console.log(pessoa.nome)// nao gera erro mas nao atualiza o nome

delete pessoa.nome
console.log(pessoa.nome)//nem retirar, nem adicionar atributou ou alterar atributo é possível. Agora tudo é constante

//criando um objeto para ser constante

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome= 'Maria'
console.log(pessoaConstante)