import React from 'react'

import { GlobalStyled } from './global/GlobalStyled'
import FeedPage from './pages/FeedPage/FeedPage'
import LoginPage from './pages/LoginPage/LoginPage'
import PostDetailsPage from './pages/PostDetailsPage/PostDetailsPage'
import SignupPage from './pages/SignupPage/SignupPage'
import TextBox from './components/TextBox/TextBox'

const App = () => {
  return (
    <>
      <GlobalStyled />
      <TextBox />
      {/* <FeedPage /> */}
      {/* <LoginPage /> */}
      {/* <PostDetailsPage /> */}
      {/* <SignupPage /> */}
    </>
  )
}

export default App