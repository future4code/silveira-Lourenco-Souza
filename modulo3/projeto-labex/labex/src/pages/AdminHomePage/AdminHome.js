import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


import { BASE_URL } from '../../constants/URL'
import SelectTripDetailsCard from '../../components/SelectTripDetailsCad/SelectTripDetailsCard'

const AdminHome = () => {

  const navigate = useNavigate()

  const[trips, setTrips] = useState([])

  // ----------------------------------------------------------------------------
  // Funções de navegação

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

  // ----------------------------------------------------------------------------

  const getTrips = () => {

    axios
      .get(`${BASE_URL}/trips`)
      .then((res) => {
        setTrips(res.data.trips)
      })
      .catch((err) => {
        console.log(err.data.response);
      })
  }

  useEffect(() => {
    getTrips()
  }, [])

  // ----------------------------------------------------------------------------

  const listaViagens = trips.map((value) => {
    return (
      <SelectTripDetailsCard trips={value} key={value.id} />
    )
  })


  return (
    <div> <h1>AdminHome</h1>
      <button onClick={goToHomePage} >HomePage</button> {/* Provisório */}
      <button onClick={goToLoginPage} >LogoutButton</button> {/* Provisório */}
      <button onClick={goToCreateTripPage} >CreateTripPage</button>
      
      {trips.length === 0 && <p>Carregando...</p>}
      {listaViagens}
    </div>
  )
}

export default AdminHome