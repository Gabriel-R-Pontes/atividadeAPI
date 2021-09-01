export const fillEndereco = function(endereco,numero){
    return {
        rua: endereco.logradouro,
        numero: numero,
        cidade: endereco.localidade,
        estado: endereco.uf
    }    
}