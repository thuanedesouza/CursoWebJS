console.log( '01)', '1' == 1)// comparou o valor e nao esta preocupado com o tipo
console.log('02)', '1'===1)// comparou o valor e o tipo
console.log('03)', '3'!= 3)
console.log ('04)', '3'!== 3)
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log ('07)', 3 >=2 )
console.log('08)', 3 <= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)// como ele vai comparar o endereço de memória vai dar falso nos dois
console.log('11)', d1.getTime() === d2.getTime())//comparou dois numbers

console.log('12)', undefined == null)
console.log('(13)', undefined === null )// é mais adequado usar estritamente igual
