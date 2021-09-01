import Endereco from '../libs/endereco.lib'
import authMiddleware from '../middlewares/auth.middleware'
import Usuario from '../models/Usuario'
import { fillEndereco } from '../utils/fillEndereco'

class UserController{
    
    async cadastrarUsuario(req, res){
        const {numero,cep, email, nome} = req.body
        const endereco = await Endereco.buscarEndereco(cep)
        const enderecoFinal = fillEndereco(endereco,numero)
        const usuario = {
            nome,
            email,
            endereco: enderecoFinal
            }
        const cadastro = await Usuario.create(usuario)
        const token = await authMiddleware.generateToken(cadastro._id)
        return res.status(200).json({cadastro, token:token});
    }

    async buscarUsuarios(req,res){
        const usuarios = await Usuario.find()
        return res.status(200).json(usuarios);
    }

    async buscarUsuarioPorId(req,res){
        const {id} = req.params
        const buscar = await Usuario.findById(id)
        return res.json(buscar)
    }

    async atualizarUsuario(req,res){
        const {id} = req.params
        const {numero,cep, email, nome} = req.body
        const endereco = await Endereco.buscarEndereco(cep)
        const enderecoFinal = fillEndereco(endereco,numero)
        const usuario = {
            nome,
            email,
            endereco: enderecoFinal
        }
        await Usuario.findByIdAndUpdate(id,usuario)

        return res.status(200).send("Dados de usuário atualizados com sucesso!")
    }

    async deletarUsuario(req,res){
        const {id} = req.params
        await Usuario.findByIdAndDelete(id)
        return res.status(200).send("Usuário deletado com sucesso!")
    } 
}
export default new UserController();