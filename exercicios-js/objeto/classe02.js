//herença mas dessa vez com classes em JS

class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{//relacao de prototipo
    constructor (sobrenome, profissao = 'professor'){
        super(sobrenome)// chamando construtor da classe superior
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)