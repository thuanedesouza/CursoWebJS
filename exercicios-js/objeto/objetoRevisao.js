//coleção dinamica de pares de chave e valor
 const produto = new Object
 produto.nome = 'Cadeira'
 produto['marca do produto'] = 'Generica'
 produto.preço = 220

 console.log(produto)
 delete produto.preco
 delete produto['marca do produto']
 console.log(produto)

 const carro = {
     modelo: 'A4',
     valor: 89000,
     proprietario: {
         nome: 'Thuane',
         idade: 56, 
         endereço: {
             rua: 'Carmésia',
             numero: 640
         }
     },
     condutores: [{
         nome: 'Thuane',
     }, { nome: 'Iolene'}], 
     calculaValorSeguro: function (){
        //...
    } 

    }

    carro.proprietario.endereço.numero = 1000
    carro['proprietario']['endereço']['rua'] = 'Av. Gigante'
    console.log(carro)
 
    delete carro.condutores
    delete carro.proprietario.endereço
    delete carro.calculaValorSeguro

    console.log(carro)
    console.log(carro.condutores)
    // da problema buscar coisa indefinida. os condutores foram  deletados console.log(carro.condutores.length)