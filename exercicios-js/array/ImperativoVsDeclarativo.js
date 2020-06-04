//diferença entre um código mais declarativo e um mais imperativo

const alunos = [
    {nome: 'Joao', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]
// média das notas
// Abordagem Imperativa
let total1 = 0
for ( let i = 0; i< alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1/alunos.length)

// Abordagem Declarativa

const getNota = aluno => aluno.nota// totalmente reutilizável e autoexplicável 
const soma = (total,atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)

//abordagem declarativa >>>>>> abordagem imperativa