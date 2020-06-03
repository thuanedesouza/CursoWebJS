// usando a notação literal de objetos
const obj1 = {}
console.log(obj1)

//Objeto em JS

console.log(typeof Object, typeof new Object)// só relembrando o tipo das coisas
    const obj2 = new Object
    console.log (obj2)

// funções construtoras
function Produto (nome, preco, desc){
    this.nome = nome// tornando essa variável publica para fora do objeto // necessário entender o nível de visibilidade das coisas
    // ou seja podemos alterá-lo de fora
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99,0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
p2.nome = 'Borracha'// realmente altera  e está acessivel como constante global
console.log(p2)

// Função factory = retorna objeto

function criarFuncionario(nome, salario, faltas){
    return{
        nome, 
        salarioBase: salario,
        faltas, 
        getSalario(){
            return(this.salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Ana', 7980,0 )
console.log(f1.getSalario(), f2.getSalario())

// Objeto.create

const filha = Object.create (null)
filha.nome = 'Ana'
console.log(filha) 

// Uma função famosa que retorna um objeto... 
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')// converteu o texto em objeto e agora posso usar o objeto normalmente
console.log(fromJSON.info)// isso é importante pq o JSON é um texto e precisa disso para trabalhar com ele como obj