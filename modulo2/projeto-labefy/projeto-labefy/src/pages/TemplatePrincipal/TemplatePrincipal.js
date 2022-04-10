import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Header, Main, Footer, Grid, Span, Img, DivLogo } from './style'

import Logo from '../../assets/logo-labefy.png'
import AddPlaylistCard from '../../components/AddPlaylistCard/AddPlaylistCard'
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard'


export default class TemplatePrincipal extends Component {
  render() {
    return (
      <Container>
        <Header>

          <DivLogo>
            <Img src={Logo} alt="Logo Labefy" />
            <Span>Labefy</Span>
          </DivLogo>
        </Header>

        <Main>
          <Grid>
          <AddPlaylistCard />
          
          <PlaylistCard />
          

          </Grid>
        </Main>

        <Footer>
          <span>Aqui é o Footer</span>
        </Footer>

      </Container>
    )
  }
}
