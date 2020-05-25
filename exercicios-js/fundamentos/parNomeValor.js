//par: nome e valor
const saudacao = 'Opa' // contexto lexico 1 = global

function exec(){
    const saudacao = 'Faaala'
    return saudacao

}

// Objetos são grupos de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    
    endereco: {
        logradouro:'Rua tal, numero tal',
        cep: '123315'

    }

}

console.log(saudacao)
console.log(exec())
console.log(Cliente)