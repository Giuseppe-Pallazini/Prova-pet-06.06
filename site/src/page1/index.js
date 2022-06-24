import { useState } from "react";
import { CadastrarPet } from '../../src/api/petAPI.js'


function App() {
  const [nome, setNome] = useState('')

  async function SalvarClick() {
    try {
    const r = await CadastrarPet(nome)
    alert('Pet Cadastrado!')
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <main className="tudo">
      <h1> Cadastrar Pet! </h1>

      <input type={'text'} placeholder='Nome:' value={nome} onChange={e => setNome(e.target.value)} />
      <button type="button" onClick={SalvarClick}> Salvar </button>

    </main>
  );
}

export default App;
