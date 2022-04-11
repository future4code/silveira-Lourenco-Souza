import React, { Component } from 'react'
import styled from 'styled-components'

import Trash from '../../assets/trash.png'
import Favorite from '../../assets/favorite.png'
import FavoriteColored from '../../assets/favorite-colored.png'

const Details = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  line-height: 25px;
`

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
  font-size: 20px;
  text-decoration: underline;
`
const SpanArtist = styled.span`
  font-size: 15px;
  color: black;
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
  :hover {
      opacity: 0.8;

    }
`
const Img = styled.img`
  width: 25px;
  padding: 3px;
`

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
