import React from 'react'
import Router from "./routes/Router"

import { GlobalStyled } from './global/GlobalStyled'


const App = () => {
  return (
    <>
      <GlobalStyled />
      <Router />
    </>
  )
}

export default App