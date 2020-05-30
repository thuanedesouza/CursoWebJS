//função construtora funciona como uma classe, um molde de objetos

function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0
    
    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima){//se nao tiver na velocidade max pode acelerar
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima// se tiver na maxima ela nao aumenta
      
        }
    }
    // metodo publico
        this.getVelocidadeAtual = function(){// se quisesse privado usariamos const getVelocidadeAtual ou let
        return velocidadeAtual
        }

}

  
const uno = new Carro 
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
