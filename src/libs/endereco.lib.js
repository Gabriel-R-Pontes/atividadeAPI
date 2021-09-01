import axios from 'axios';

class Endereco{
    async buscarEndereco(cep){
        const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        const {data} = endereco
        return data
    }
}

export default new Endereco();