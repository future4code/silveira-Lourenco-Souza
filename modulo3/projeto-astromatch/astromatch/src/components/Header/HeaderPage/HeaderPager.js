import React from 'react'

import { Container, Button, Img } from './HeaderPage-style'

import Logo from '../../../assets/IMG//astromatch.png'

const HeaderPage = (props) => {

  return (
    <Container >
      <Button onClick={props.onClickButton} position={props.position} ><img src={props.img} alt={props.position} /></Button>
      <Img src={Logo} alt="Astromatch Logo" />
    </Container>
  )
}

export default HeaderPage