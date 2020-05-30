//Exemplo de callback no browser, entao executar no browse

document.getElementsByTagName('body')[0].onclick = function (e){//nao precisa declarar o evento pq nao vamos usar nada
    console.log('O evento ocorreu!')
}


