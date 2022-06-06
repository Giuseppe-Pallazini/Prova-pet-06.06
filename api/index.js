import express from 'express'
import cors from 'cors'
import 'dotenv/config'


server = express();

server.use(cors())
server.use(express.json)

server.listen('process.env.PORT', () => {
    console.log(`API online na porta ${process.env.port}`)
})