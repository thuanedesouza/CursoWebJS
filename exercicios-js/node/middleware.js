//middleware pattern (chain of responsability)

const passo1 = (ctx, next) =>{//primeiro param é o contexto 
    //que vai ser levado de uma passo para outro
    ctx.valor1 = 'mid01'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid02'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid03'

//no express, por exemplo,  tem um middleware com requisição, resposta e uma função next

// função que vai executar as funções middlwares
const exec = (ctx, ...middlewares) => {// o execPasso vai olhar no array de middelwares (operador rest)
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
       middlewares[indice](ctx, ()=> execPasso(indice + 1)) 
    }
    execPasso(0)// inicia a partir do zero
}

const ctx = {}

exec(ctx, passo3, passo1, passo2)
console.log (ctx)
exec(ctx, passo2,  passo3)
console.log (ctx)
exec(ctx, passo1, passo2, passo3)
console.log (ctx)

//indice < middlewares.length para garantir que está dentro do array
//middlewares[indice] passa a função: (ctx, ()=> execPasso(indice + 1)) 
//com o parâmetro contexto e a função next ()=> execPasso(indice + 1)

// ou seja temos uma recursão, denro da função execPasso ela chama ela mesma 
