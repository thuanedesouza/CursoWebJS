//callback x fazer na mão
//mostrar como o callback faz  códigos mais eficientes

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
//sem callback


let notasBaixas = []
for (let i in notas){
    if(notas [i] < 7){
         notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback
notasBaixas2 = notas.filter(function(nota){// filter chama a função para todo o array notas 
    return nota < 7
})

//com arrowfunction na callback
console.log(notasBaixas2)
notasBaixas3 = notas.filter (nota => nota < 7)
console.log (notasBaixas3)