import App from './App';
const dotenv = require('dotenv').config();

App.createServer(process.env.PORT);
