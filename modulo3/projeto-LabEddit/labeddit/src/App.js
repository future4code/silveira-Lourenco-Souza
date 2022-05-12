import React from 'react'

import { GlobalStyled } from './global/GlobalStyled'
import FeedPage from './pages/FeedPage/FeedPage'
import LoginPage from './pages/LoginPage/LoginPage'
import PostDetailsPage from './pages/PostDetailsPage/PostDetailsPage'
import SignupPage from './pages/SignupPage/SignupPage'
import TextBox from './components/TextBox/TextBox'
import PostCard from './components/PostCard/PostCard'

const App = () => {
  return (
    <>
      <GlobalStyled />
      {/* <PostCard post /> */}
      {/* <FeedPage /> */}
      {/* <LoginPage /> */}
      <PostDetailsPage />
      {/* <SignupPage /> */}
    </>
  )
}

export default App