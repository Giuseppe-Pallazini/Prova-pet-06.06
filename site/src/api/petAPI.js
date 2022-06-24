import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function CadastrarPet(nome) {
    const resposta = await api.post('/pet', {
        nome:nome
    }) 
    return resposta.data
}