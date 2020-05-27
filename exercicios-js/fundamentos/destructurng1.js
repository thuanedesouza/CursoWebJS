//ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)// podemos mudar o nome

const { nome: n, idade: i } = pessoa// assim avisamos que mudamos o nome
console.log(n, i)

const { sobrenome, bemhumorada=true} = pessoa// essa atribuição de true eh pra definir um valor padrao casa nao receba nada 
console.log(sobrenome, bemhumorada)

const { endereco: {logradouro, numero, cep }} = pessoa// vai tirar de dentro de pessoa logradouro, numero e cep undefined
console.log(logradouro, numero, cep)

//const{ conta: { ag, conta}} = pessoa  // essa tentativa da pau pq conta é um objeto que nao existe dentro de pessoa
//console.log(ag, conta)