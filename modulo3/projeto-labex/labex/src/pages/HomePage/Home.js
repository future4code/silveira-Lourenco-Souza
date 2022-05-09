import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate()

  const goToLoginPage = () => {
    navigate("/login")
  }

  const goToListTripsPage = () => {
    navigate("/trips/list")
  }


  return (
    <div> <h1>Home</h1 >
      <button onClick={goToLoginPage} >LoginPage</button>
      <button onClick={goToListTripsPage} >ListTripsPage</button>
      <hr />
    </div>
  )
}

export default Home