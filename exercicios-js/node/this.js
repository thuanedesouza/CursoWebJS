console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)


function logThis (){
    console.log('Dentro de uma função..')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    // assim dentro da função estariamos mudando a global this.perigo = "...."

}

logThis()