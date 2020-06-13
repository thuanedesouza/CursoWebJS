//outra forma de criar objetos diretamente para module.exports

module.exports = {// nesse caso this e apenas o exports nao funciona, 
    //estaria sugerindo substituir os dois objetos por um outro e não adicionando como no modulo A
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Boa noite'
    }
}