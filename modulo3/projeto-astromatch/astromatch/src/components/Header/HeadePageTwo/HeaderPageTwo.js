import React from 'react'
import styled from 'styled-components'

import Logo from '../../../assets/IMG//astromatch.png'

const Container = styled.div`
  border: 1px dotted black;
  display: flex;
  justify-content: center;
`
const Img = styled.img`
  width: 150px;
  margin-right: auto;
`
const Button = styled.button`
  margin-right: auto;
`

const HeaderPageTwo = () => {
  return (
    <Container>
      <Button>Lista</Button>
      <Img src={Logo} alt="Astromatch Logo" />
    </Container>
  )
}

export default HeaderPageTwo