const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo) // direto no terminal com node entradaESaida.js -a 
//conseguimos ver ele executando esse console.log através da flag

if (anonimo){//stdout: saída padrão
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    //stdin: entrada padrão, stdin.on é pra trabalhar com o que recebeu na entrada
    process.stdin.on('data', data => {//data é a entrada de dados a partir do teclado
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
    
        process.exit()
     
    })
}