import React from 'react'
import { useNavigate } from 'react-router-dom'


const AdminHome = () => {

  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate("/")
  }

  const goToLoginPage = () => {
    navigate("/login")
  }

  const goToCreateTripPage = () => {
    navigate("/admin/trips/create")
  }

  const goToTripDetails = () => {
    navigate("/admin/trips/details")
  }

  return (
    <div> <h1>AdminHome</h1>
      <button onClick={goToHomePage} >HomePage</button>
      <button onClick={goToLoginPage} >LogoutButton</button> {/* Provisório */}
      <button onClick={goToCreateTripPage} >CreateTripPage</button>
      <button onClick={goToTripDetails} >TripDetails</button>
      <hr />
    </div>
  )
}

export default AdminHome