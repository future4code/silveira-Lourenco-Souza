import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import { BASE_URL } from '../../constants/URL'

const TripDetails = () => {

  const navigate = useNavigate()
  const params = useParams()

  const [tripDetails, setTripDetails] = useState({})

  const goToAdiminHome = () => {
    navigate("/admin/trips/list")
  }
  // ----------------------------------------------------------------------------

  const getTripDetails = () => {

    const token = localStorage.getItem("token")
    console.log(token);

    const headers = { headers :{

        "auth": token
      }
    }

    axios
    .get(`${BASE_URL}/trip/${params.id}`, headers)
    .then((res) => {
      setTripDetails(res.data.trip)
    })
    .catch((err) => {
      console.log(err.response.data.message);
    })
    
  }

  useEffect(() => {
    getTripDetails()
  }, [])

  // ----------------------------------------------------------------------------

  return (
    <div> <h1>TripDetails</h1 >
    <hr />

    {!tripDetails && <p>Carregando...</p>}

      <div>
        <p>Nome: {tripDetails.name}</p>
        <p>Descrição: {tripDetails.description}</p>
        <p>Planeta: {tripDetails.planet}</p>
        <p>Duração: {tripDetails.durationInDays}</p>
        <p>Data: {tripDetails.date}</p>
      </div>

      <button onClick={goToAdiminHome} >AdminHomePage(Voltar)</button>
    </div>
  )
}

export default TripDetails