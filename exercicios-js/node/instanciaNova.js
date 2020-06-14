//uma factory retorna uma nova instância, um novo obj

module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}