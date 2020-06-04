const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice,x){
    console.log(`${indice+1}) ${nome}`)
    //console.log(x) apenas para perceber que a cada chamada ele vai mostrar esse x
})

aprovados.forEach( nome => console.log(`${nome}`))

const exibirAprovados = aprovados => console.log(aprovados)

aprovados.forEach(exibirAprovados)