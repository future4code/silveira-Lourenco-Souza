import React from 'react'

import { Container, Button, Img } from './HeaderPage-style'

import Logo from '../../../assets/IMG//astromatch.png'

const HeaderPage = (props) => {

  return (
    <Container >
      <Button onClick={props.onClickButton} position={props.position} >Lista</Button>
      <Img src={Logo} alt="Astromatch Logo" />
    </Container>
  )
}

export default HeaderPage