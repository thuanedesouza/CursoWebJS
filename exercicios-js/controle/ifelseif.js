Number.prototype.entre = function (inicio, fim){//sendo um number queremos compara-lo com o valor de inicio e de fim
        return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){// em casos como esse usar o switch
    if(nota.entre(9,10)){
        console.log('Quadro de honra')
    } else if (nota.entre(7,8.99)){
        console.log('Aprovado')
    }else if(nota.entre(5,6.99)){
        console.log('Recuperação')
    }else if(nota.entre(0,4.99)){
        console.log('Reprovado')
    }else{
        console.log('Nota Invalida')
    }
    console.log('fim')
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(3)
imprimirResultado(11)