import React from 'react'

import { Container, GlobalStyled } from './App-style'

import Main from './pages/Main/Main'

const App = () => {
  return (
    <Container>
      <Main />
      <GlobalStyled />
    </Container>
  )
}

export default App