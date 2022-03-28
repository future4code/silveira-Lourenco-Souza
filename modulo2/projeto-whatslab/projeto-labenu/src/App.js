import React from 'react'
import styled from 'styled-components'

import Mensagem from './Componentes/Mensagem'

const Container = styled.div`
  max-width: 800px;
  height: 100vh;
  border: solid black 1px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 auto;
`

const CampoDasMensagens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  flex-grow: 1;
`


export default class App extends React.Component {

  render(){
    return(
      <Container>
        <CampoDasMensagens>
          <p>teste</p>
          <p>teste</p>
          <p>teste</p>
        </CampoDasMensagens>

        <Mensagem />
      </Container>
    )
  }
}