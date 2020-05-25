console.log(typeof console)
console.log(Math.ceil(6.1))//ceil arredonda
const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola' outra forma de escrever isso 
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome//podemos instanciar a função nesse formato POO sim
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('bola')

console.log(obj2.nome)
//console.log(obj2.exec())

obj2.exec() //melhor jeito 