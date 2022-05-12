import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import ErrorPage from '../pages/ErrorPage/ErrorPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostDetailsPage from '../pages/PostDetailsPage/PostDetailsPage'
import SignupPage from '../pages/SignupPage/SignupPage'



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/post' element={<FeedPage />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/post/:id' element={<PostDetailsPage/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router