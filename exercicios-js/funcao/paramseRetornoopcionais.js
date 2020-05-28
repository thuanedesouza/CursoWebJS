function area(base, altura){
    const area = base *altura
    if (area>20){
        console.log(`Valor acima do permitido: ${area} m²`)
    }else{
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(1,2,3,17))
console.log(area(5,5))
