import React from 'react'
import { useNavigate } from 'react-router-dom'


const TripDetails = () => {

  const navigate = useNavigate()

  const goToAdiminHome = () => {
    navigate("/admin/trips/list")
  }

  return (
    <div> <h1>TripDetails</h1 >

      <button onClick={goToAdiminHome} >AdminHomePage(Voltar)</button>
    </div>
  )
}

export default TripDetails