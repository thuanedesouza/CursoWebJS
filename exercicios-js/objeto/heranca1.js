const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)// dois underlines, com __proto__ a gente vai acha o objeto pai ou super objeto
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)//null

// prototype só existe para funções, objetos tem __proto__