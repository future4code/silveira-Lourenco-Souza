import React from 'react'
import styled from 'styled-components'

import Logo from '../../../assets/IMG//astromatch.png'

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
`
const Img = styled.img`
  width: 150px;
  margin-left: auto;
`
const Button = styled.button`
  margin-left: auto;
`

const HeaderPageOne = () => {
  return (
    <Container>
      <Img src={Logo} alt="Astromatch Logo" />
      <Button>Lista</Button>
    </Container>
  )
}

export default HeaderPageOne