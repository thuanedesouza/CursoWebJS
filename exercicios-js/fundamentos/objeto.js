const prod1 = {}
prod1.nome = 'Celular super ultra mega'// nome é então, criada dinamicamente
prod1.preco = 4999.00

prod1['Desconto legal'] = 0.20 // evitar atributos com espaço 

console.log(prod1)
//outra maneira:
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla2: 2,
        }
    }

}

const prod3 = {
    obj1: 'blabla',
        obj2: {
                blabla1: 1,
                blabla2: 2}
    }
        
    
console.log(prod3)