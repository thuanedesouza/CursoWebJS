//escopo criado quando  a função é declarada
//Esse escopo permite a função acessar e manipular variaveis externas a função(closure = algo que envolve alguma coisa)

//Contexto lexico em ação

// a função tem memoria do local onde ela foi definida

const x = 'Global'

function fora (){
    const x = 'Local'
    function dentro () {
        return x
    }
    return dentro
}

const MinhaFuncao = fora()
console.log (MinhaFuncao())