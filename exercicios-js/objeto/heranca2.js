// cadeia de prototipos, prototype chain

// Object.prototype.attr0 = 'Z'// aqui vc adiciiona um atributo no pai de todos os objs e portanto nao é aconeselhado
const avo = { attr1: 'A'}
const pai = { __proto__:avo, attr2: 'B', attr3:'tururu'}

const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)// como é encotrado no filho ele nao vai buscar no escopo mais abrangente


const carro = { 
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
        this.velAtual = velMax
        }
    },
    
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324//shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return`${this.modelo}: ${super.status()}`// o super se refere ao super objeto assim como this se refere ao objeto atual
    }
}
// outra forma de definir protoripo sem ser __proto__
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

//observação: quando a gente imprime o objeto ele nao mostra tudo que esse objeto recebe do seus prototipos, 
//só o que esses objetos realmente tem
console.log(ferrari)
console.log(volvo)

//acessando as coisas do obj pai

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())// sobrescreveu a velocidade maxima e o this do status nao era do obj pai era de ferrari



