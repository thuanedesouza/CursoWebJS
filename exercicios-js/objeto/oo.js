//CÓDIGO NÃO EXECUTAVEL

// é procedural, segue procedimento

processamento( valor1, valor2, valor3)

//OO, a ideia de OO é trazer mais proximidade com a vida real com auxilio da abstração
objeto = {
    valor1, 
    valor2,
    valor3, 
    processamento(){
        //...
    }
}

objeto.processamento()//Foco passou a ser o objeto processamento é uma função, agora, que pertence ao dado

//Princípios importantes:
//1. abstração: simplificar coisas do mundo real de forma a caber no mundo do software
//2. encapsulamento: detalhes de programação escondidos, para que o usuário veja uma versão realmente simplificada
    //nao precisamos saber todos os detalhes do carro para dirigi-lo
    // se a maioria dos carros tem a mesma interface não temos um processo tão grande de adaptação
    // se for necessário mudar algumas coisas é mais facil mudar internamente, dentro do objeto por exemplo com alto nivell de encapsulamento
    // encapsulamento ajuda na evolução do software
    // necessário tomar cuidade com como os objetos interagem senao ao modificar encontramos problemas
//3. herença (prototype): receber atributos e comportamentos de um objeto pai, s
    //e um objeto filho herda coisa do pai e avó isso é cadeia de prototyping
    //ser humano é um mamifero, mamifero é um animal. animal>mamifero>humano
//4. polimorfismo: a partir do conceito generico criar um objeto especifico, celular -> celular da marca tal 

