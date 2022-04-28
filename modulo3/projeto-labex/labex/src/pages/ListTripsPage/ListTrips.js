import React from 'react'
import { useNavigate } from 'react-router-dom'


const ListTrips = () => {

  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate("/")
  }

  const goToLoginPage = () => {
    navigate("/login")
  }

  const goToApplicationFormPage = () => {
    navigate("/trips/application")
  }


  return (
    <div> <h1>ListTrips</h1 >
        <button onClick={goToHomePage} >HomePage</button>
        <button onClick={goToLoginPage} >LoginPage</button>
        <button onClick={goToApplicationFormPage} >ApplicationFormPage</button>
    </div>
  )
}

export default ListTrips