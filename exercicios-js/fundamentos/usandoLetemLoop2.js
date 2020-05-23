const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push (function() {
        console.log(i)

    })
}

funcs[2]()// por causa do escopo e outras coisas o let tem essa memória para mostrar o valor na segunda rodada
funcs[8]()// tem a ver com o conceito de closure
funcs[6]()