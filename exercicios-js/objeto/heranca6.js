function Aula (nome, videoID){
    this.nome = nome 
    this.videoID = videoID

}

const aula1 = new Aula ('Bem Vindo!', 123)
const aula2 = new Aula ('Ate Breve', 456) 
console.log(aula1, aula2)

//simulando o new

function novo (f, ...params){// ...params é o operador spread rest, ele concatena tudo que recebe em um array
    const obj = {}
    obj.__proto__ = f.prototype// f vai receber a função construtora e aqui o obj.__proto__ passa a apontar pra f.prototype
    f.apply(obj,params)// vai executar a função f passando o objeto que criamos nessa função
    return obj// retornamos o objeto criado
}

const aula3 = novo(Aula, 'Bem Vindo!', 123)
const aula4 = novo (Aula, 'Até Breve', 456)

console.log(aula3, aula4)