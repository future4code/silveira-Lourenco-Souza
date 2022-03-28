import React from 'react'
import styled from 'styled-components'

import background from './img/background.jpg'

import Mensagem from './Componentes/Mensagem'

const Container = styled.div`
  max-width: 700px;
  height: 100vh;
  border: solid black 1px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 auto;
  background-image: url('https://theabbie.github.io/blog/assets/official-whatsapp-background-image.jpg');
`

const CampoDasMensagens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  flex-grow: 1;
`

const CustomSpan = styled.span`
  font-weight: bolder;
`
const Balao = styled.p`
  border: solid black 1px;
  background-color: white;
`

export default class App extends React.Component {

  constructor() {
    super()

    this.state = {
      mensagens: []
    }
  }

  adMensag = (mensag) => {
    this.setState({mensagens: [...this.state.mensagens, mensag]})
  }

  render(){
    return(
      <Container>
        <CampoDasMensagens>
          {this.state.mensagens.map((mensag, index) => {
            return (
              <Balao key={index}><CustomSpan>{mensag.usuario}</CustomSpan>{`: ${mensag.texto}`}</Balao>
            )
          })}
        </CampoDasMensagens>

        <Mensagem 
          adMensag={this.adMensag}
        />
      </Container>
    )
  }
}