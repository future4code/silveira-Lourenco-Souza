import React, { Component } from 'react'
import styled from 'styled-components'
import {Container, Details, Span, SpanArtist, ContainerButton, Button, Img} from './style'

import Trash from '../../assets/trash.png'
import Favorite from '../../assets/favorite.png'
import FavoriteColored from '../../assets/favorite-colored.png'



export default class MusicCard extends Component {
  render() {
    return (
      <Container>
        <Details>
          <Span>Minha Música</Span>
          <SpanArtist>Autor/Banda</SpanArtist>
        </Details>

        <ContainerButton>
          <Button>
            <Img src={Favorite} alt="" />
          </Button>
          <Button>
            <Img src={Trash} alt="" />
          </Button>
        </ContainerButton>
      </Container>
    )
  }
}
