function Pessoa (){
    this.idade = 0// criar atributo a partir do this, instanciar
    const self = this
    setInterval(function(){
        //pessoa.idade++ //nao chama o objeto pessoa vamos corrigir isso com o bind 
        self.idade++//ou com essa alternativa sem o bind
        console.log(this.idade)

    }/*.bind(this)*/,1000)// como esta dentro de pessoa só o this ja faz o que precisa
}

new Pessoa