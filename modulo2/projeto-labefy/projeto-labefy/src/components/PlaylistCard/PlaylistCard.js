import React, { Component } from 'react'
import styled from 'styled-components'

import {Container, Span, ContainerButton, Button, Img} from './style'

import Trash from '../../assets/trash.png'
import Favorite from '../../assets/favorite.png'
import FavoriteColored from '../../assets/favorite-colored.png'
import axios from 'axios'


export default class PlaylistCard extends Component {

  DeletePlaylist = (value) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${value.id}`
    const header = {
      headers: {
        "Authorization": "lourenco-souza-silveira"
      }
    }

    if(window.confirm(`Deseja realmente deletar a Playlist ${value.name}?`) === true) {
      axios.delete(url, header)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        })
    }
  }

  render() {

    const ListaDePlaylist = this.props.NomePlaylist.map((value,index) => {
      return (
        <Container key={index}>
          <Span>{value.name}</Span>

          <ContainerButton>
            <Button>
              <Img src={Favorite} alt="" />
            </Button>
            <Button onClick={() => this.DeletePlaylist(value)} >
              <Img src={Trash} alt="" />
            </Button>
          </ContainerButton>
        </Container>
      )
    })

    return (
      <>
        {ListaDePlaylist}
      </>
    )
  }
}
