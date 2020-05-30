function Pessoa(){
    this.idade = 0
    setInterval(()=>{
        this.idade++// o this da função arrow é constante
        console.log(this.idade)

    }, 1000)
}

new Pessoa