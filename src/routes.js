import { Router }  from 'express';
import UserController from './controller/UserController'
import authMiddleware from './middlewares/auth.middleware';

const routes = Router();

//Antigo
// const usuarios = [];

// routes.post('/usuario', function (req,res) {
//     const usuario = req.body;
//     usuario.id = uuidv4();
//     usuarios.push(usuario);
//     return res.json(usuario);
// });

// routes.get('/usuario', function(req,res){
//     return res.json(usuarios);
// })

// routes.get('/usuario/:id', function(req,res){
//     const {id} = req.params;
//     const index = usuarios.findIndex(usuarios => usuarios.id === id);
    
//     if(index === -1) return res.status(404).json({message: 'user not found'})
    
//     return res.json(usuarios[index]); 
// })

// routes.put('/usuario/:id', function(req,res){
//     const {id} = req.params;
//     const toUpdate = req.body
//     const index = usuarios.findIndex(usuarios => usuarios.id === id);
    
//     if(index === -1) return res.status(404).json({message: 'user not found'})
    
//     toUpdate.id = id
//     usuarios[index] = toUpdate
    
//     return res.json(usuarios[index])
// })

// routes.delete('/usuario/:id', function(req,res){
//     const {id} = req.params
//     const index = usuarios.findIndex(usuarios => usuarios.id === id);
    
//     if(index === -1) return res.status(404).json({message: 'user not found'})
    
//     usuarios.splice(index,1)
//     return res.json(usuarios)
// })

routes.post('/usuario', UserController.cadastrarUsuario)

routes.get('/usuario',authMiddleware.auth, UserController.buscarUsuarios)

routes.get('/usuario/:id',authMiddleware.auth, UserController.buscarUsuarioPorId)

routes.put('/usuario/:id',authMiddleware.auth, UserController.atualizarUsuario)

routes.delete('/usuario/:id',authMiddleware.auth, UserController.deletarUsuario )



export default routes;