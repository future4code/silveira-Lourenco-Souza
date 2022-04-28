import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AdminHome from '../pages/AdminHomePage/AdminHome'
import ApplicationForm from '../pages/ApplicationFormPage/ApplicationForm'
import CreateTrip from '../pages/CreateTripPage/CreateTrip'
import Home from '../pages/HomePage/Home'
import ListTrips from '../pages/ListTripsPage/ListTrips'
import Login from '../pages/LoginPage/Login'
import TripDetails from '../pages/TripDetailsPage/TripDetails'

export const Router = () => {
  return (
    <BrowserRouter >
      <Routes >
        <Route index element={< Home />} />
        <Route path='login' element={< Login />} />
        <Route path='listTrips' element={< ListTrips />} />
        <Route path='applicationForm' element={< ApplicationForm />} />
        <Route path='adminHome' element={< AdminHome />} />
        <Route path='createTrip' element={< CreateTrip />} />
        <Route path='tripDetails' element={< TripDetails />} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router