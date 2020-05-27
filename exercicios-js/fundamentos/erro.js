

//mecanismo de tratamento de erro

function tratarErroelancar(erro){
   // throw new Error('....')
   //throw 10
   // throw true
   // throw 'mensagem'
   throw{
       nome: erro.name,
       msg: erro.message,
       date: new Date
   }
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!!!!')// colocamos dentro do try o que pode dar problema 

    } catch (e){
        tratarErroelancar(e)
    } finally{
        console.log('final')
    }

    
}

const obj = { name: 'Roberto' }
imprimirNomeGritando(obj)
