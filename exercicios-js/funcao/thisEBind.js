const pessoa = {
    saudacao: 'Bom dia',
    falar (){
        console.log(this.saudacao)//this indica que é a saudação desse objeto
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()// agora o this não é mais o mesmo entao volta indefinido
//conflito entre paradigmas: programação funcional e OO

//bind passamos objeto onde queremos que o this seja resolvido 
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
