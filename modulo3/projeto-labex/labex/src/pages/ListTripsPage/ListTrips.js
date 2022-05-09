import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import {BASE_URL} from '../../constants/URL'
import TripCard from '../../components/TripCard/TripCard'

const ListTrips = () => {

  const [trips, setTrips] = useState([])


  // ----------------------------------------------------------------------------
  // Funções de navegação

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

    const listTrips = trips.map(element => {
        return (
          < TripCard key={element.id} tripsContent={element} />
        )
    })

    // ----------------------------------------------------------------------------


  return (
    <div> <h1>ListTrips</h1 >
        <button onClick={goToHomePage} >HomePage</button>
        <button onClick={goToLoginPage} >LoginPage</button>
        <button onClick={goToApplicationFormPage} >ApplicationFormPage</button>

        {trips.length === 0 && <p>Carregando...</p>}
        {listTrips}
        

    </div>
  )
}

export default ListTrips