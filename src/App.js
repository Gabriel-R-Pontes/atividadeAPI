import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import options from '../db.config'
const dotenv = require('dotenv').config();

class App {
    server = express();
    constructor() {
        this.middlewares()
        mongoose.connect(process.env.DATABASE_URL, options)
        this.createDatabaseConnection()
    }
    middlewares() {
        this.server.use(express.json())
        this.server.use(routes)
    }
    createServer(port) {
        this.server.listen(port, function () {
            console.log('API rodando!')
        })
    }
    createDatabaseConnection(){
        const db = mongoose.connection
        db.on('open', function(){
            console.log('Conexão com o banco ok!')
        })
        db.on('error', function(){
            console.log('Erro ao conectar com o banco')
        })
    }
}

export default new App();