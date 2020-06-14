//console.log(global)
// isso é apenas uma demonstração mas não é boa prática mexer no global

global.MinhaApp = Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})