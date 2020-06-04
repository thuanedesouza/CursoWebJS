/* função map:
mapear um array para outro aray do mesmo tamanho com os dados transformados
gera um array com o mesmo tamanho e com dados tranformados 
não causa modificação no array atual*/

const nums = [1, 2, 3, 4, 5]

//map é um for com proposito

let resultado = nums.map(function(e){
    return e * 20// o que vai acontecer com cada elemento em map,uma trannformação
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('-', ',')}`


resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
