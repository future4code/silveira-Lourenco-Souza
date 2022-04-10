import React, { Component } from 'react'
import styled from 'styled-components'

import Trash from '../../assets/trash.png'
import Favorite from '../../assets/favorite.png'
import FavoriteColored from '../../assets/favorite-colored.png'

const Container = styled.div`
  background-color: #EDEDED;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  justify-content: flex-start;
  word-break:break-all;
    :hover {
      background-color: #b4040c;
        span {
          color: white;
        }
    };
`
const Span = styled.span`
  color: black;
  padding: 10px;
  font-size: 30px;
  width: 80%;
  flex-grow: 1;
  text-decoration: underline;
`
const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
`
const Button = styled.button`
  cursor: pointer;
  display: flex;
  border-radius: 5px;
  padding: 2px;
  margin: 5px;
`
const Img = styled.img`
  width: 25px;
  padding: 3px;
`

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
