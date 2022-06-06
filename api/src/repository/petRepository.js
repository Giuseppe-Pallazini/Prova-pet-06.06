import { con } from "../connection/connection.js"


export async function inserirPet(pet) {
    const comando = 
    `insert into tb_pet(nm_pet)
                values (?);`
const resposta = await con.body(comando,[pet.nome])
return resposta;
}