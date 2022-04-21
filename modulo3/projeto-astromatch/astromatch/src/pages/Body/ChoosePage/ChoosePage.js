import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
const ContainerPerson = styled.div`
    flex-grow: 1;
`
const ContainerButton = styled.div`
  border: dotted black 1px;
  display: flex;
  justify-content: space-between;
  `
  const Button = styled.button`
    height: 50px;
    width: 50px;
  `

const ChoosePage = () => {
  return (
    <Container>
      <ContainerPerson>
        <img src="https://picsum.photos/400/400" alt="Imagem" />
        <p>Principal descrição da pessoa...</p>
      </ContainerPerson>
      <ContainerButton>
        <Button>No</Button>
        <Button>Ok</Button>
      </ContainerButton>
    </Container>
  )
}

export default ChoosePage