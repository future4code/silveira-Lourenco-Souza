import React from 'react'

const ApplicationForm = () => {
  return (
    <div><h1>ApplicationForm</h1>

      <button>HomePage</button>
      <button>LoginPage</button>

      <h2>Inscrava-se para uma viagem</h2>
      <div>
        <select name="" id="">
          <option value="">Escolher viagem</option>
        </select>
        <input type="text" placeholder='Nome' />
        <input type="text" placeholder='Idade' />
        <input type="text" placeholder='Texto de Candidatura' />
        <input type="text" placeholder='Profissão' />
        <select name="" id="">
          <option value="">Escolha um país:</option>
        </select>
        <button>Enviar</button>
      </div>
      <hr />
    </div>
  )
}

export default ApplicationForm