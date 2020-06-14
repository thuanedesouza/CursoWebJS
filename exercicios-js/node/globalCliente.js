require ('./global')// fazendo isso uma unica vez eu já consigo acessar de todos os arquivos
console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)//arquivo global que pode ser mudado é um problema!
