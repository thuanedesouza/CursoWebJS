console.log(a)// ele fala que ela ja existia, afinal só eh indefinido o que eh declarado e nao tinha sido declarado ainda
var a = 3
console.log(a)

function teste (){
     console.log(a)//acontece mesmo dentro de função
    var a = 3
    console.log(a)
}
teste()
console.log('a =', a)


    console.log(a)//acontece mesmo dentro de função
   let a = 3
   console.log(a)

