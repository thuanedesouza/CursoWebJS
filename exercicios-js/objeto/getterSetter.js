//usado para acessar variaveis privadas

const sequencia = {
    _valor1:1,// o "_" mostra pros desenvolvedores que essa variável valor foi feita para ser acessada internamente

    get valor(){ return this._valor1++ },
    set valor(valor){
        if( valor> this.valor){
            this.valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000// como ele vai levar para valores que já esiveram na sequencia ele só pula
console.log(sequencia.valor, sequencia.valor)
