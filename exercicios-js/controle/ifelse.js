function maiorQueSete(num){
    if(num>7){
        console.log(num)
    }
    else{
         console.log('Menor que sete')
        }
        
        console.log('Final')
    
}

maiorQueSete(8)
maiorQueSete(6)
// como nao fazer
function teste (num){
    if(num>7) ; // isso é lido como que ";" é a sentença, que apesar de vazia é executada se  a condicao for verdadeira
    console.log(num)// entao aqui é impresso todos os num, NAO USAR ; EM ESTRUTURA DE CONTROLE
}
teste(8)
teste(6)
