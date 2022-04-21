import React from 'react'
import styled from 'styled-components'

import HeaderPageOne from '../../components/Header/HeaderPageOne/HeaderPageOne'
import HeaderPageTwo from '../../components/Header/HeadePageTwo/HeaderPageTwo'
import MatchPage from '../Body/MatchPage/MatchPage'
import ChoosePage from '../Body/ChoosePage/ChoosePage'

const Container = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Main = () => {
  return (
    <Container>

      <HeaderPageOne />
      <ChoosePage />
      {/* <HeaderPageTwo />
      <MatchPage /> */}
    </Container>
  )
}

export default Main