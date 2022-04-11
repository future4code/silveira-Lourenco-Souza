import React, { Component } from 'react'
import styled from 'styled-components'

import {Container, Span, ContainerButton, Button, Img} from './style'

import Trash from '../../assets/trash.png'
import Favorite from '../../assets/favorite.png'
import FavoriteColored from '../../assets/favorite-colored.png'


export default class PlaylistCard extends Component {
  render() {
    return (
      <Container>
        <Span>Minha Playlist</Span>

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
