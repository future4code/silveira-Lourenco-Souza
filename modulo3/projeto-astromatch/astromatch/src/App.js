import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'

import Main from './pages/Main/Main'

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const App = () => {
  return (
    <Container>
      <Main />
      <GlobalStyled />
    </Container>
  )
}

export default App