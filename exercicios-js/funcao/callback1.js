
// ideia do callback: vamos passar uma função pra outra função e dado determinado evento a função q passamos será chamada de volta
const fabricantes = [ "Marcedes", "Audi", "BMW"]

function imprimir (nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // o callback está acontecendo com imprimir, para cada elemento o imprimir esta sendo chmado 
fabricantes.forEach(fabricante => console.log(fabricante))

