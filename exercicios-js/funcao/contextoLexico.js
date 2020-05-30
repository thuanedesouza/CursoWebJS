//contexto lexico = contexto onde as coisas foram criadas, no caso o contexto onde a função é criada!!

const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec (){
    const valor = 'Local'
    minhaFuncao()
}

exec()// Vai imprimir Global ou local ?