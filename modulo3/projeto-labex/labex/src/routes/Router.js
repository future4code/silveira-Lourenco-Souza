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
        <Route path='trips/list' element={< ListTrips />} />
        <Route path='trips/application' element={< ApplicationForm />} />
        <Route path='admin/trips/list' element={< AdminHome />} />
        <Route path='admin/trips/create' element={< CreateTrip />} />
        <Route path='admin/trips/details/:id' element={< TripDetails />} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router