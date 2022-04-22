import React from 'react'

import { Container, Img, Button } from './HeaderPageOne-style'

import Logo from '../../../assets/IMG//astromatch.png'

const HeaderPageOne = (props) => {
  return (
    <Container>
      <Img src={Logo} alt="Astromatch Logo" />
      <Button onClick={props.onClickButton}>Lista</Button>
    </Container>
  )
}

export default HeaderPageOne