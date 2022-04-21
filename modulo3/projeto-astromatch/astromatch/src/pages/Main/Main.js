import React from 'react'
import styled from 'styled-components'

import HeaderPageOne from '../../components/Header/HeaderPageOne/HeaderPageOne'
import HeaderPageTwo from '../../components/Header/HeadePageTwo/HeaderPageTwo'

const Container = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 600px;
`

const Main = () => {
  return (
    <Container>

      <HeaderPageOne />
      {/* <HeaderPageTwo /> */}
    </Container>
  )
}

export default Main