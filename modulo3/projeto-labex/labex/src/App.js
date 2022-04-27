import React from 'react'

import AdminHome from './pages/AdminHomePage/AdminHome'
import ApplicationForm from './pages/ApplicationFormPage/ApplicationForm'
import CreateTrip from './pages/CreateTripPage/CreateTrip'
import Home from './pages/HomePage/Home'
import ListTrips from './pages/ListTripsPage/ListTrips'
import Login from './pages/LoginPage/Login'
import TripDetails from './pages/TripDetailsPage/TripDetails'


const App = () => {
  return (
    <div>

      < AdminHome/>
      < ApplicationForm/>
      < CreateTrip/>
      < Home/>
      < ListTrips/>
      < Login/>
      < TripDetails/>

    </div>
  )
}

export default App