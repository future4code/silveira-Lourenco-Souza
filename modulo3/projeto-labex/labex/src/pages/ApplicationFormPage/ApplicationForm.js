import React from 'react'
import { useNavigate } from 'react-router-dom'


const ApplicationForm = () => {

  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate("/")
  }

  const goToLoginPage = () => {
    navigate("/login")
  }

  const goToListTripsPage = () => {
    navigate("/trips/list")
  }

  return (
    <div><h1>ApplicationForm</h1>

      <button onClick={goToHomePage} >HomePage</button>
      <button onClick={goToLoginPage} >LoginPage</button>

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
        <button onClick={goToListTripsPage} >ListTripsPage(Voltar)</button>

      </div>
      <hr />
    </div>
  )
}

export default ApplicationForm