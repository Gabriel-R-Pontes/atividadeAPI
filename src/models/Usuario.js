import mongoose from 'mongoose';

const Usuario = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    endereco:{
        type:{
            rua:{
                type: String,
                required: true
            },
            numero:{
                type: String,
                required: true
            },
            cidade:{
                type: String,
                required: true
            },
            estado:{
                type: String,
                required: true
            }
        },
        required:true    
    }   
})

export default mongoose.model('usuario', Usuario);