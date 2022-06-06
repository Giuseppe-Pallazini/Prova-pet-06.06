import { con } from "../connection/connection.js"


export async function inserirPet(pet) {
    const comando = 
    `insert into tb_pet(nm_pet)
                values (?);`
const [resposta] = await con.query(comando,pet.nome)
return resposta;
}


export async function ConsultarTodos(){
    const comando = `select nm_pet
    from tb_pet`
    const [linhas] = await con.query (comando)
    return linhas
}