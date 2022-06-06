import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import repository from './src/repository/petRepository.js'


const server = express();
server.use(cors())
server.use(express.json())
server.use(repository)

server.listen(process.env.PORT, () => 
        console.log(`API Online na Porta ${process.env.PORT}`));