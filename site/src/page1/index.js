import { useEffect, useState } from "react";
import { CadastrarPet, ListarTodosPets } from '../../src/api/petAPI.js'


function App() {
  const [nome, setNome] = useState('')
  const [pet, setPet] = useState([])

  async function SalvarClick() {
    try {
      const r = await CadastrarPet(nome)
      alert('Pet Cadastrado!')
    } catch (err) {
      alert(err.message)
    }
  }



  async function ListarTodos() {
    const resp = await ListarTodosPets();
    console.log(resp)
    setPet(resp)
  }


  useEffect(() => {
    ListarTodos();
  }, [])


  return (
    <main className="tudo">
      <h1> Cadastrar Pet! </h1>

      <input type={'text'} placeholder='Nome:' value={nome} onChange={e => setNome(e.target.value)} />
      <button type="button" onClick={SalvarClick}> Salvar </button>
      <br /> <br /> <br /> <br />

      <table>
        <thead>
            <tr>
                <th> ID / </th>
                <th> Nome </th>
            </tr>
        </thead>

        <tbody>

            {pet.map(item =>
              <tr>
                  <td> {item.ID} </td>
                  <td> {item.Nome} </td>
              </tr>
            )}
        </tbody>
      </table>

    </main>
  );
}

export default App;
