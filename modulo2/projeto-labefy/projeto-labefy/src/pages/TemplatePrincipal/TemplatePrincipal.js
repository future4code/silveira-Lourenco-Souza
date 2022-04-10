import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Header, Main, Footer, Grid } from './style'

import AddPlaylistCard from '../../components/AddPlaylistCard/AddPlaylistCard'


const Span = styled.span`
  background-color: green;
  border: 1px blue solid;
  height: 170px;
  /* width: 380px; */
`


export default class TemplatePrincipal extends Component {
  render() {
    return (
      <Container>
        <Header>
          <span>Labefy</span>
        </Header>

        <Main>
          <Grid>
          <AddPlaylistCard />
          {/* <Span>Aqui é o Main</Span> */}
          
          
          
  
          </Grid>
        </Main>

        <Footer>
          <span>Aqui é o Footer</span>
        </Footer>

      </Container>
    )
  }
}
