// Função em JS é Firs-Class- Citizen
//Higher order function -> isso é quando a função é tratada como dado então voce pode ter a função como entrada

//criar de forma literal

function fun1(){}

//armazenar em uma variável

const fun2 = function (){}

//armazenar em array

const array = [function (a, b){ return a + b}, fun1, fun2]
console.log(array[0] (2,3))// array [0] é a função da posição zero q pede essas duas entradas

const obj = {}
obj.falar = function (){ return 'Opa..'}
console.log(obj.falar())

// passar função como parametro
function run (fun){
    fun()
}

run( function(){ console.log('Executando...')})

// conter outra função

function soma(a,b){
    return function(c){
        console.log(a +b + c)
    }
}
soma(2, 3)(4)// 4 é o c

const cincoMais = soma (2, 3)
cincoMais(4)