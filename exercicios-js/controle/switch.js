const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:// nao tem o break cai pro case 9
        case 9:
            console.log('Quadro de honra')// considera esse e o de cima nessa linha de codigo
            break
        case 8: case 7: 
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:// caso nao entre em nennhum case
            console.log('Nota Invalida')    
    }
    console.log('fim')

}

imprimirResultado(10)
imprimirResultado(8.9)// da certo!
imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(11)