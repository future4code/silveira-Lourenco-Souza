import React from 'react'
import { useNavigate } from 'react-router-dom'


const CreateTrip = () => {

  const navigate = useNavigate()


  const goToAdiminHome = () => {
    navigate("/admin/trips/list")
  }

  return (
    <div> <h1>CreateTrip</h1 >
      <button onClick={goToAdiminHome} >AdminHomePage(Voltar)</button>

      <h2>Criar Viajem</h2>
      <div>
        <input type="text" placeholder='Nome' />
        <select name="" id="">
          <option value="">Escolha um planeta:</option>
        </select>
        <input type="date"/>
        <input type="text" placeholder='Descrição' />
        <input type="number" placeholder='Duração em dias' />
      </div>
      <button>Criar</button>
      <hr />
    </div>
  )
}

export default CreateTrip