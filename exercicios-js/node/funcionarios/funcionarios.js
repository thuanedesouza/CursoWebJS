const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//desafio: quero retornar desse JSON  mulhere chinesa que recebe o menor salário
//funções para o filter
const chineses = funcionario => funcionario.pais === 'China'
const mulheres = funcionario => funcionario.genero === 'F'

//função para o reduce que sempre vai ficar com o funcionário de menor salário
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
    }


axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

        
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)//resultado

})




 



