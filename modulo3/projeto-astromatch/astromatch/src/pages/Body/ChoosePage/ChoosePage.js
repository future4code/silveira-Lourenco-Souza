import React from 'react'

import {Container, ContainerPerson, ContainerButton, Button} from './ChoosePage-style'

const ChoosePage = () => {

  const onClickYes = () => {
    console.log('Sim...');
  }

  const onClickNo = () => {
    console.log('Não...');
  }

  return (
    <Container>
      <ContainerPerson>
        <img src="https://picsum.photos/400/400" alt="Imagem" />
        <p>Principal descrição da pessoa...</p>
      </ContainerPerson>
      <ContainerButton>
        
        <Button onClick={onClickNo} >No</Button>
        <Button onClick={onClickYes} >Ok</Button>

      </ContainerButton>
    </Container>
  )
}

export default ChoosePage