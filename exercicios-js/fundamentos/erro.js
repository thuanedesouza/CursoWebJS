

//mecanismo de tratamento de erro

function tratarErroelancar(erro){
   // throw new Error('....')
   //throw 10
   // throw true
   // throw 'mensagem'
   throw{//resolvemos mostrar o erro dessa forma, podemos mandar mais coisa interessante como hora exata e ta
       nome: erro.name,
       msg: erro.message,
       date: new Date
   } //importante evitar mostrar detalhe de infraestrutura e coisas q podem assustar
   //sempre apresentar erro generico!
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!!!!')// colocamos dentro do try o que pode dar problema 

    } catch (e){
        tratarErroelancar(e)//onde tratamos
    } finally{
        console.log('final')// chama isso de qualquer forma 
    }

    
}

const obj = { name: 'Roberto' }
imprimirNomeGritando(obj)
