console.log(typeof String)
console.log(typeof Object)
console.log(typeof Array)

// toda função tem .prototype

String.prototype.reverse = function(){// nao tem reverse no prototipo padrao de String mas assim adicionamos o metodo
    return this.split('').reverse().join('')// o array tem a função split, primeiro a string é 
    //dividida, revertida e reunida
}

console.log('Escola Cod3r'.reverse)
Array.prototype.first = function(){
    return  this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

// não sobrescreva comportamentos que já existem em Array, String e Object pq é muito arriscado 