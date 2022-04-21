import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const MatchPage = () => {
  return (
    <Container>
      Uma lista de matches aqui:
    </Container>
  )
}

export default MatchPage