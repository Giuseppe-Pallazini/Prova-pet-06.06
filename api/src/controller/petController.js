import { ConsultarTodos, inserirPet } from "../repository/petRepository.js"
import { Router } from 'express'

const server = Router();

server.post('/pet', async (req,resp) => {
    try {
        const adicionar = req.body;
        const resposta = await inserirPet(adicionar)
        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.get('/pet', async (req,resp) => {
    try {
        const BuscarTodos = await ConsultarTodos()
        resp.send(BuscarTodos)
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server