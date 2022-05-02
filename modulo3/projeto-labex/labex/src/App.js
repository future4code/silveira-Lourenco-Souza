import React from 'react'
import {Router} from './routes/Router'

import { GlobalStyled } from './App-style'



const App = () => {
  return (
    <div>
      <GlobalStyled />
      <Router />

    </div>
  )
}

export default App