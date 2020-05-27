function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)
    //uma forma melhor: 
    const comprarTv32 = trabalho1 != trabalho2 // se nao forem iguais, entao simula um ou exclusivo super
    const manterSaudavel = !comprarSorvete//operadorunário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}// ES2015, nao precisa criar objetos
    // da forma {comprarSorvete: comprarSorvete, comprarTv50: comprarTv50} que automaticamente ele vai criar um
    //objeto com o nome da chave e vai ter o valor que tem nessa variavel aqui nessa função
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))