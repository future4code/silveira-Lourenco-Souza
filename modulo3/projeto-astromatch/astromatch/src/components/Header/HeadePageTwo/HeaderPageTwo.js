import React from 'react'

import { Container, Button, Img } from './HeaderPageTwo-style'

import Logo from '../../../assets/IMG//astromatch.png'

const HeaderPageTwo = (props) => {
  return (
    <Container>
      <Button onClick={props.onClickButton} >Lista</Button>
      <Img src={Logo} alt="Astromatch Logo" />
    </Container>
  )
}

export default HeaderPageTwo