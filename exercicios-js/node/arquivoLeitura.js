const fs = require('fs')//file system

const caminho = __dirname + '/arquivo.json'

//como ler um arquivo de forma sincrona ( NAO RECOMENDADO )
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


//como ler um arquivo de forma assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
    if(conteudo){

    }
})

//outra forma
const config = require('./arquivo.json')
// a vantagem aqui é já pegar o arquivo JSON convertido em objetos
console.log(config.db) //esse executou mais rápido que o 
//segundo jeito então a ordem é importante

//lendo uma pasta
// dir de diretório e __dirname é o diretório atual
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)// retorna um array 
    //e a partir dele podemos percorrer cada um verificando permissões e etc
} )