let comparaComThis = function (param){
    console.log(this===param)
} 

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)// mudou
comparaComThis(obj)

//muda com a arrow function?

let comparaComThisArrow = (param) => console.log(this===param)
comparaComThisArrow(global)// nao é igual pq ele é referente ao escopo da função arrow mesmo
comparaComThisArrow(module.exports)//objeto em que ele foi escrito a função

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(global)//falso
comparaComThisArrow(module.exports)//verdade, mesmo com o bind this se refere à dentro da propria função